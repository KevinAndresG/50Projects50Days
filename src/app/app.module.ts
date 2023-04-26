import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';
import { RotatingNavigationComponent } from './rotating-navigation/rotating-navigation.component';
import { HiddenSearchComponent } from './hidden-search/hidden-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { IncrementingCounterComponent } from './incrementing-counter/incrementing-counter.component';
import { DrinkWaterComponent } from './drink-water/drink-water.component';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { BackgroundSliderComponent } from './background-slider/background-slider.component';
import { ThemeClockComponent } from './theme-clock/theme-clock.component';
import { ButtonRippleComponent } from './button-ripple/button-ripple.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ExpandingCardsComponent,
    ProgressStepsComponent,
    RotatingNavigationComponent,
    HiddenSearchComponent,
    BlurryLoadingComponent,
    ScrollAnimationComponent,
    SplitLandingComponent,
    FormInputWaveComponent,
    SoundBoardComponent,
    DadJokesComponent,
    EventKeycodesComponent,
    FaqCollapseComponent,
    RandomChoicePickerComponent,
    AnimatedNavigationComponent,
    IncrementingCounterComponent,
    DrinkWaterComponent,
    MovieAppComponent,
    BackgroundSliderComponent,
    ThemeClockComponent,
    ButtonRippleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
