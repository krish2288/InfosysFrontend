import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// Import other components you want to route to

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Redirect to the login page by default
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'welcome', component:WelcomeComponent},
  {path:'forgotpassword', component:ForgotPasswordComponent}
  // Define other routes here
  // Example:
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: '**', component: PageNotFoundComponent } // Handle 404 not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
