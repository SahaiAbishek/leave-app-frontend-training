import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-details/Employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {

  employee = new Employee();
  private empDetailsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private service: CommonServiceService
  ) { }

  ngOnInit() {
    this.empDetailsForm = this.formBuilder.group({
      emplyeeId: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.service.getEmployeeDetails(this.loginService.getManagerId()).subscribe(data =>
      this.employee = data
    );
  }

}
