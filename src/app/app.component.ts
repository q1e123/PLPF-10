import { Component } from '@angular/core';

import * as _ from 'underscore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PLPF-10';
  // State
  employeeList: string[] = [];
  addEmployeeName = '';
  removeEmployeeName = '';
  checkEmployeeName = '';
  filterEmployeeName = '';
  // Events
  addEmployee() {
    this.employeeList.push(this.addEmployeeName);
  }
  removeEmployee() {
    this.employeeList = _.without(this.employeeList, this.removeEmployeeName);
  }
  checkEmployee(){
    if(_.contains(this.employeeList, this.checkEmployeeName)){
      Swal.fire('Found!', 'Employee ' + this.checkEmployeeName + ' was found!', 'success');
    } else {      
      Swal.fire('Not found!', 'Employee ' + this.checkEmployeeName + ' was not found!', 'error');
    }
  }
}
