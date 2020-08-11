import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import{PostsService} from '../../../share/services/posts.service';
import{ FormGroup , FormBuilder,Validators} from '@angular/forms';
import{Router}from '@angular/router';
@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  addForm:FormGroup;
  isSubmit:boolean;
  constructor(private postsService:PostsService,
    private router:Router,
    private toastr: ToastrService,
    private formBuilder:FormBuilder) {

     }

  ngOnInit(): void {
    this.buildAddForm();
  }
onSubmit(){
  this.isSubmit=true;
  if(this.addForm.invalid){
    return;
  }
this.postsService.add(this.addForm.value).subscribe(res=>{
  this.toastr.success('the post is add', 'success', {
    timeOut: 3000,closeButton:true,progressBar:true
  });
  this.router.navigate(['../admin/posts']);
},
err=>{
  this.toastr.error(err.statusText, 'cannot add!' , {
    timeOut: 3000,closeButton:true,progressBar:true
  });
}
);
}
//to get element in html
get f(){
  return this.addForm.controls;
}
//reactive form and validation on it
buildAddForm(){
  this.addForm=this.formBuilder.group({
    title:[ null,Validators.required],
    description:[null,Validators.required]
  });
}
}
