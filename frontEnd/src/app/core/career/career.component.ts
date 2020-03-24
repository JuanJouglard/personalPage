import { Component, OnInit } from "@angular/core";
import { fadeInAnimation } from "../../shared/animations/route-animation";

@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.scss"]
  /* animations: [fadeInAnimation],
  host: { "[@fadeInAnimation]": "" } */
})
export class CareerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
