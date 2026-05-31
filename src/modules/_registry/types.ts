import type { ComponentType } from 'react';

export interface NavItem {
  label: string;
  path: string;
  icon: ComponentType;
}

export interface ModuleRoute {
  path: string;
  element: ComponentType;
}

export interface ModuleConfig {
  id: string;
  label: string;
  routes: ModuleRoute[];
  navItems: NavItem[];
}
