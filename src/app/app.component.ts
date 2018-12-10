import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {
  }

  title = 'auth-with-fb';
  activeIndex = null;
  navLinks = [
    {
      path: './',
      label: 'Home',
    },
    {
      path: './register',
      label: 'Register',
    },
  ];

}
