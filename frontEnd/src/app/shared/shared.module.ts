import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LinksOfInterestComponent } from "./links-of-interes/links-of-interes.component";
import { LinksDirective } from './directives/links.directive';

@NgModule({
  declarations: [LinksOfInterestComponent, LinksDirective],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LinksOfInterestComponent]
})
export class SharedModule {}
