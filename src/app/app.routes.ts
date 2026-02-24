import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { AboutTeamComponent } from './about/about-team/about-team.component';
// import { AboutCompanyComponent } from './about/about-company/about-company.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  /**
   * =========================================
   * LAZY LOADING (Optimization)
   * =========================================
   * - Concept: Loads components on-demand (only when navigating to the route).
   * - Benefit: Faster initial load by reducing the starting bundle size.
   * - Syntax: `loadComponent` with dynamic `import()`.
   */
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
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

  /**
   * Default Route: Redirect empty path to 'home'.
   * - redirectTo: 'home'
   * - pathMatch: 'full' (Mandatory for empty paths. The default is 'prefix',
   *   which matches if the URL simply *starts with* the path string.
   *   Since every URL starts with an empty string, 'prefix' would always match.)
   */
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent, title: 'Home' },

  /**
   * =========================================
   * NESTED (CHILD) ROUTING
   * =========================================
   * - Allows you to have "sub-pages" inside a component.
   * - Use the 'children' array to define child routes.
   * - Child components render inside the parent component's <router-outlet>.
   *
   * Syntax:
   * children: [ { path: 'child-path', component: ChildComponent } ]
   */
  // {
  //   path: 'about',
  //   component: AboutComponent,
  //   title: 'About',
  //   children: [
  //     { path: '', redirectTo: 'team', pathMatch: 'full' },
  //     { path: 'team', component: AboutTeamComponent, title: 'About Team' },
  //     {
  //       path: 'company',
  //       component: AboutCompanyComponent,
  //       title: 'About Company',
  //     },
  //   ],
  // },

  /**
   * Wildcard Route: Matches any URL not defined above.
   * - Usually points to a "Not Found" or "404" component.
   * - IMPORTANT: Must be placed at the VERY END of the routes array.
   */
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
