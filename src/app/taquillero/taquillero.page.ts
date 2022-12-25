import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taquillero',
  templateUrl: './taquillero.page.html',
  styleUrls: ['./taquillero.page.scss'],
})
export class TaquilleroPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  onPost(){
    this.router.navigate(['/res-new']);

  }

}
