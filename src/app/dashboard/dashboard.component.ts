import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employeeId

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    var empID = this.loginService.getEmployeeId();
    this.employeeId = empID;

  }

}
