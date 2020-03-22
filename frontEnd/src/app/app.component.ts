import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "frontEnd";

  navLinks = [
    { path: "", label: "Home" },
    { path: "", label: "Estudios" },
    { path: "", label: "Carrera" }
  ];
}
