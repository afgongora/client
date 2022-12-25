import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Reservatour } from 'src/app/models/reservatour';
import { ReservatourService } from 'src/app/services/reservatour.service';

@Component({
  selector: 'app-reservatour-item',
  templateUrl: './reservatour-item.component.html',
  styleUrls: ['./reservatour-item.component.scss'],
})
export class ReservatourItemComponent implements OnInit {
  @Input() reserva: Reservatour;
  @Input() reservatours: Reservatour[];
  public reservatourSubscription = new Subscription();

  constructor(
    public reservatourservice: ReservatourService
  ) { }

  ngOnInit() {
    this.reservatourSubscription = this.reservatourservice.all$().subscribe((res: Reservatour[])=>{
      this.reservatours = res;
    });
  }
  onBorrar(){
    this.reservatourservice.delete(this.reserva.id);
    this.reservatourservice.all().subscribe((res)=>{
      console.log('Listo ya.');
    });

  }

}
