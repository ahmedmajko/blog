import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  employee: Student ;
  constructor(public service: StudentService, private router: Router) {
    this.employee = this.service.getEmployee();
  }
  
  @Output() Refresh = new EventEmitter();
  @Output() addEmp = new EventEmitter();

  //employee: Student = new Student();
  departments: any[];
  SelDepaertId: string = "0"; 
  ngOnInit(): void {
   // this.router.url.pr
    this.getAllDepart();
  }
  
  submit() {
    //this.addEmp.emit(this.employee);
    this.addOrEdit(this.employee);
    this.router.navigate(['/view-employee'])
  }
  FillStateDDL(e) {
    this.SelDepaertId = e.target.value;
  }
  getAllDepart() {
    this.service.getAlldepart().subscribe((obj) => {
      this.departments = obj;
    });
  }

  addOrEdit(event) {
    if (event.id == null) {
      event.age = Number(event.age);
      event.salary = Number(event.salary);
      event.departmentId = Number(this.SelDepaertId);

      this.service.postEmployee(event).subscribe(res => {
        this.employee = new Student();
      },
        err => {
          console.log(err)
        })

    } else {
      event.age = Number(event.age);
      event.salary = Number(event.salary);
      event.departmentId = Number(this.SelDepaertId);
      this.service.putEmployee(event).subscribe(res => {
        
      },
        err => {
          console.log(err)
        })


    }

  }
}
