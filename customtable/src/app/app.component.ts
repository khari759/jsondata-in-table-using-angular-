import {Component} from '@angular/core';

export interface Employee {
  EmployeeName:string;
  worktime: number;
}
const ELEMENT_DATA: Employee[]= [
  {EmployeeName:"NULL",worktime:310},
  {EmployeeName:"Abhay Singh",worktime:2021},
  {EmployeeName:"John Black",worktime:2065},
  {EmployeeName:"Kavvay Verma",worktime:1667},
  {EmployeeName:"Mary Poppins",worktime:1775},
  {EmployeeName:"Patrick Huthinson",worktime:2222},
  {EmployeeName:"Raju Sunuwar",worktime:1006},
  {EmployeeName:"Rita Alley",worktime:1157},
  {EmployeeName:"Stewart Malachi",worktime:2105},
  {EmployeeName:"Tamoy Smith",worktime:928},
  {EmployeeName:"Tim Perkinson",worktime:1743}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
  displayedColumns: string[] = ['EmployeeName','worktime'];
  dataSource = ELEMENT_DATA;
  title = "EMPLOYEES WORK TIME"
}