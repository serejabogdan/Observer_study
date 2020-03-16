import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Manager1Component } from "./manager1/manager1.component";
import { Manager2Component } from "./manager2/manager2.component";
import { Manager3Component } from "./manager3/manager3.component";
import { Manager4Component } from "./manager4/manager4.component";
import { ManagerComponent } from "./manager/manager.component";
import { MainTabsComponent } from "./main-tabs/main-tabs.component";
import { RouterModule } from "@angular/router";
import { VideosModule } from "./manager1/videos/videos.module";

@NgModule({
  declarations: [
    Manager1Component,
    Manager2Component,
    Manager3Component,
    Manager4Component,
    ManagerComponent,
    MainTabsComponent
  ],
  imports: [CommonModule, RouterModule, VideosModule],
  exports: [
    ManagerComponent,
    Manager1Component,
    Manager2Component,
    Manager3Component,
    Manager4Component,
    RouterModule,
    VideosModule
  ]
})
export class ManagerModule {}
