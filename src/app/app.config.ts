import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient  } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideStore } from '@ngrx/store';
import { userReducer } from './store/user/user.reducer';
export const appConfig: ApplicationConfig = {
  providers: [
    
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(),
    provideStore(),
    provideStore({ user: userReducer }),
]
};
