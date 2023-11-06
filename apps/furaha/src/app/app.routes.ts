import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@furaha/web/pages/home')
  },
  {
    path: 'health-libraries/:healthLibrarySlug',
    loadComponent: () => import('@furaha/web/pages/health-library')
  },
  {
    path: '**',
    loadComponent: () => import('@furaha/web/pages/home')
  }
];
