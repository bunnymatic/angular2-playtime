import { Component, Input } from "@angular/core";
import { iQuestion } from "../interfaces/iquestion";

@Component({
  selector: "app-question2",
  templateUrl: "./question2.component.html",
  styleUrls: ["./question2.component.scss"]
})
export class Question2Component implements iQuestion {
  @Input() questionData: any;
  constructor() {}

  ngOnInit() {}
}
