interface LoginType {
  id: 'phone' | 'customer' | 'taxId';
  label: string;
  placeholder: string;
}

export type { LoginType };
