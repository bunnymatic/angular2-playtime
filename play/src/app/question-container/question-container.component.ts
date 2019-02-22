import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-question-container",
  templateUrl: "./question-container.component.html",
  styleUrls: ["./question-container.component.scss"]
})
export class QuestionContainerComponent implements OnInit {
  @Input() selected: any;
  constructor() {}

  ngOnInit() {
    console.log("QuestionContainer", this.selected);
  }
}
