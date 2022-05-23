import { IAlbum } from 'src/app/core/services/models/album-model';
import { Pipe, PipeTransform } from '@angular/core';
//import { ValueConverter } from '@angular/compiler/src/render3/view/template';

const LIMIT_PAGE = 6

@Pipe({
  name: 'pages'
})
export class PagesPipe implements PipeTransform {

  transform(value: IAlbum[], page: number): IAlbum[] {

    const page_init = page*LIMIT_PAGE;
    const page_end = (page + 1) *LIMIT_PAGE;
    return value.slice(page_init,page_end);
  }

}
