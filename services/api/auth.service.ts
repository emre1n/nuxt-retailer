import { useHttp } from '@/services/http';

interface BaseLoginResponse {
  token: string;
  refreshToken: {
    token: string;
    expiration: string;
  };
  user: {
    id: number;
    name: string;
    surname: string;
    phoneNumber: string;
    picture: string;
    expired: boolean;
    userTypeId: number;
    isImageRecognitionUser: boolean;
  };
  pos: {
    id: number;
    posCode: string;
    posName: string;
    posChannel: string;
    partners: Array<{
      partnerName: string;
      partnerCode: string;
      partnerId: number;
      partnerLoginKey: string | null;
      posId: number;
    }>;
    hasPartnerPMI: boolean;
    isCurrentPos: boolean;
  };
  staffValidation: boolean;
  tokenRole: string;
  deviceValidation: boolean;
  isRedirectPmaktif: boolean;
}

interface CustomerLoginCredentials {
  customerCode: string;
  password: string;
}

interface PhoneLoginCredentials {
  phoneNumber: string;
  password: string;
}

interface TaxIdLoginCredentials {
  taxId: string;
  password: string;
}

interface CustomerLoginResponse extends BaseLoginResponse {
  user: {
    customerCode: string;
  } & BaseLoginResponse['user'];
}

interface PhoneLoginResponse extends BaseLoginResponse {
  user: {
    phoneNumber: string;
  } & BaseLoginResponse['user'];
}

interface TaxIdLoginResponse extends BaseLoginResponse {
  user: {
    taxId: string;
  } & BaseLoginResponse['user'];
}

// Add the wrapper interface
interface ApiResponse<T> {
  Data: T;
  Error: null | string;
  Version: {
    AppVersion: string;
    WebVersion: string;
  };
}

export const useAuthApi = () => {
  const subdomain = '/account';
  const http = useHttp();

  const handleLoginError = (error: any): never => {
    if (error.status === 401) {
      throw new Error('Invalid credentials');
    }
    if (error.status === 422) {
      throw new Error('Invalid input format');
    }
    const errorMessage = error.message || 'An error occurred during login';
    throw new Error(errorMessage);
  };

  const loginWithCustomerCode = async (
    credentials: CustomerLoginCredentials
  ): Promise<CustomerLoginResponse> => {
    try {
      const response = await http<ApiResponse<CustomerLoginResponse>>(
        `${subdomain}/loggedin/customer`,
        {
          method: 'POST',
          body: credentials,
        }
      );

      if (!response || !response.Data) {
        throw new Error('Empty response from server');
      }

      return response.Data;
    } catch (error) {
      return handleLoginError(error);
    }
  };

  const loginWithPhoneNumber = async (
    credentials: PhoneLoginCredentials
  ): Promise<PhoneLoginResponse> => {
    try {
      const response = await http<ApiResponse<PhoneLoginResponse>>(
        `${subdomain}/loggedin/phone`,
        {
          method: 'POST',
          body: credentials,
        }
      );

      if (!response || !response.Data) {
        throw new Error('Empty response from server');
      }

      return response.Data;
    } catch (error) {
      return handleLoginError(error);
    }
  };

  const loginWithTaxId = async (
    credentials: TaxIdLoginCredentials
  ): Promise<TaxIdLoginResponse> => {
    try {
      const response = await http<ApiResponse<TaxIdLoginResponse>>(
        `${subdomain}/loggedin/vkn`,
        {
          method: 'POST',
          body: credentials,
        }
      );

      if (!response || !response.Data) {
        throw new Error('Empty response from server');
      }

      return response.Data;
    } catch (error) {
      return handleLoginError(error);
    }
  };

  return {
    loginWithCustomerCode,
    loginWithPhoneNumber,
    loginWithTaxId,
  };
};
