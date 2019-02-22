import { Component, Input } from "@angular/core";
import { iQuestion } from "../interfaces/iquestion";

@Component({
  selector: "app-question1",
  templateUrl: "./question1.component.html",
  styleUrls: ["./question1.component.scss"]
})
export class Question1Component implements iQuestion {
  @Input() questionData: any;
  constructor() {}

  ngOnInit() {}
}
