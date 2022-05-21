import { AlbumsService } from './../../core/services/albums/albums.service';

//import { album } from './album-list.config';
//import { IAlbum } from './models/gallery-models';
import { IAlbum } from '../../../app/core/services/models/album-model';
import { Component, OnInit } from '@angular/core';

//import { AlbumsService } from 'src/app/core/services/albums/albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  //public album: IAlbum[] =album as IAlbum[];
  public album?: IAlbum[];
  //public album: IAlbum[] =album as IAlbum[];



  constructor(
    private albumsService : AlbumsService,
  ) { }

  ngOnInit(): void {
    this.getAlbums();
    // this.albumsService.getAlbums().subscribe((album) =>{

    //   this.album = album;
    //   console.log(this.album);
    // })
  }

  public onDelete(id: string) {
    this.albumsService.deleteProduct(id).subscribe((album) => {
      console.log('Eliminado!', album);
      this.getAlbums();
    });
  }

  private getAlbums() {
    this.albumsService.getAlbums().subscribe((album) => {
      this.album = album;
      //this.filteredProducts = products;
    });
  }


}
