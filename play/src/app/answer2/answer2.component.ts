import { Component, OnInit, Input } from "@angular/core";
import { iAnswer } from "../interfaces/ianswer";

@Component({
  selector: "app-answer2",
  templateUrl: "./answer2.component.html",
  styleUrls: ["./answer2.component.scss"]
})
export class Answer2Component implements iAnswer {
  @Input() answerData: any;
  constructor() {}

  ngOnInit() {}
}
