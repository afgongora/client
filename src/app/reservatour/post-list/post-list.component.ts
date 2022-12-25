import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public posts: Post[] = [];
  public post: Post;
  public postSubscription = new Subscription();
  constructor(
    public postservice: PostService
  ) { }

  ngOnInit() {
    this.postSubscription = this.postservice.all$().subscribe((res: Post[])=>{
      this.posts = res;
    });
    this.postservice.all().subscribe((res)=>{
      console.log('Listo ya.');
    });

  }

}
