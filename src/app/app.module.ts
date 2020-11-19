import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './stopwatch/timer/timer.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { FooterComponent } from './footer/footer.component';
import { DrawPositionComponent } from './draw-position/draw-position.component';
import { HistoryComponent } from './history/history.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './header/navigation-bar/navigation-bar.component';

// https://stackblitz.com/edit/angular-fontawesome-sample-amenjh?file=src%2Fapp%2Fapp.module.ts
import { FontAwesomeModule, FaIconLibrary, FaConfig } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    StopwatchComponent,
    HeaderComponent,
    NavigationBarComponent,
    FooterComponent,
    DrawPositionComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary, faConfig: FaConfig) {
    library.addIconPacks(fas);
    faConfig.defaultPrefix = "fas";
  }
}
