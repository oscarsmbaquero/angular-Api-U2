import { AlbumsService } from './../../core/services/albums/albums.service';
import { IAlbum } from '../../../app/core/services/models/album-model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  public album?: IAlbum[];
  public filteredProducts?: IAlbum[];
  
  constructor(
    private albumsService : AlbumsService,
  ) {
    
   }

  ngOnInit(): void {
    this.getAlbums();//lanzo la función al iniciar 
  }

  public onDelete(id: string) {
    this.albumsService.deleteAlbum(id).subscribe((album) => {
      //console.log('Eliminado!', album);
      this.getAlbums();
    });
  }
  /**
   * funcion que devuelve los albums
   */
  private getAlbums() {
    this.albumsService.getAlbums().subscribe((album) => {
      this.album = album;
      //this.filteredProducts = products;
    });
  }


}
