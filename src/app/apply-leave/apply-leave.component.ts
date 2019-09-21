import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Leaves } from '../employee-details/Leaves';
import { CommonServiceService } from '../common-service.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  private leaveDetailsForm: FormGroup;
  private leave = new Leaves();

  constructor(
    private formBuilder: FormBuilder,
    private service: CommonServiceService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.leaveDetailsForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      numberOfDays: ['', Validators.required],
      leaveType: ['', Validators.required],
      leaveReason: ['', Validators.required]
    });
  }

  applyLeave() {
    this.leave.startDate = this.leaveDetailsForm.get('startDate').value;
    this.leave.endDate = this.leaveDetailsForm.get('endDate').value;
    this.leave.numberOfDays = this.leaveDetailsForm.get('numberOfDays').value;
    this.leave.leaveType = this.leaveDetailsForm.get('leaveType').value;
    this.leave.reason = this.leaveDetailsForm.get('leaveReason').value;
    this.leave.leaveStatus = 'PENDING';

    this.service.addLeave(this.loginService.getEmployeeDetails().empId, this.leave).subscribe(data =>
      console.log('Success')
    );
  }

}
