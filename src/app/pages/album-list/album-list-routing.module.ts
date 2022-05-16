import { AlbumListComponent } from './album-list.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumDetailComponent } from './../album-detail/album-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component: AlbumListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumListRoutingModule { }
