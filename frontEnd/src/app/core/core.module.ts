import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { NavBarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { DescriptionComponent } from "./description/description.component";
import { RouterModule } from "@angular/router";
import { StudiesComponent } from "./studies/studies.component";
import { CareerComponent } from "./career/career.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    DescriptionComponent,
    StudiesComponent,
    CareerComponent
  ],
  imports: [MatTabsModule, SharedModule, RouterModule, BrowserAnimationsModule],
  exports: [NavBarComponent],
  providers: [],
  bootstrap: []
})
export class CoreModule {}
