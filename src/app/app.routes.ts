import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  /**
   * DEFAULT REDIRECT
   * - pathMatch: 'full' is required for empty paths so Angular only matches
   *   the exact empty string '' and not every URL that starts with ''.
   */
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  /**
   * LAZY LOADING (Performance Optimization)
   * - loadComponent: Loads the component bundle on-demand instead of at startup.
   * - Reduces initial bundle size — the user only downloads what they need.
   * - Angular handles the dynamic import automatically.
   */
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },

  /**
   * NESTED (CHILD) ROUTING
   * - Child components render inside the parent's <router-outlet>.
   * - The parent route (about) loads its own component first, then child
   *   routes (team, company) render inside it based on the URL segment.
   * - Children also use lazy loading here.
   */
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
    children: [
      { path: '', redirectTo: 'team', pathMatch: 'full' },
      {
        path: 'team',
        loadComponent: () =>
          import('./about/about-team/about-team.component').then(
            (c) => c.AboutTeamComponent,
          ),
      },
      {
        path: 'company',
        loadComponent: () =>
          import('./about/about-company/about-company.component').then(
            (c) => c.AboutCompanyComponent,
          ),
      },
    ],
  },

  {
    path: 'gallery',
    loadComponent: () =>
      import('./gallery/gallery.component').then((c) => c.GalleryComponent),
  },

  /**
   * WILDCARD ROUTE — Must be LAST in the array.
   * - '**' matches any URL not handled by the routes above.
   * - Used for a 404 / "Not Found" page.
   */
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
