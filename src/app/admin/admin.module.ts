import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardsPageComponent} from './dashboards-page/dashboards-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {AuthService} from './shared/services/auth.service';
import {SharedModule} from '../shared/shared.module';
import {AuthGuard} from './shared/services/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardsPageComponent, canActivate: [AuthGuard]},
          {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
          {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: [AdminLayoutComponent, LoginPageComponent, DashboardsPageComponent, CreatePageComponent, EditPageComponent],
  providers: [AuthService, AuthGuard]
})
export class AdminModule {
}

