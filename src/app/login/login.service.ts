import { Injectable } from '@angular/core';
import { Employee } from '../employee-details/Employee';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  employee = new Employee();
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
}
