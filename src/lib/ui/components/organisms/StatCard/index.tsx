import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import type React from 'react';

export interface StatCardProps {
  /** Card heading label. */
  title: string;
  /** Primary metric value. */
  value: string | number;
  /** Optional secondary line below the value. */
  subtitle?: string;
  /** Lucide-react or MUI icon component rendered at the top-right. */
  icon?: React.ComponentType<{ size?: number; color?: string }>;
  /** When true, renders skeleton placeholders instead of content. */
  loading?: boolean;
  sx?: SxProps<Theme>;
}

/**
 * Single-metric display card used in summary / dashboard layouts.
 *
 * This is an example of an organism: a self-contained UI unit with its own
 * layout, composed from MUI primitives. When building a new organism (e.g.
 * DataGrid), follow the same pattern — typed props interface, named export,
 * JSDoc with @example.
 *
 * @example
 * <StatCard title="Total Users" value={142} subtitle="+3 this week" icon={Users} />
 * <StatCard title="Active Users" value={98} loading={isLoading} />
 */
export function StatCard({ title, value, subtitle, icon: Icon, loading = false, sx }: StatCardProps) {
  return (
    <Card sx={{ flex: 1, minWidth: 180, ...sx }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          {Icon && <Icon size={20} color="gray" />}
        </Stack>

        {loading ? (
          <>
            <Skeleton variant="text" width="60%" height={40} />
            <Skeleton variant="text" width="40%" />
          </>
        ) : (
          <>
            <Typography variant="h4" fontWeight={700}>
              {value}
            </Typography>
            {subtitle && (
              <Typography variant="caption" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
