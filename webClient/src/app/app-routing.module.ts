import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

import { ProduitListComponent } from './produit-list/produit-list.component';

const routes: Routes = [
  {path: 'user', component:UserListComponent},
  { path: 'produit', component: ProduitListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
