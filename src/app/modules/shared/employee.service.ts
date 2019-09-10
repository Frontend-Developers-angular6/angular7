import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';

const headerOptoion ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class EmployeeService {
  
  mockurl='http://localhost:3000/Employee';

  currentEmployee: Employee = {
    firstName:'',
    lastName:'',
    email:'',
    // designation:'',
    state:'',
    country:'',
    contact:null,
    id:null,
    address:''
  }

  constructor(
    private http : HttpClient
  ) { }

  getAllEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.mockurl, headerOptoion);
  }

  deleteEmployee(id: Number): Observable<Employee> {
    return this.http.delete<Employee>(this.mockurl + '/' + id, headerOptoion);
  }

  createEmployee(emp: Employee):Observable<Employee>{
    return this.http.post<Employee>(this.mockurl, emp, headerOptoion);
  }

  updateEmployee(emp: Employee):Observable<Employee>{
    return this.http.put<Employee>(this.mockurl + '/'+ emp.id, emp, headerOptoion);
  }
}
