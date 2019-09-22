import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { CommonServiceService } from '../common-service.service';
import { Employee } from '../employee-details/Employee';
import { Leaves } from '../employee-details/Leaves';

@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.component.html',
  styleUrls: ['./approve-leave.component.css']
})
export class ApproveLeaveComponent implements OnInit {

  private approveLeavesComponent: FormGroup;
  private employee: Employee;
  private leave: Leaves;

  constructor(
    private formBuilder: FormBuilder,
    private service: CommonServiceService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.approveLeavesComponent = this.formBuilder.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      leaveBalance: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      numberOfDays: ['', Validators.required],
      leaveType: ['', Validators.required],
      leaveReason: ['', Validators.required],
      comment: ['', Validators.required]
    });

    this.employee = this.loginService.getEmployeeDetails();
    this.leave = this.loginService.getLeave();
  }

  approveLeave() {

    this.service.approveLeave(this.leave.leaveId, 'APPROVED');
  }

  denyLeave() {
    console.log(this.loginService.getLeave().leaveId);
    this.service.approveLeave(this.leave.leaveId, 'DENIED');
  }

}
