import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';
import { RotatingNavigationComponent } from './rotating-navigation/rotating-navigation.component';
import { HiddenSearchComponent } from './hidden-search/hidden-search.component';
import { BlurryLoadingComponent } from './blurry-loading/blurry-loading.component';
import { ScrollAnimationComponent } from './scroll-animation/scroll-animation.component';
import { SplitLandingComponent } from './split-landing/split-landing.component';
import { FormInputWaveComponent } from './form-input-wave/form-input-wave.component';
import { SoundBoardComponent } from './sound-board/sound-board.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';
import { EventKeycodesComponent } from './event-keycodes/event-keycodes.component';
import { FaqCollapseComponent } from './faq-collapse/faq-collapse.component';
import { RandomChoicePickerComponent } from './random-choice-picker/random-choice-picker.component';
import { AnimatedNavigationComponent } from './animated-navigation/animated-navigation.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'expanding-cards', component: ExpandingCardsComponent },
      { path: 'progress-steps', component: ProgressStepsComponent },
      { path: 'rotating-navigation', component: RotatingNavigationComponent },
      { path: 'hidden-search', component: HiddenSearchComponent },
      { path: 'blurry-loading', component: BlurryLoadingComponent },
      { path: 'scroll-animation', component: ScrollAnimationComponent },
      { path: 'split-landing', component: SplitLandingComponent },
      { path: 'form-wave', component: FormInputWaveComponent },
      { path: 'sound-board', component: SoundBoardComponent },
      { path: 'dad-jokes', component: DadJokesComponent },
      { path: 'event-keycodes', component: EventKeycodesComponent },
      { path: 'faq-collapse', component: FaqCollapseComponent },
      { path: 'random-choice-picker', component: RandomChoicePickerComponent },
      { path: 'animated-navigation', component: AnimatedNavigationComponent },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
