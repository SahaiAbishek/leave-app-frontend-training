import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee-details/Employee';
import { Leaves } from './employee-details/Leaves';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private baseURL = 'http://localhost:12345/leaveApp/';

  constructor(private http: HttpClient) { }

  getEmployeeDetails(employeeId: number) {
    return this.http.get<Employee>(`${this.baseURL}/employeeId/${employeeId}`);
  }

  getReportees(employeeId: number) {
    return this.http.get<Employee[]>(`${this.baseURL}/reportees/${employeeId}`);
  }

  addLeave(employeeId: number, leaves: Leaves) {
    return this.http.post(`${this.baseURL}/leaves/${employeeId}`, {
      appliedOn: leaves.startDate,
      endDate: leaves.endDate,
      leaveStatus: leaves.leaveStatus,
      leaveType: leaves.leaveType,
      managerComments: leaves.managerComments,
      numberOfDays: leaves.numberOfDays,
      reason: leaves.reason,
      startDate: leaves.startDate
    });
  }

  approveLeave(leaveId: number, leaveStatus: string) {
    console.log(leaveId + '----' + leaveStatus);
    return this.http.put(`${this.baseURL}/leave/${leaveId}`, leaveStatus).subscribe(
      data => {
        console.log("PUT Request is successful ", data);
      },
      error => {
        console.log("Rrror", error);
      }
    );

  }
}
