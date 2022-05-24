//import { album } from './../../pages/album-list/album-list.config';
import { IAlbum } from './../../../app/core/services/models/album-model';
import { Pipe, PipeTransform } from '@angular/core';

//const PageLimit = 6;

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: IAlbum[], filter: string ): IAlbum[] {
    return value.filter(album => {
      return album.name.toLowerCase().includes(filter.toLowerCase());
    });
  }

  
  

  }
