import { Component } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  refresh: boolean ;
  emp: Student = new Student();
  employees: any[];
  ishide: boolean = false;
  depart: any[];
  constructor(public service: StudentService) {
    this.getAll();
    this.getAllDepart();
  }
  isadd() {
    this.ishide = !this.ishide;
    this.emp = new Student();
  }
  editEmployee(event) {
    this.ishide = !this.ishide;
    this.emp = event;
  }
  refreshList(event) {
    this.refresh = event;
  }
  getAll() {
    this.service.getAllStudents().subscribe((obj) => {
      this.employees = obj;
    });
  }
  deleteEmp(event) {
    this.service.deleteEmployee(event).subscribe(res => { this.getAll() });
  }
  addOrEdit(event) {
      if (event.id == null) {
        event.age = Number(event.age);
        event.salary = Number(event.salary);

        this.service.postEmployee(event).subscribe(res => {
          this.getAll();
          this.emp = new Student();
        },
          err => {
            console.log(err)
          })

      } else {
        event.age = Number(event.age);
        event.salary = Number(event.salary);

        this.service.putEmployee(event).subscribe(res => {
          this.getAll();
        },
          err => {
            console.log(err)
          })


      }
    
  }

  getAllDepart() {
    this.service.getAlldepart().subscribe((obj) => {
      this.depart= obj;
    });
  }
}
