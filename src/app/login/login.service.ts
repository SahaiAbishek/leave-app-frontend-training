import { Injectable } from '@angular/core';
import { Employee } from '../employee-details/Employee';
import { Leaves } from '../employee-details/Leaves';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  employee = new Employee();
  leave = new Leaves();
  employeeId: number;
  managerId: number;

  constructor() { }

  getEmployeeId() {
    return this.employeeId;
  }

  setEmployeeId(employeeId: number) {
    this.employeeId = employeeId;
  }

  getManagerId() {
    return this.managerId;
  }

  setManagerId(managerId: number) {
    this.managerId = managerId;
  }

  setEmployeeDetails(employee: Employee) {
    this.employee = employee;
  }
  getEmployeeDetails() {
    return this.employee;
  }

  setLeave(leave: Leaves) {
    this.leave = leave;
  }
  getLeave() {
    return this.leave;
  }
}
