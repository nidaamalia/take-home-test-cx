import type { StandardApiResponse } from './types';

const BASE_URL = '/api';

async function request<T>(
  method: string,
  path: string,
  body?: unknown,
): Promise<StandardApiResponse<T>> {
  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({})) as { message?: string };
    throw new Error(err.message ?? `HTTP ${response.status}`);
  }

  return response.json() as Promise<StandardApiResponse<T>>;
}

export const apiClient = {
  get: <T>(path: string) => request<T>('GET', path),
  post: <T>(path: string, body: unknown) => request<T>('POST', path, body),
  patch: <T>(path: string, body: unknown) => request<T>('PATCH', path, body),
  delete: <T>(path: string) => request<T>('DELETE', path),
};
