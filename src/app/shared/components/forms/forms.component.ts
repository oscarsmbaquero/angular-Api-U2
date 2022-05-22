import { album } from './../../../pages/album-list/album-list.config';
//import { AlbumsService } from './../../../core/services/albums/albums.service';
import { IAlbum } from './../../../pages/album-list/models/gallery-models';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsService } from 'src/app/core/services/albums/albums.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @Input() public album?:IAlbum;
  @Input() public editMode: boolean = false;

  public albumForm?: FormGroup;

  constructor(
   private formBuilder: FormBuilder,
   private albumsService: AlbumsService,
   private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    //console.log(this.album);
    this.albumForm=this.formBuilder.group({
      id: new FormControl(this.album ? this.album.id : '',[Validators.required]),
      name : new FormControl(this.album ? this.album.name : '',[Validators.required]),
      image: new FormControl(this.album ? this.album.image : '', [Validators.required]),
      year: new FormControl(this.album ? this.album.year : '', [Validators.required]),
    })
    
  }


  public saveAlbum(){
    const formValue = this.albumForm?.value;
    const  albumAdd$ = this.editMode && this.album
    ? this.albumsService.editAlbum(this.album.id, formValue)
    : this.albumsService.addAlbum(formValue);
    albumAdd$.subscribe((album) => {
      this.router.navigate(['list']);
    });



  }

}