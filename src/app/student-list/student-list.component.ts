import { Component, OnInit,EventEmitter,Output,OnChanges, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnChanges{
  ngOnChanges(changes): void {
    if (this.Refresh) {
      //this.students;
    }
    
    }
   students:any[];
  @Output() selectST = new EventEmitter();
  @Output() idDel = new EventEmitter();

  @Input() Refresh: boolean;
  constructor(public service: StudentService, private router: Router) {
    router.events.subscribe((val) => this.getAll());
  }

  ngOnInit(): void {
    this.getAll();

  }
EditData(item){
  // this.selectST.emit(item);
  this.service.setEmployee(item);
  this.router.navigate(['/add-employee']);
  
}
  delete(id) {
   // this.idDel.emit(id);
    this.service.deleteEmployee(id).subscribe(res =>  this.getAll() );
}
 
  isadd() {
    this.selectST.emit(new Student());
  }
  getAll() {
    this.service.getAllStudents().subscribe((obj) => {
      this.students = obj;
    });
  }
}
