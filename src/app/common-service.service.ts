import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee-details/Employee';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private baseURL = 'http://localhost:12345/leaveApp/';

  constructor(private http: HttpClient) { }

  getEmployeeDetails(employeeId: number) {
    return this.http.get<Employee>(`${this.baseURL}/employeeId/${employeeId}`);
  }
}
