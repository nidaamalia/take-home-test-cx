export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalActivity: number;
}

/**
 * Represents a single user activity event shown in the dashboard table.
 * Used by TODO 1: the Recent User Activity DataGrid section.
 */
export interface UserActivity {
  id: string;
  userName: string;
  action: string;
  timestamp: string;
  status: 'success' | 'failed';
}

export type UserActivityStatus = UserActivity['status'];
