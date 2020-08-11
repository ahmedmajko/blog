import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import{PostsService} from '../../../share/services/posts.service'
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
items:any=[];

  constructor(private postsService:PostsService,
    private deletecon:NgbModal,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  this.getAll();
  }
  //get all element
getAll(){

  this.postsService.getAll().subscribe(res=>{
    console.log(res);
    this.items=res;
  });
}
// delete item by id
deleteItem(model,id){
this.deletecon.open(model).result.then(result=>{
  this.postsService.delete(id).subscribe(res=>{
    this.toastr.success('the post delete', 'success', {
      timeOut: 3000,closeButton:true,progressBar:true
    });
    this.getAll();
  },
  err=>{
    this.toastr.error(err.statusText, 'delete Error!' , {
      timeOut: 3000,closeButton:true,progressBar:true
    });
  }
  
  );
  
},
err=>{
  
  console.log(err);
});
 /* */
}
}
