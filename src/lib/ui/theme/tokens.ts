/**
 * MUI theme token references — NOT hex values.
 * MUI resolves these strings against the active theme at render time.
 *
 * Use in `sx` props:
 *   sx={{ color: tokens.colors.success }}  // resolves to theme.palette.success.main
 *
 * Never use hardcoded hex like '#2E7D32' — use tokens instead.
 */
export const tokens = {
  colors: {
    success: 'success.main',
    successLight: 'success.light',
    warning: 'warning.main',
    error: 'error.main',
    neutral: 'action.selected',
    neutralText: 'text.secondary',
    primary: 'primary.main',
  },
  spacing: {
    pageGutter: 3,
    sectionGap: 2,
    inlineGap: 1,
  },
} as const;
