import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PLPF-10';
  // State
  employeeList: string[] = [];
  employeeName = '';

  // Events
  addEmployee() {
    this.employeeList.push(this.employeeName);
  }
}
