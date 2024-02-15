import { init } from 'aos';

import { ApplicationConfig, inject } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation, withHashLocation
} from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ENVIRONMENT, EnvironmentInterface } from '@maisha/shared/tokens';

init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

const addBaseUrl = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const env = inject(ENVIRONMENT);
  console.log({ url: `${env.baseHref}${req.url.replace(/\//, '')}` });
  console.log({ html: /\.html/.test(req.url) });
  let apiReq = req;
  if (/json/.test(req.url) || /\.html/.test(req.url)) {
    apiReq = req.clone({ url: `${env.baseHref}${req.url.replace(/\//, '')}` });
  }
  return next(apiReq);
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([
      addBaseUrl
    ])),
    provideAnimations(),
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withHashLocation()
    ),
    {
      provide: ENVIRONMENT,
      useValue: {
        baseHref: process.env['NX_BASE_HREF']
      } as EnvironmentInterface
    }
  ]
};
