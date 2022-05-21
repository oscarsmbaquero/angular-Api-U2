//import { IAlbum } from './../../models/gallery-models';
import { IAlbum } from './../../../../../app/core/services/models/album-model';
import { Component, Input, OnInit, EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() public cd?: IAlbum;
  @Output() public delete: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.cd);    
  }
  public onDelete() {
    this.delete.emit();
  }

 

}
