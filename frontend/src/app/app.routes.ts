import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.routes').then((m) => m.BUSINESS_ROUTES),
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.routes').then((m) => m.SHOP_ROUTES),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
