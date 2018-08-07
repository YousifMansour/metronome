import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';  //<<<< import it here
import {MatSliderModule} from '@angular/material/slider';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {TheMetronomeComponent} from './the-metronome/the-metronome.component';

@NgModule({
  declarations: [AppComponent, TheMetronomeComponent],
  imports:
      [BrowserModule, MatSliderModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
