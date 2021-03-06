import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlbumListRoutingModule } from './album-list-routing.module';
import { AlbumListComponent } from './album-list.component';
import { AlbumComponent } from './components/album/album.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AlbumListComponent,
    AlbumComponent,
   
    
  ],
  imports: [
    CommonModule,
    AlbumListRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class AlbumListModule { }
