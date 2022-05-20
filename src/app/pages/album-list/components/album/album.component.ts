//import { IAlbum } from './../../models/gallery-models';
import { IAlbum } from './../../../../../app/core/services/models/album-model';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() public cd?: IAlbum

  constructor() { }

  ngOnInit(): void {
    console.log(this.cd);
    
  }

}
