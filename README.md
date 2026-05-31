# StockWise — Take-Home Test

**Posisi:** Medior Frontend Engineer  
**Waktu:** 3 jam  
**Filosofi:** 1 fitur selesai + bersih > banyak fitur berantakan.

---

## Setup

```bash
npm install
npm run dev
```

Buka http://localhost:5173

---

## Konteks Project

StockWise adalah aplikasi manajemen internal. Kamu bergabung di tengah pengembangan — beberapa bagian sudah ada, beberapa belum selesai.

Struktur komponen mengikuti atomic design:
- `atoms/` — komponen primitif (Button, StatusBadge)
- `molecules/` — komponen gabungan (Alert, Toast)
- `organisms/` — komponen kompleks dan mandiri (StatCard, **DataGrid — belum ada**)

Setiap module memiliki struktur yang sama:
```
module-name/
├── types/        # interface & type definitions
├── services/     # fungsi API call, return StandardApiResponse<T>
├── hooks/        # useQuery / useMutation, cek response.success
├── pages/        # halaman utama, compose dari organisms
└── module.ts     # registrasi ke module registry
```

---

## TODO 1 — DataGrid Organism + Recent Activity (Prioritas Utama)

Dashboard sudah menampilkan stat cards. Di bawahnya ada section **"Recent User Activity"** yang belum berfungsi.

### Yang harus dibangun:

#### 1. `DataGrid` organism
**Lokasi:** `src/lib/ui/components/organisms/DataGrid/index.tsx`

Lihat `StatCard` (`src/lib/ui/components/organisms/StatCard/index.tsx`) sebagai referensi cara structuring organism: typed props, named export, JSDoc `@example`.

Props yang diharapkan:
```ts
import type { GridColDef } from '@mui/x-data-grid';

interface DataGridProps<T extends { id: string }> {
  rows: T[];
  columns: GridColDef<T>[];
  loading?: boolean;
}
```

Setelah dibuat, **export dari** `src/lib/ui/index.ts`:
```ts
export { DataGrid } from './components/organisms/DataGrid';
```

#### 2. MSW handler
**Lokasi:** `src/mocks/handlers.ts` — tambahkan di dalam array `handlers`

```
GET /api/dashboard/recent-activity → StandardApiResponse<UserActivity[]>
```

Data shape `UserActivity` sudah didefinisikan di `src/modules/dashboard/types/dashboard.ts`:
```ts
interface UserActivity {
  id: string;
  userName: string;
  action: string;
  timestamp: string;
  status: 'success' | 'failed';
}
```

Buat minimal 8 mock activity entries dengan mix status.

#### 3. Hook `useRecentActivity`
**Lokasi:** `src/modules/dashboard/hooks/useRecentActivity.ts`

Lihat `useDashboardStats.ts` di folder yang sama sebagai referensi pola hook:
- Panggil service function di dalam `queryFn`
- Cek `response.success` — throw `new Error` jika false
- Return `response.data`

Juga uncomment `getRecentActivity` di `src/modules/dashboard/services/dashboardService.ts`.

#### 4. Wire ke DashboardPage
**Lokasi:** `src/modules/dashboard/pages/DashboardPage.tsx`

Semua TODO comment sudah ada di file tersebut — ikuti instruksi di komentar.

---

## TODO 2 — User Management Module

Buat module `user-management` dari nol di `src/modules/user-management/`.  
Ikuti struktur yang sama dengan `dashboard` module.  
Gunakan `DataGrid` organism yang kamu buat di TODO 1.

### API yang tersedia

```
GET  /api/users?role=&status=   → StandardApiResponse<User[]>
POST /api/users                 → StandardApiResponse<User>
```

### User fields

| Field    | Type                                      |
|----------|-------------------------------------------|
| `id`     | `string`                                  |
| `name`   | `string`                                  |
| `email`  | `string`                                  |
| `role`   | `'admin' \| 'manager' \| 'operator'`      |
| `status` | `'active' \| 'inactive'`                  |

### Yang harus dibangun

- [ ] `types/user.ts` — interface `User`, `UserRole`, `UserStatus`
- [ ] `services/userManagementService.ts` — `getUsers(params)`, no `any`
- [ ] `hooks/userManagementKeys.ts` — `createQueryKeys('user-management')`
- [ ] `hooks/useUsers.ts` — `useQuery` + `response.success` check
- [ ] `pages/UserListPage.tsx` — DataGrid dengan kolom: Name, Email, Role, Status
- [ ] `module.ts` — `ModuleConfig` dengan icon dari lucide-react
- [ ] Register di `src/modules/index.ts`

**Bonus:** Tambahkan filter role dan status via URL params (lihat pola `useSearchParams` di React Router).

---

## Rules

- Jangan ubah `tsconfig.json` — `strict` harus tetap aktif
- Jangan install library tambahan
- `DataGrid` organism harus dibuat di `lib/ui/organisms/`, bukan di dalam module
- Prioritaskan TODO 1 selesai dan bersih sebelum mulai TODO 2

---

## Tips

- Baca seluruh `StatCard` sebelum mulai bikin `DataGrid`
- Baca seluruh `useDashboardStats` sebelum bikin hook baru
- `createQueryKeys` ada di `src/lib/query/keys.ts` — baca JSDoc-nya
- React Query Devtools tersedia di pojok kiri bawah (ikon bunga)
