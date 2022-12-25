import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaquilleroPageRoutingModule } from './taquillero-routing.module';

import { TaquilleroPage } from './taquillero.page';
import { PostListComponent } from '../reservatour/post-list/post-list.component';
import { PostItemComponent } from '../reservatour/post-item/post-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaquilleroPageRoutingModule
  ],
  declarations: [TaquilleroPage, PostListComponent,PostItemComponent]
})
export class TaquilleroPageModule {}
