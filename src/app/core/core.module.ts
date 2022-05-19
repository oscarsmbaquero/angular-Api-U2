//import { AlbumsService } from './services/albums/albums.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlbumsService } from './services/albums/albums.service';
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
    
  ],
  providers: [
  //AlbumsService,
  AlbumsService,
  
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
