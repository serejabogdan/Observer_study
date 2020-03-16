import { Routes } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import { WatchedComponent } from "./watched/watched.component";
import { FavoriteComponent } from "./favorite/favorite.component";

export const VideosRoutes: Routes = [
  { path: "", redirectTo: "news", pathMatch: "full" },
  { path: "news", component: NewsComponent },
  { path: "watched", component: WatchedComponent },
  { path: "favorite", component: FavoriteComponent }
];
