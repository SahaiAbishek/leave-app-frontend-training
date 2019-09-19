import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { LoginService } from '../login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  private employeeId: number;
  employee = new Employee();
  private empDetailsForm: FormGroup;

  constructor(
    private service: CommonServiceService,
    private loginService: LoginService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.empDetailsForm = this.formBuilder.group({
      emplyeeId: ['', Validators.required],
      doj: ['', Validators.required],
      fullName: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      leaveBalance: ['', Validators.required]
    });
    this.employeeId =this.employee.empId;
    this.employee = this.loginService.getEmployeeDetails();

  }


}
