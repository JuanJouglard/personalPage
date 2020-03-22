import { Component, OnInit } from "@angular/core";
import {
  faInstagramSquare,
  faGithubSquare,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "links-of-interest",
  templateUrl: "./links-of-interes.component.html",
  styleUrls: ["./links-of-interes.component.scss"]
})
export class LinksOfInterestComponent implements OnInit {
  constructor() {}

  faInstagram = faInstagramSquare;
  faGithub = faGithubSquare;
  faTwitter = faTwitterSquare;
  faMail = faEnvelope;

  ngOnInit() {}
}
