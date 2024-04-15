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
import { IncrementingCounterComponent } from './incrementing-counter/incrementing-counter.component';
import { DrinkWaterComponent } from './drink-water/drink-water.component';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { BackgroundSliderComponent } from './background-slider/background-slider.component';
import { ThemeClockComponent } from './theme-clock/theme-clock.component';
import { ButtonRippleComponent } from './button-ripple/button-ripple.component';
import { DragNDropComponent } from './drag-ndrop/drag-ndrop.component';
import { DrawingAppComponent } from './drawing-app/drawing-app.component';
import { KineticLoaderComponent } from './kinetic-loader/kinetic-loader.component';
import { ContentPlaceholderComponent } from './content-placeholder/content-placeholder.component';
import { StickyNavbarComponent } from './sticky-navbar/sticky-navbar.component';
import { DoubleVerticalSliderComponent } from './double-vertical-slider/double-vertical-slider.component';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { GithubProfilesComponent } from './github-profiles/github-profiles.component';
import { DoubleClickHeartComponent } from './double-click-heart/double-click-heart.component';
import { AutoTextEffectComponent } from './auto-text-effect/auto-text-effect.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { GoodCheapFastComponent } from './good-cheap-fast/good-cheap-fast.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { AnimatedCountdownComponent } from './animated-countdown/animated-countdown.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { HoverboardComponent } from './hoverboard/hoverboard.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MobileTabNavigationComponent } from './mobile-tab-navigation/mobile-tab-navigation.component';
import { PasswordBackgroundComponent } from './password-background/password-background.component';
import { VerifyAccountUiComponent } from './verify-account-ui/verify-account-ui.component';
import { LiveUserFilterComponent } from './live-user-filter/live-user-filter.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'ExpandingCards', component: ExpandingCardsComponent },
      { path: 'ProgressSteps', component: ProgressStepsComponent },
      { path: 'RotatingNavigation', component: RotatingNavigationComponent },
      { path: 'HiddenSearch', component: HiddenSearchComponent },
      { path: 'BlurryLoading', component: BlurryLoadingComponent },
      { path: 'ScrollAnimation', component: ScrollAnimationComponent },
      { path: 'SplitLanding', component: SplitLandingComponent },
      { path: 'FormWave', component: FormInputWaveComponent },
      { path: 'SoundBoard', component: SoundBoardComponent },
      { path: 'DadJokes', component: DadJokesComponent },
      { path: 'EventKeyCodes', component: EventKeycodesComponent },
      { path: 'FaqCollapse', component: FaqCollapseComponent },
      { path: 'RandomChoicePicker', component: RandomChoicePickerComponent },
      { path: 'AnimatedNavigation', component: AnimatedNavigationComponent },
      { path: 'IncrementingCounter', component: IncrementingCounterComponent },
      { path: 'DrinkWater', component: DrinkWaterComponent },
      { path: 'MovieApp', component: MovieAppComponent },
      { path: 'BackgroundSlider', component: BackgroundSliderComponent },
      { path: 'ThemeClock', component: ThemeClockComponent },
      { path: 'ButtonRipple', component: ButtonRippleComponent },
      { path: 'DragNDrop', component: DragNDropComponent },
      { path: 'DrawingApp', component: DrawingAppComponent },
      { path: 'KineticLoader', component: KineticLoaderComponent },
      { path: 'contentplaceholder', component: ContentPlaceholderComponent },
      { path: 'StickyNavbar', component: StickyNavbarComponent },
      {
        path: 'DoubleVerticalSlider',
        component: DoubleVerticalSliderComponent,
      },
      { path: 'ToastNotification', component: ToastNotificationComponent },
      { path: 'GithubProfiles', component: GithubProfilesComponent },
      { path: 'DoubleClickHeart', component: DoubleClickHeartComponent },
      { path: 'AutoTextEffect', component: AutoTextEffectComponent },
      { path: 'PasswordGenerator', component: PasswordGeneratorComponent },
      { path: 'GoodCheapFast', component: GoodCheapFastComponent },
      { path: 'NotesApp', component: NotesAppComponent },
      { path: 'AnimatedCountdown', component: AnimatedCountdownComponent },
      { path: 'ImageCarousel', component: ImageCarouselComponent },
      { path: 'Hoverboard', component: HoverboardComponent },
      { path: 'Pokedex', component: PokedexComponent },
      { path: 'MobileTabNavigation', component: MobileTabNavigationComponent },
      { path: 'PasswordBackground', component: PasswordBackgroundComponent },
      { path: 'Unknown', component: HomeComponent },
      { path: 'VerifyAccountUi', component: VerifyAccountUiComponent },
      { path: 'LiveUserFilter', component: LiveUserFilterComponent },
      { path: '', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: '', component: HomeComponent },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
