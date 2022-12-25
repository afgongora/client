import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResNewPageRoutingModule } from './res-new-routing.module';

import { ResNewPage } from './res-new.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResNewPageRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [ResNewPage, FormComponent]
})
export class ResNewPageModule {}
