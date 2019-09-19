import { Leaves } from './Leaves';

export class Employee {

    empId: number
    empName: string;
    phone: number;
    empDept: string;
    empEmail: string;
    empDoj: string;
    leaveBalance: number;
    empManagerId: number;
    leaves: [Leaves];
}