import { Routes } from "@angular/router";

import { ManagerComponent } from "./manager/manager/manager.component";
import { ManagerRoutes } from "./manager/manager.routes";

export const AppRoutes: Routes = [
  { path: "", redirectTo: "manager", pathMatch: "full" },
  { path: "manager", component: ManagerComponent, children: ManagerRoutes }
];
