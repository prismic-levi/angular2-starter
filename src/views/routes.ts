import { PLATFORM_DIRECTIVES } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig }  from '@angular/router';

import { HomePage } from './home';
import { DocumentPage } from './documents';

const routes: RouterConfig = [
  {path: '', component: HomePage},
  {path: ':type/:id', component: DocumentPage}
];


export const ROUTER_PROVIDERS = [
  provideRouter(routes),
  {provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];