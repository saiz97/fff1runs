import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './stopwatch/timer/timer.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { DrawPositionComponent } from './draw-position/draw-position.component';
import { HistoryComponent } from './history/history.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { AccordionGroupComponent } from './shared/accordion/accordion-group.component';

import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

// https://stackblitz.com/edit/angular-fontawesome-sample-amenjh?file=src%2Fapp%2Fapp.module.ts
import { FontAwesomeModule, FaIconLibrary, FaConfig } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    StopwatchComponent,
    HeaderComponent,
    FooterComponent,
    DrawPositionComponent,
    HistoryComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AccordionComponent,
    AccordionGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary, faConfig: FaConfig) {
    library.addIconPacks(fas);
    faConfig.defaultPrefix = "fas";
  }
}
