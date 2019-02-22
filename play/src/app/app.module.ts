import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { Question1Component } from "./question1/question1.component";
import { Question2Component } from "./question2/question2.component";
import { Answer1Component } from "./answer1/answer1.component";
import { Answer2Component } from "./answer2/answer2.component";
import { QuestionContainerComponent } from "./question-container/question-container.component";
import { AnswerContainerComponent } from "./answer-container/answer-container.component";
import { StepRenderingServiceService } from "./step-rendering-service.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    Question1Component,
    Question2Component,
    Answer1Component,
    Answer2Component,
    QuestionContainerComponent,
    AnswerContainerComponent
  ],
  imports: [BrowserModule],
  entryComponents: [
    Question1Component,
    Question2Component,
    Answer1Component,
    Answer2Component
  ],
  providers: [StepRenderingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
