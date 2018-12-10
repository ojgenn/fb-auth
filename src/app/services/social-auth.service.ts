import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SotialPlatform } from '../commons/models/sotial-platform.model';
import {
  AuthService,
  FacebookLoginProvider,
} from 'angular-6-social-login-v2';

@Injectable({
  providedIn: 'root',
})
export class SocialAuthService {

  constructor(private socialAuthService: AuthService) { }

  testService(data: { email: string, password: string }): Observable<any> {
    return of('good');
  }

  socialSignIn(socialPlatform: SotialPlatform.SotialPlatforms) {
    let socialPlatformProvider;
    if (socialPlatform === SotialPlatform.SotialPlatforms.Fb) {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ', userData);
      },
    );
  }
}
