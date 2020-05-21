import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from "../shared/authentication-service";
// Jarkko Hämäläinen 1701558
// Array for hamburger menu and paths for all the pages.
@Component({
selector: 'app-menu',
templateUrl: './menu.page.html',
styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
activePath = '';
pages = [
{
  name: 'Login',
  path: '/menu/login'
},
{
  name: 'Register',
  path: '/menu/register'
},
{
  name: 'Home',
  path: '/menu/home'
},
{
  name: 'Contact',
  path: '/menu/contact'
},
{
  name: 'Personal Information',
  path: '/menu/personalinfo'
  },
{
  name: 'Technical Skills',
  path: '/menu/technical'
},
{
  name: 'Soft Skills',
  path: '/menu/soft'
},
{
  name: 'Personal Projects',
  path: '/menu/personal'
},
{
  name: 'Team Projects',
  path: '/menu/team'
},
{
  name: 'Extra curriculum activities',
  path: '/menu/extra'
}
]
//Jarkko Hämäläinen 1701558
//subscribe authservice to events
//Part of old auth check system
//constructor(private router: Router, private authService: AuthenticationService) {
//this.router.events.subscribe((event: RouterEvent) => {
//this.activePath = event.url
//})
//}
ngOnInit() {
}
constructor(
  public authService: AuthenticationService
) { }
}
