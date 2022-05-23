import { FormsComponent } from './components/forms/forms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { PagesPipe } from './pipes/pages.pipe';



@NgModule({
  declarations: [
   FormsComponent,
   FilterPipe,
   PagesPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
  FormsComponent,
  FilterPipe,
  PagesPipe

  ]
})
export class SharedModule { }
