import MuiAlert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';

export interface AlertProps {
  message: string;
  severity?: AlertColor;
}

/**
 * Inline feedback banner for errors, warnings, and info messages.
 *
 * @example
 * {error && <Alert message={error.message} />}
 * <Alert message="Saved successfully" severity="success" />
 */
export function Alert({ message, severity = 'error' }: AlertProps) {
  return <MuiAlert severity={severity}>{message}</MuiAlert>;
}
