
import { IAlbum } from '../models/album-model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) {

  }
  public getAlbums():Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]>(`${environment.apiUrl}albums`);
  }
  /**
   * Funcion que devuelve los Albums por Id
   * @param id 
   *
   */
  public getProductById(id: string): Observable<IAlbum> {
    return this.httpClient.get<IAlbum>(`${environment.apiUrl}albums/${id}`);
  }
   /**
    * Función para eliminar Album
    * @param id  id del album
    *
    */
  public deleteAlbum(id: string): Observable<IAlbum> {
    return this.httpClient.delete<IAlbum>( `${environment.apiUrl}albums/${id}`);
  }

  public addAlbum(body: IAlbum): Observable<IAlbum> {
    return this.httpClient.post<IAlbum>(
      `${environment.apiUrl}albums`,
      body
    );
  }

  public editAlbum(id: string, body: IAlbum): Observable<IAlbum> {
    return this.httpClient.put<IAlbum>(
      `${environment.apiUrl}albums/${id}`,
      body
    );
  }

  
  }

