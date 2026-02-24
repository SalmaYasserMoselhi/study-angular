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
     * =========================================
     * APP ROUTER CONFIGURATION
     * =========================================
     * - withInMemoryScrolling:
     *      scrollPositionRestoration: 'top' -> Automatically scrolls to top on navigation.
     * - withHashLocation:
     *      Adds '#' to the URL (e.g., /#/home) to prevent server-side routing issues
     *      during production deployment.
     */
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
      withHashLocation(),
    ),
  ],
};
