import { useSnackbar } from 'notistack';

/**
 * Imperative toast hook — use inside mutation callbacks.
 *
 * @example
 * const toast = useToast();
 *
 * useMutation({
 *   mutationFn: createUser,
 *   onSuccess: () => toast.success('User created'),
 *   onError: () => toast.error('Failed to create user'),
 * });
 */
export function useToast() {
  const { enqueueSnackbar } = useSnackbar();

  return {
    success: (message: string) => enqueueSnackbar(message, { variant: 'success' }),
    error: (message: string) => enqueueSnackbar(message, { variant: 'error' }),
    info: (message: string) => enqueueSnackbar(message, { variant: 'info' }),
  };
}
