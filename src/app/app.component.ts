import { Component } from '@angular/core';
import * as _ from 'underscore';

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
  removeEmployee() {
    this.employeeList = _.without(this.employeeList, this.employeeName);
  }
}
