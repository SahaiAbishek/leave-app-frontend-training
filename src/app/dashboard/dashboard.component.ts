import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { CommonServiceService } from '../common-service.service';
import { Employee } from '../employee-details/Employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employeeId
  employee = new Employee();
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private service: CommonServiceService
  ) {
  }

  ngOnInit() {
    var empID = this.loginService.getEmployeeId();
    this.employeeId = empID;
    this.service.getEmployeeDetails(this.loginService.getEmployeeId()).subscribe(data =>
      this.employee = data
    );

  }

  managerDetails() {
    this.loginService.setManagerId(this.employee.empManagerId);
    this.router.navigate(['/manager', this.employee.empManagerId]);
  }

  myDetails() {
    this.loginService.setEmployeeDetails(this.employee);
    this.router.navigate(['/employee', this.employee.empId]);
  }

  myLeaves() {
    this.loginService.setEmployeeDetails(this.employee);
    this.router.navigate(['/leaves']);
  }

  myReportees() {
    this.loginService.setEmployeeDetails(this.employee);
    this.router.navigate(['/reportees']);
  }

}
