//import { album } from './../../pages/album-list/album-list.config';
import { IAlbum } from './../../../app/core/services/models/album-model';
import { Pipe, PipeTransform } from '@angular/core';

//const PageLimit = 6;

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  // transform(value: IAlbum[],filterAlbum: string, page:number) : IAlbum[] {
  //   filterAlbum!== " " ?  page = 0 :page

  //   const init = page * PageLimit;
  //   const end = init + PageLimit;

  //   return value.filter(album => album.name.toLocaleLowerCase()
  //   .includes(filterAlbum.toLocaleLowerCase()))
  //   .slice(init,end);
    
  // }

  transform(value: IAlbum[], filter: string ): IAlbum[] {
    return value.filter(album => {
      return album.name.toLowerCase().includes(filter.toLowerCase());
    });
  }

  
  

  }
