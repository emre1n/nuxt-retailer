import { $fetch, type FetchOptions } from 'ofetch';

export function createHttpService(options: FetchOptions = {}) {
  const config = useRuntimeConfig();

  return $fetch.create({
    baseURL: config.public.apiBaseUrl as string,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
}

// Create a composable
export function useHttp() {
  return createHttpService();
}
