import { Component, OnInit } from "@angular/core";
import { fadeInAnimation } from "../../shared/animations/route-animation";

@Component({
  selector: "app-studies",
  templateUrl: "./studies.component.html",
  styleUrls: ["./studies.component.scss"]
  /* animations: [fadeInAnimation],
  host: { "[@fadeInAnimation]": "" } */
})
export class StudiesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
