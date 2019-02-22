import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Inject
} from "@angular/core";
import { Hero } from "../hero";
import { Question2Component } from "../question2/question2.component";
import { Question1Component } from "../question1/question1.component";
import { Answer1Component } from "../answer1/answer1.component";
import { Answer2Component } from "../answer2/answer2.component";
import { StepRenderingServiceService } from "../step-rendering-service.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
  steps: object;
  selected: string;

  @ViewChild("question", {
    read: ViewContainerRef
  })
  questionContainerRef: ViewContainerRef;

  @ViewChild("answer", {
    read: ViewContainerRef
  })
  answerContainerRef: ViewContainerRef;
  renderingService: StepRenderingServiceService;

  constructor(@Inject(StepRenderingServiceService) service) {
    this.renderingService = service;
    this.steps = {
      step1: [Question1Component, Answer1Component],
      step2: [Question2Component, Answer2Component]
    };
  }

  onSelect(selected: string) {
    const [questionComponent, answerComponent] = this.steps[selected];
    this.selected = selected;
    this.renderingService.renderComponent(
      this.questionContainerRef,
      questionComponent
    );
    this.renderingService.renderComponent(
      this.answerContainerRef,
      answerComponent
    );
  }

  ngOnInit() {
    this.onSelect("step1");
  }
}
