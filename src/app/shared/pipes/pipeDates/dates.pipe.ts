import { IAlbum } from './../../../core/services/models/album-model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dates'
})
export class DatesPipe implements PipeTransform {

  transform(value: IAlbum[],decade:string):IAlbum[] {
     
       if(decade === '80'){
        return value.filter(album => album.year>1980 && album.year<1990);
       }else if(decade === '90'){
        return value.filter(album => album.year>1990 && album.year<2000);
       }else{
        return value.filter(album => album.year>2000);
     }
      
    }
  }


