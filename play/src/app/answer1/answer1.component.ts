import { Component, OnInit, Input } from "@angular/core";
import { iAnswer } from "../interfaces/ianswer";

@Component({
  selector: "app-answer1",
  templateUrl: "./answer1.component.html",
  styleUrls: ["./answer1.component.scss"]
})
export class Answer1Component implements iAnswer {
  @Input() answerData: any;

  constructor() {}

  ngOnInit() {}
}
