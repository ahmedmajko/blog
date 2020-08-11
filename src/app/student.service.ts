import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url: string = "https://localhost:5001/api/Employees1";
  urlDep: string ="https://localhost:5001/api/Departments"
  students: Student[];
  employee: Student = new Student();


  constructor(private http: HttpClient) { }
    getAllStudents():Observable<any>{
      return this.http.get(this.url);

  }
  getAlldepart(): Observable<any> {
    return this.http.get(this.urlDep);
  }
  postEmployee(emp: Student) {
    return this.http.post(this.url,emp);
  }
  putEmployee(emp1: Student) {
    return this.http.put(this.url+"/"+emp1.id,emp1);
  }
  deleteEmployee(id) {
    return this.http.delete(this.url+"/"+id);
  }

  setEmployee(Employee) {
    this.employee =Employee;
  }

  getEmployee() {
    let temp = this.employee;
    this.clearData();
    return temp;
  }

  clearData() {
    this.employee = undefined;
  }

  }

