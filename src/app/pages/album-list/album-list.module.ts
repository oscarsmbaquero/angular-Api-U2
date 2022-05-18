import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlbumListRoutingModule } from './album-list-routing.module';
import { AlbumListComponent } from './album-list.component';
import { AlbumComponent } from './components/album/album.component';



@NgModule({
  declarations: [
    AlbumListComponent,
    AlbumComponent,
    
  ],
  imports: [
    CommonModule,
    AlbumListRoutingModule,
    RouterModule
  ]
})
export class AlbumListModule { }
