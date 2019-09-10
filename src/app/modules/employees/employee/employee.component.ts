import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  hitCancel: true;

  constructor(
    private emploeeService:EmployeeService, public dialogRef: MatDialogRef<EmployeeComponent>,private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }


  ngOnInit() {
  }

  login(){
  this.dialogRef.close("Closed");
  this.router.navigate(['customerDashboard'])
  }

  hideModel(){
  this.dialogRef.close("Closed"); 
  }

  createAndupdate(currentEmployee: Employee){
    console.log(currentEmployee);
    if(currentEmployee.id !=null){
      console.log('update');
      this.updateEmployee(currentEmployee);
    }else{
      console.log('create');
      this.createEmployee(currentEmployee);
    }
   }
  
   createEmployee(emp:Employee){
      this.emploeeService.createEmployee(emp).subscribe();
   }


   updateEmployee(emp:Employee){
    this.emploeeService.updateEmployee(emp).subscribe();
  }
  
  cancel()
  {
     this.hitCancel=true;
  }
}
