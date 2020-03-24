import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { StudiesComponent } from "./core/studies/studies.component";
import { CareerComponent } from "./core/career/career.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    data: {
      animation: "HomePage"
    }
  },
  {
    path: "studies",
    component: StudiesComponent,
    data: {
      animation: "StudiesPage"
    }
  },
  {
    path: "career",
    component: CareerComponent,
    data: {
      animation: "CareerPage"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
