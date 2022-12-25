import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservatour',
  templateUrl: './reservatour.page.html',
  styleUrls: ['./reservatour.page.scss'],
})
export class ReservatourPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  onPost(){
    this.router.navigate(['/res-new']);

  }

}
