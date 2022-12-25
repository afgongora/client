import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { map, catchError} from 'rxjs/operators';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public url = environment.url;
  public posts$ = new Subject<Post[]>();
  public post$ = new Subject<Post>();
  public posts: Post[] = [];
  public post: Post;


  constructor(
    public http: HttpClient
  ) { }

  all$(): Observable<Post[]>{
    return this.posts$.asObservable();
  }
  get$(): Observable<Admin[]>{
    return this.posts$.asObservable();
  }
  all(): Observable<any>{
    this.posts = [];
    return this.http.get<Post[]>(this.url + '/admin')
      .pipe(
        map ((res: any) =>{
          res.forEach((item: any)=>{
            this.post = new Post();
            this.post.set(item);
            this.posts.push(this.post);
          });
          this.posts$.next(this.posts);
        })
      );
  }
  get(id: any): Observable<any>{
    this.post = new Post();
    return this.http.get<Post>(this.url + '/admins/'+ id)
      .pipe(
       map ((res: any) =>{
           this.post = new Post();
           this.post.set(res);
          this.post$.next(this.post);
        })
      );
  }
  save(data: Post) {
    return this.http.post<Post>(this.url + '/admins', data)
      .pipe(
       map ((res: any) =>{
           this.all();
        })
      );
  }
  delete(id: any) {
    return this.http.delete<Post>(this.url + '/admins/'+ id).subscribe((res)=>{
      this.all();
    });
  }
}
