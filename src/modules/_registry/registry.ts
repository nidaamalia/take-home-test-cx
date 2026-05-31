import type { ModuleConfig } from './types';

class ModuleRegistry {
  private modules: Map<string, ModuleConfig> = new Map();

  register(config: ModuleConfig): void {
    if (this.modules.has(config.id)) {
      console.warn(`Module "${config.id}" is already registered.`);
      return;
    }
    this.modules.set(config.id, config);
  }

  getAll(): ModuleConfig[] {
    return Array.from(this.modules.values());
  }

  getRoutes() {
    return this.getAll().flatMap((m) => m.routes);
  }

  getNavItems() {
    return this.getAll().flatMap((m) => m.navItems);
  }
}

export const moduleRegistry = new ModuleRegistry();
