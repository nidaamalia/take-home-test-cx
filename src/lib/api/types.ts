export interface StandardApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
