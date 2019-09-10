import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  allEmployee : Employee[];
  constructor(
    private emploeeService:EmployeeService,private router:Router,
    public dialog: MatDialog
  ) { }


  openDialog(emp): void {
    const dialogRef = this.dialog.open(EmployeeComponent, {
      width: '550px',
      height: '550px',
    });
    this.emploeeService.currentEmployee = Object.assign({}, emp);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.getAllEmployee();
  }
  getAllEmployee(){
    this.emploeeService.getAllEmployees().subscribe(
      (data : Employee[]) => {
      this.allEmployee = data;
      });
  }


  edit(emp){
    this.emploeeService.currentEmployee = Object.assign({}, emp);
  }

  deleteEmployee(id: number) {
    this.emploeeService.deleteEmployee(id).subscribe(
      (data) => {
        this.getAllEmployee();
      });
  }
  goHome(){
    this.router.navigate(['register'])
  }
}
