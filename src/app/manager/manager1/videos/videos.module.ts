import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NewsComponent } from "./news/news.component";
import { WatchedComponent } from "./watched/watched.component";
import { FavoriteComponent } from "./favorite/favorite.component";

@NgModule({
  declarations: [NewsComponent, WatchedComponent, FavoriteComponent],
  imports: [BrowserModule]
})
export class VideosModule {}
