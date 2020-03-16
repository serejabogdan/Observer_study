import { Manager1Component } from "./manager1/manager1.component";
import { Manager2Component } from "./manager2/manager2.component";
import { Manager3Component } from "./manager3/manager3.component";
import { Manager4Component } from "./manager4/manager4.component";
import { Routes } from "@angular/router";
import { VideosRoutes } from "./manager1/videos/videos.routes";

export const ManagerRoutes: Routes = [
  { path: "", redirectTo: "manager1", pathMatch: "full" },
  { path: "manager1", component: Manager1Component, children: VideosRoutes },
  { path: "manager2", component: Manager2Component },
  { path: "manager3", component: Manager3Component },
  { path: "manager4", component: Manager4Component }
];
