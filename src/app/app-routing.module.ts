import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './modules/employees/employee/employee.component';
import { EmployeeListComponent } from './modules/employees/employee-list/employee-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path: 'save',component:EmployeeListComponent},
  {path:'register',component:EmployeeComponent},
  {path:'**',component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {HomeComponent};
export const routingComponents = [EmployeeComponent];
