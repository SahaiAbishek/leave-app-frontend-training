import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  employeeId: string;

  constructor() { }

  getEmployeeId() {
    return this.employeeId;
  }
  
  setEmployeeId(employeeId: string) {
    this.employeeId = employeeId;
  }
}
