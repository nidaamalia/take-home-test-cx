import { useQuery } from '@tanstack/react-query';
import { createQueryKeys } from '@lib/query/keys';
import { dashboardService } from '../services/dashboardService';

const dashboardKeys = createQueryKeys('dashboard');

/**
 * Fetches summary stats for the dashboard header cards.
 *
 * Pattern to follow when building hooks in user-management:
 * 1. Call the service function inside queryFn
 * 2. Check response.success — throw if false
 * 3. Return response.data
 * 4. Include relevant params in queryKey so React Query refetches when they change
 *
 * @example
 * const { data, isLoading, error } = useDashboardStats();
 */
export function useDashboardStats() {
  return useQuery({
    queryKey: dashboardKeys.custom('stats'),
    queryFn: async () => {
      const response = await dashboardService.getStats();
      if (!response.success) {
        throw new Error(response.message ?? 'Failed to fetch dashboard stats');
      }
      return response.data;
    },
  });
}
