import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Leaves } from '../employee-details/Leaves';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaves-appication',
  templateUrl: './leaves-appication.component.html',
  styleUrls: ['./leaves-appication.component.css']
})
export class LeavesAppicationComponent implements OnInit {
  private leaves: Leaves[] = new Array();
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.leaves = this.loginService.getEmployeeDetails().leaves;
  }

  applyLeave() {
    this.router.navigate(['applyLeave']);
  }


}
