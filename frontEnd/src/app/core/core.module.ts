import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { NavBarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [NavBarComponent, HomeComponent],
  imports: [MatTabsModule, SharedModule],
  exports: [NavBarComponent],
  providers: [],
  bootstrap: []
})
export class CoreModule {}
