import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * APP ROUTER CONFIGURATION
     *
     * - withInMemoryScrolling: Scrolls the page to the top on every navigation.
     * - withHashLocation: Adds '#' to URLs (e.g. /#/home instead of /home).
     *   Required when serving on static hosts (GitHub Pages, Vercel, etc.) that
     *   don't support server-side URL rewriting — without it, a direct URL like
     *   /about would return a 404.
     */
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
      withHashLocation(),
    ),
  ],
};
