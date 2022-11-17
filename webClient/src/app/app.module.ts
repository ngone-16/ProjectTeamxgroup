import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { MaterialModule } from './material.module';
import { ProduitComponent } from './produit/produit.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    ProduitComponent,
    ProduitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
