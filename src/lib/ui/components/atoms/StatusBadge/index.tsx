import Chip from '@mui/material/Chip';
import type { SxProps, Theme } from '@mui/material/styles';

export interface StatusBadgeProps {
  /** The status string to display. */
  status: string;
  /**
   * Maps each status value to a MUI theme color token.
   * Use tokens from `@lib/ui/theme/tokens` — never hardcode hex.
   *
   * @example
   * const colorMap = {
   *   active: 'success.main',
   *   inactive: 'text.secondary',
   * };
   */
  colorMap: Record<string, string>;
  sx?: SxProps<Theme>;
}

/**
 * Displays a status value as a colored MUI Chip.
 * Colors are driven by a `colorMap` prop so this component works for any domain.
 *
 * @example
 * // In your module, define the colorMap once:
 * const activityColorMap: Record<UserActivityStatus, string> = {
 *   success: 'success.main',
 *   failed: 'error.main',
 * };
 *
 * // Then use in renderCell or anywhere:
 * <StatusBadge status="success" colorMap={activityColorMap} />
 */
export function StatusBadge({ status, colorMap, sx }: StatusBadgeProps) {
  const bgColor = colorMap[status] ?? 'action.selected';
  const label = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <Chip
      label={label}
      size="small"
      sx={{
        bgcolor: bgColor,
        color: 'white',
        fontWeight: 500,
        fontSize: '0.75rem',
        ...sx,
      }}
    />
  );
}
