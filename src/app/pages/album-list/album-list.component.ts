import { album } from './album-list.config';
import { IAlbum } from './models/gallery-models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  public album: IAlbum[] =album as IAlbum[];



  constructor() { }

  ngOnInit(): void {
  }


}
