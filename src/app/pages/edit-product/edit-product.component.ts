import { album } from './../album-list/album-list.config';
import { IAlbum } from './../album-list/models/gallery-models';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/core/services/albums/albums.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public album?: IAlbum;

  constructor(
    private activatedRoute:ActivatedRoute,
    private albumsServices:AlbumsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const Id = params['id'];
      this.albumsServices.getProductById(Id).subscribe((album) => {
        this.album = album;
      });
    });
  }

}
