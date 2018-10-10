import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';  //<<<< import it here
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {TheMetronomeComponent} from './the-metronome/the-metronome.component';

@NgModule({
  declarations: [AppComponent, TheMetronomeComponent],
  imports: [
    BrowserModule, MatSliderModule, FormsModule, BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatCheckboxModule, MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
