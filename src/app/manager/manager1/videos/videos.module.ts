import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NewsComponent } from "./news/news.component";
import { WatchedComponent } from "./watched/watched.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { PaginatorComponent } from './news/paginator/paginator.component';

@NgModule({
  declarations: [NewsComponent, WatchedComponent, FavoriteComponent, PaginatorComponent],
  imports: [BrowserModule],
  exports: [PaginatorComponent]
})
export class VideosModule {}
