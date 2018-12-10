import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from 'angular-6-social-login-v2';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('2326616420747181'),
      },
    ],
  );
  return config;
}

const MATERIAL_MODULES = [
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    [MATERIAL_MODULES],
    SocialLoginModule,
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
