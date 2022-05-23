//import { album } from './../../pages/album-list/album-list.config';
import { IAlbum } from './../../../app/core/services/models/album-model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IAlbum[],criteria: string ): IAlbum[] {
    return value.filter(album => {
      return album.name.toLowerCase().includes(criteria.toLowerCase());
    });
  }

}
