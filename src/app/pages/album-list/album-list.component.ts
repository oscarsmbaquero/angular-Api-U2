import { AlbumsService } from './../../core/services/albums/albums.service';
//import { album } from './album-list.config';
import { IAlbum } from './models/gallery-models';
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
    this.albumsService.getAlbums().subscribe((album) =>{

      this.album = album;
      console.log(this.album);
    })
  }


}
