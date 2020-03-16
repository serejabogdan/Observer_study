import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app/app.component";
import { ManagerModule } from "./manager/manager.module";
import { RouterModule } from "@angular/router";
import { AppRoutes } from "./app.routes";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes), ManagerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
