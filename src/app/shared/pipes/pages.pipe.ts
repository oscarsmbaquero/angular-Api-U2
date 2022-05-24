import { IAlbum } from 'src/app/core/services/models/album-model';
import { Pipe, PipeTransform } from '@angular/core';
//import { ValueConverter } from '@angular/compiler/src/render3/view/template';

const PageLimit = 6

@Pipe({
  name: 'pages',
  pure:false
})
export class PagesPipe implements PipeTransform {

  transform(value: IAlbum[], page: number ): IAlbum[] {
       
    const init = page * PageLimit;
    const end = init + PageLimit;
    return value.slice(init,end);


    };

}
