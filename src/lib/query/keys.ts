/**
 * Factory for creating namespaced, type-safe query keys per module.
 *
 * Usage — create once per module:
 *   export const dashboardKeys = createQueryKeys('dashboard');
 *
 *   dashboardKeys.all                        // ['dashboard']
 *   dashboardKeys.custom('stats')            // ['dashboard', 'stats', undefined]
 *   dashboardKeys.custom('stats', filters)   // ['dashboard', 'stats', { ...filters }]
 *
 * When building user-management, create:
 *   export const userManagementKeys = createQueryKeys('user-management');
 */
export function createQueryKeys(module: string) {
  return {
    all: [module] as const,
    custom: <P>(key: string, params?: P) => [module, key, params] as const,
  };
}
