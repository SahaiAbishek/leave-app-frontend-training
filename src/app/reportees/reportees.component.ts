import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Employee } from '../employee-details/Employee';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-reportees',
  templateUrl: './reportees.component.html',
  styleUrls: ['./reportees.component.css']
})
export class ReporteesComponent implements OnInit {

  private employees: Employee[] = new Array();

  constructor(
    private service: CommonServiceService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.service.getReportees(this.loginService.getEmployeeDetails().empId).subscribe(data =>
      // console.log(data)
      this.employees = data
    );
  }

}
