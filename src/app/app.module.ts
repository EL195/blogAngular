import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostListComponent } from "./postList/postList.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { PostListItemComponent } from "./post-list-item/post-list-item.component";
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './new-post/new-post.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeFr, "fr");

@NgModule({
  declarations: [AppComponent, PostListComponent, PostListItemComponent, HeaderComponent, NewPostComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [[{ provide: LOCALE_ID, useValue: "fr-FR" }]],
  bootstrap: [AppComponent]
})
export class AppModule {}
