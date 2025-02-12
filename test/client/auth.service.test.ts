import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useAuthApi } from '@/services/api/auth.service';
import { useHttp } from '@/services/http';

// Mock the http service
vi.mock('@/services/http', () => ({
  useHttp: vi.fn(),
}));

describe('useAuthApi', () => {
  let authApi: ReturnType<typeof useAuthApi>;
  let mockHttp: ReturnType<typeof vi.fn>;

  const mockSuccessResponse = {
    Data: {
      token: 'mock-token',
      refreshToken: {
        token: 'mock-refresh-token',
        expiration: '2024-12-31T23:59:59Z',
      },
      user: {
        id: 1,
        name: 'John',
        surname: 'Doe',
        phoneNumber: '1234567890',
        picture: 'profile.jpg',
        expired: false,
        userTypeId: 1,
        isImageRecognitionUser: false,
        customerCode: 'CUST123',
      },
      pos: {
        id: 1,
        posCode: 'POS1',
        posName: 'Test POS',
        posChannel: 'RETAIL',
        partners: [],
        hasPartnerPMI: false,
        isCurrentPos: true,
      },
      staffValidation: true,
      tokenRole: 'user',
      deviceValidation: true,
      isRedirectPmaktif: false,
    },
    Error: null,
    Version: {
      AppVersion: '1.0.0',
      WebVersion: '1.0.0',
    },
  };

  beforeEach(() => {
    mockHttp = vi.fn();
    (useHttp as any).mockReturnValue(mockHttp);
    authApi = useAuthApi();
  });

  describe('loginWithCustomerCode', () => {
    const credentials = {
      customerCode: 'CUST123',
      password: 'password123',
    };

    it('should successfully login with customer code', async () => {
      mockHttp.mockResolvedValueOnce(mockSuccessResponse);

      const result = await authApi.loginWithCustomerCode(credentials);

      expect(mockHttp).toHaveBeenCalledWith('/account/loggedin/customer', {
        method: 'POST',
        body: credentials,
      });
      expect(result).toEqual(mockSuccessResponse.Data);
    });

    it('should handle 401 unauthorized error', async () => {
      const error = new Error('Invalid credentials') as Error & {
        status: number;
      };
      error.status = 401;
      mockHttp.mockRejectedValueOnce(error);

      await expect(authApi.loginWithCustomerCode(credentials)).rejects.toThrow(
        'Invalid credentials'
      );
    });

    it('should handle empty response', async () => {
      mockHttp.mockResolvedValueOnce({ Data: null });

      await expect(authApi.loginWithCustomerCode(credentials)).rejects.toThrow(
        'Empty response from server'
      );
    });
  });

  describe('loginWithPhoneNumber', () => {
    const credentials = {
      phoneNumber: '1234567890',
      password: 'password123',
    };

    it('should successfully login with phone number', async () => {
      mockHttp.mockResolvedValueOnce(mockSuccessResponse);

      const result = await authApi.loginWithPhoneNumber(credentials);

      expect(mockHttp).toHaveBeenCalledWith('/account/loggedin/phone', {
        method: 'POST',
        body: credentials,
      });
      expect(result).toEqual(mockSuccessResponse.Data);
    });
  });

  describe('loginWithTaxId', () => {
    const credentials = {
      taxId: '1234567890',
      password: 'password123',
    };

    it('should successfully login with tax ID', async () => {
      mockHttp.mockResolvedValueOnce(mockSuccessResponse);

      const result = await authApi.loginWithTaxId(credentials);

      expect(mockHttp).toHaveBeenCalledWith('/account/loggedin/vkn', {
        method: 'POST',
        body: credentials,
      });
      expect(result).toEqual(mockSuccessResponse.Data);
    });
  });
});
