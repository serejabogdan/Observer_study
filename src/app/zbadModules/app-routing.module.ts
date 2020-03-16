import { Routes, RouterModule } from "@angular/router";

import { ManagerComponent } from "./manager/manager/manager.component";
import { ManagerRoutes } from "./manager/manager.routes";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

export const AppRoutes: Routes = [
  { path: "", redirectTo: "manager", pathMatch: "full" },
  { path: "manager", component: ManagerComponent, children: ManagerRoutes }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}