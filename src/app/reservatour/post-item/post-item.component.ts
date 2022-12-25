import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Input() posts: Post[];
  public postSubscription = new Subscription();
  constructor(
    public postservice: PostService
  ) { }

  ngOnInit() {
    this.postSubscription = this.postservice.all$().subscribe((res: Post[])=>{
      this.posts = res;
    });
  }
  onBorrar(){
    this.postservice.delete(this.post.id);
    this.postservice.all().subscribe((res)=>{
      console.log('Listo ya.');
    });
  }
}
