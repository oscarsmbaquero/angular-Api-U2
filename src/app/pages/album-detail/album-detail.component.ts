import { album } from './../album-list/album-list.config';
import { IAlbum } from './../album-list/models/gallery-models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  public album: IAlbum[]=album as IAlbum[];
  public currentAlbum?: IAlbum;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>{
      const AlbumId = params['id'];
     
      
      this.currentAlbum = this.album.find(element => element.id === AlbumId);
      console.log(this.currentAlbum);

   }
   )
  }

}
