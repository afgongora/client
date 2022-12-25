import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservatourPageRoutingModule } from './reservatour-routing.module';

import { ReservatourPage } from './reservatour.page';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { ReservatourItemComponent } from './reservatour-item/reservatour-item.component';
import { ReservatourListComponent } from './reservatour-list/reservatour-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservatourPageRoutingModule
  ],
  declarations: [ReservatourPage, PostListComponent, PostItemComponent, ReservatourItemComponent, ReservatourListComponent]
})
export class ReservatourPageModule {}
