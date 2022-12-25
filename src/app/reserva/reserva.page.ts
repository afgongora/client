import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../models/post';
import { Reservatour } from '../models/reservatour';
import { ReservatourService } from '../services/reservatour.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {
  public reservatour: Reservatour;
  public reservatourSubscription = new Subscription();
  public id;
  public loading = false;
  constructor(
    public reservatourservice: ReservatourService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loading = true;
    this.id = this.route.snapshot.params.id;
    this.reservatourSubscription = this.reservatourservice.get$().subscribe((res: Reservatour[])=>{
      this.reservatour = res;
    });
    this.reservatourservice.get(this.id).subscribe((res)=>{
      console.log('Listo ya.');
      this.loading = false;
    });
  }

}
