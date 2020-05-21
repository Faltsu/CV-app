import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
import { MenuPageRoutingModule } from './Menu-routing.module';
import { AuthGuard } from '../guards/auth.guard';
// Jarkko Hämäläinen 1701558
//Has paths for the menu array. Authguard has been implemented 
//and will block access to the pages marked with canactivate if user is not logged in.
const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
      path: 'verify-email',
      loadChildren: '../verify-email/verify-email.module#VerifyEmailPageModule'
      },
      {
      path: 'home',
      canActivate: [AuthGuard],
      loadChildren: '../home/home.module#HomePageModule'
      },
      {
      path: 'register',
      loadChildren: '../register/register.module#RegisterPageModule'
      },
      { 
      path: 'contact', 
      canActivate: [AuthGuard], 
      loadChildren: '../contact/contact.module#ContactPageModule'},
      {
      path: 'login',
      loadChildren: '../login/login.module#LoginPageModule'
      },
      {
        path: 'forgot-password',
        loadChildren: '../forgot-password/forgot-password.module#ForgotPasswordPageModule'
        },
      {
        path: 'personalinfo',
        canActivate: [AuthGuard],
        loadChildren: '../personalinfo/personalinfo.module#PersonalinfoPageModule'
      },
      {
        path: 'technical',
        canActivate: [AuthGuard],
        loadChildren: '../technical/technical.module#TechnicalPageModule'
      },
      {
        path: 'soft',
        canActivate: [AuthGuard],
        loadChildren: '../soft/soft.module#SoftPageModule'
      },
      {
        path: 'personal',
        canActivate: [AuthGuard],
        loadChildren: '../personal/personal.module#PersonalPageModule'
      },
      {
        path: 'team',
        canActivate: [AuthGuard],
        loadChildren: '../team/team.module#TeamPageModule'
      },
      {
        path: 'extra',
        canActivate: [AuthGuard],
        loadChildren: '../extra/extra.module#ExtraPageModule'
      }
    ]
},

{
path: '',
redirectTo: '/menu/login',
pathMatch: 'prefix'}
]
@NgModule({
  imports: [
  CommonModule,
  FormsModule,
  IonicModule,
  RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
  })
  export class MenuPageModule { }