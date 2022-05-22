import { HomeModule } from './pages/home/home.module';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "",//raiz de la app
    pathMatch:'full',//coincida nombre exacto
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "list",
    loadChildren: () => import('src/app/pages/album-list/album-list.module').then(m => m.AlbumListModule)
   },
  {
   path:"detail/:id",
   loadChildren: () => import('src/app/pages/album-detail/album-detail.module').then(m => m.AlbumDetailModule)
  },
  {
    path:"create-product",
    loadChildren: () => import('src/app/pages/create-product/create-product.module').then(m => m.CreateProductModule)
   },
   {
    path:"edit-product/:id",
    loadChildren: () => import('src/app/pages/edit-product/edit-product.module').then(m => m.EditProductModule)
   },
  // {
  //   path: "**",
  //   redirectTo:''//redirecciona al home y elimna la ruta erronea del usuario
  //  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
