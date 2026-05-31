import { LayoutDashboard } from 'lucide-react';
import type { ModuleConfig } from '../_registry/types';
import { DashboardPage } from './pages/DashboardPage';

export const dashboardModule: ModuleConfig = {
  id: 'dashboard',
  label: 'Dashboard',
  routes: [
    { path: '/dashboard', element: DashboardPage },
  ],
  navItems: [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  ],
};
