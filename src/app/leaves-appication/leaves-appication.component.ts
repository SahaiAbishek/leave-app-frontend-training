import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Leaves } from '../employee-details/Leaves';

@Component({
  selector: 'app-leaves-appication',
  templateUrl: './leaves-appication.component.html',
  styleUrls: ['./leaves-appication.component.css']
})
export class LeavesAppicationComponent implements OnInit {
  private leaves:Leaves[] = new Array();
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.leaves = this.loginService.getEmployeeDetails().leaves;
    console.log(this.leaves);
  }

}
