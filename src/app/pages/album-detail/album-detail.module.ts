import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumDetailRoutingModule } from './album-detail-routing.module';
import { AlbumDetailComponent } from './album-detail.component';


@NgModule({
  declarations: [
      AlbumDetailComponent
  ],
  imports: [
    CommonModule,
    AlbumDetailRoutingModule
  ]
})
export class AlbumDetailModule { }
