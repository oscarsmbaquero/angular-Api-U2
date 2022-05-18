//import { IAlbum } from './../../../pages/album-list/models/gallery-models';
import { IAlbum } from '../models/album-model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) { 


  }

  public getAlbums():Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]>('https://motogp-oscar.herokuapp.com/circuits');
    //return this.httpClient.get<IAlbum[]>('https://breakingbadapi.com/api/');


    
  }
}
