import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { Reservatour } from 'src/app/models/reservatour';
import { PostService } from 'src/app/services/post.service';
import { ReservatourService } from 'src/app/services/reservatour.service';

@Component({
  selector: 'app-reservatour-list',
  templateUrl: './reservatour-list.component.html',
  styleUrls: ['./reservatour-list.component.scss'],
})
export class ReservatourListComponent implements OnInit {
  public reservatours: Reservatour[] = [];
  public reservatour: Reservatour;
  public reservatourSubscription = new Subscription();
  constructor(
    public reservatourservice: ReservatourService
  ) { }

  ngOnInit() {
    this.reservatourSubscription = this.reservatourservice.all$().subscribe((res: Reservatour[])=>{
      this.reservatours = res;
    });
    this.reservatourservice.all().subscribe((res)=>{
      console.log('Listo ya.');
    });
  }

}
