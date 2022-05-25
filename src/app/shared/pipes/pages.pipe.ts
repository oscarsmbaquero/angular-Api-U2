import { IAlbum } from 'src/app/core/services/models/album-model';
import { Pipe, PipeTransform } from '@angular/core';
import { PaginationService } from 'src/app/core/services/pagination.service';

//import { ValueConverter } from '@angular/compiler/src/render3/view/template';

const PageLimit = 5

@Pipe({
  name: 'pages',
  pure:false
})
export class PagesPipe implements PipeTransform {

  constructor(private paginationService: PaginationService){}

  transform(value: IAlbum[], page: number ): IAlbum[] {
    this.paginationService.setMaxPage(Math.ceil(value.length / 5));
    const init = page * PageLimit;
    const end = init + PageLimit;
    return value.slice(init,end);


    };

}
