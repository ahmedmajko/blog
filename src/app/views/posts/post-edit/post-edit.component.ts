import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/share/services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  itemid;
  itemdetails;
  updateForm:FormGroup;
  isSubmit:boolean
  constructor(private postsService: PostsService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // to get id from path
    this.activatedRouter.params.subscribe(rout => {
      this.itemid = rout.id;
      //get item selected
      this.postsService.getitem(this.itemid).subscribe(res => {
        this.itemdetails = res;
      });
    });
    this.buildAddForm();
  }
  onSubmit(){
    this.isSubmit=true;
    if(this.updateForm.invalid){
      return;
    }
  this.postsService.update(this.updateForm.value,this.itemid).subscribe(res=>{
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
    return this.updateForm.controls;
  }
  //reactive form and validation on it
  buildAddForm(){
    this.updateForm=this.formBuilder.group({
      title:[ null,Validators.required],
      description:[null,Validators.required]
    });
  }

}
