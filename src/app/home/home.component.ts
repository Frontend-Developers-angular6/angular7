import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmployeeComponent } from '../modules/employees/employee/employee.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EmployeeComponent, {
      width: '550px',
      height: '550px',
      
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit() {
  }

}
