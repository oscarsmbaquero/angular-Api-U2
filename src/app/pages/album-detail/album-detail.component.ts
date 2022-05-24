//import { album } from './../album-list/album-list.config';
//import { IAlbum } from './../album-list/models/gallery-models';
import { IAlbum } from '../../../app/core/services/models/album-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbumsService } from './../../core/services/albums/albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  //public currentAlbum$?: Observable<IAlbum>;
  
  //public album: IAlbum[]=album as IAlbum[];
  public currentAlbum?: IAlbum;
  public songs?=[];
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>{
      const id = params['id'];
      console.log(id);
      this.albumService.getProductById(id).subscribe((album) =>{
        this.currentAlbum = album;


      })
      //this.currentAlbum$ = this.albumService.getProductById(id);
     
      
      // this.currentAlbum = this.album.find(element => element.id === id);
      // console.log(this.currentAlbum);

   }
   )
  }

}
