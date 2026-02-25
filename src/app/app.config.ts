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
     * - withInMemoryScrolling: Scrolls to top on navigation.
     * - withHashLocation: Adds '#' for production server compatibility.
     */
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
      withHashLocation(),
    ),
  ],
};
