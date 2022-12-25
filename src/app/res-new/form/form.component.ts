import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Reservatour } from 'src/app/models/reservatour';
import { ReservatourService } from 'src/app/services/reservatour.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
   public form: FormGroup;
   public reservatour: Reservatour = new Reservatour();

   public reservatours: Reservatour[];
   public reservatourSubscription = new Subscription();

  constructor(
    public reservatourservice: ReservatourService,
    public router: Router
  ) { }

  ngOnInit() {
    this.reservatourSubscription = this.reservatourservice.all$().subscribe((res: Reservatour[])=>{
      this.reservatours = res;
    });
    this.reservatour = new Reservatour();
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      detalle: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }
  onSave(){
    this.reservatour.username = 'Andres f Gongora';
    this.reservatour.title = this.form.get('title').value;
    this.reservatour.detalle = this.form.get('title').value;
    this.reservatour.date = '2022-12-16';
    this.reservatour.estado = 'Activo';
    this.reservatourservice.save(this.reservatour).subscribe((res)=>{
        this.reservatourservice.all().subscribe((res2)=>{
        this.router.navigate(['/reservatour']);
      });

    });


  }

}
