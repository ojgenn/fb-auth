import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { SocialAuthService } from '../services/social-auth.service';
import { SotialPlatform } from '../commons/models/sotial-platform.model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {

  private _authSubscription$: Subscription;

  registerationForm: FormGroup = new FormGroup({
    eMail: new FormControl('', [Validators.email]),
    password: new FormControl(''),
  });

  constructor(private _socialAuthSerivice: SocialAuthService) {}

  submit() {
    this._authSubscription$ = this._socialAuthSerivice.testService({
      email: this.registerationForm.value.email,
      password: this.registerationForm.value.password,
    }).subscribe(res => console.log(res));
  }

  goAfterFb() {
    this._socialAuthSerivice.socialSignIn(SotialPlatform.SotialPlatforms.Fb);
  }

  ngOnDestroy() {
    if (!isNullOrUndefined(this._authSubscription$)) {
      this._authSubscription$.unsubscribe();
    }
  }
}
