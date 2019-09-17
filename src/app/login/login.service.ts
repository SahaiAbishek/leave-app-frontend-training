import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  employeeId: number;

  constructor() { }

  getEmployeeId() {
    return this.employeeId;
  }
  
  setEmployeeId(employeeId: number) {
    this.employeeId = employeeId;
  }
}
