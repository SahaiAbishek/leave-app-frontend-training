import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { LeavesAppicationComponent } from './leaves-appication/leaves-appication.component';
import { ReporteesComponent } from './reportees/reportees.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:empId', component: DashboardComponent },
  { path: 'employee/:empId', component: EmployeeDetailsComponent },
  { path: 'manager/:empId', component: ManagerDetailsComponent },
  { path: 'leaves', component: LeavesAppicationComponent },
  { path: 'reportees', component: ReporteesComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
