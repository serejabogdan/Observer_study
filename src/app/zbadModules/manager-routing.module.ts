import { Manager1Component } from "./manager1/manager1.component";
import { Manager2Component } from "./manager2/manager2.component";
import { Manager3Component } from "./manager3/manager3.component";
import { Manager4Component } from "./manager4/manager4.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

export const ManagerRoutes: Routes = [
  /* { path: "", redirectTo: "/manager1", pathMatch: "full" }, */
  { path: "manager1", component: Manager1Component },
  { path: "manager2", component: Manager2Component },
  { path: "manager3", component: Manager3Component },
  { path: "manager4", component: Manager4Component },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ManagerRoutes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule {}
