import MuiButton from '@mui/material/Button';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  /**
   * Visual variant:
   * - `contained` — primary filled (default)
   * - `outlined` — primary border
   * - `text` — no background or border
   * - `destructive` — red filled for irreversible actions
   */
  variant?: 'contained' | 'outlined' | 'text' | 'destructive';
  /**
   * When true, replaces startIcon with a spinner.
   * Button stays interactive unless you also pass `disabled`.
   */
  onLoading?: boolean;
}

/**
 * Standard action trigger backed by MUI Button.
 *
 * @example
 * <Button>Save</Button>
 * <Button variant="outlined">Cancel</Button>
 * <Button variant="destructive" onClick={handleDelete}>Delete</Button>
 * <Button onLoading={isSaving} startIcon={<SaveIcon />}>Save</Button>
 */
export function Button({
  variant = 'contained',
  onLoading,
  startIcon,
  children,
  sx,
  ...props
}: ButtonProps) {
  const muiVariant = variant === 'destructive' ? 'contained' : variant;
  const color = variant === 'destructive' ? 'error' : 'primary';

  return (
    <MuiButton
      variant={muiVariant}
      color={color}
      startIcon={onLoading ? <CircularProgress size={16} color="inherit" /> : startIcon}
      sx={{ textTransform: 'none', boxShadow: 'none', '&:hover': { boxShadow: 'none' }, ...sx }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
