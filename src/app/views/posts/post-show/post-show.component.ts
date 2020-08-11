import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/share/services/posts.service';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})
export class PostShowComponent implements OnInit {
  itemid;
  itemdetails;
  constructor(private postsService: PostsService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(rout => {
      this.itemid = rout.id;
      //get item selected
      this.postsService.getitem(this.itemid).subscribe(res => {
        console.log(res);
        this.itemdetails = res;
      });
    });
  }

}
