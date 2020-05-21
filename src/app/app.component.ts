import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  //  private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
//Jarkko Hämäläinen 1701558
// Subscribe to auth service and if logged, go to home and if not go to login.
//Code for the old auth system. Here incase it is needed later
//      this.authenticationService.authStatus.subscribe(state =>{
//        console.log('Auth status: ', state);
//        if (state) {
//          this.router.navigate(['home']);
//        }
//        else {
//          this.router.navigate(['login']);
//        }
//      })
    });
  }
}
