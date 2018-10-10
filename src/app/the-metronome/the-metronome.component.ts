import {Component, OnInit} from '@angular/core';
import Pizzicato from 'node_modules/pizzicato/distr/Pizzicato.js';

@Component({
  selector: 'app-the-metronome',
  templateUrl: './the-metronome.component.html',
  styleUrls: ['./the-metronome.component.css']
})
export class TheMetronomeComponent implements OnInit {
  constructor() {}
  sine1: any;
  sine2: any;
  tempo: number = 200;
  beatsPerBar: number = 8;
  clicksPerBeat: number = 1;
  loopID: any;
  counter: number;
  volume: number = 1;

  // sliders
  numberOfTempoSteps: number = 5;

  ngOnInit() {
    // initializes the sounds needed for playback
    this.loadSound();
  }

  loadSound() {
    // server sounds currently not being used
    // this.sine1 = new Pizzicato.Sound('http://45.32.150.44:8080/sine1.wav');
    this.sine1 =
        new Pizzicato.Sound({source: 'wave', options: {frequency: 880}});

    this.sine2 =
        new Pizzicato.Sound({source: 'wave', options: {frequency: 440}});
  }

  // this is where the metronome looping starts. its the only place where sound
  // is gonna come out from
  loop() {
    if (this.loopID == null) {
      this.sine1.stop();
      this.sine2.stop();

      let beatLength = (60 / (this.tempo * this.clicksPerBeat));
      // this set interval function is how the metronome works as a metronome
      // given a tempo.
      this.loopID = setInterval(function() {
        if (this.counter == null) this.counter = 0;
        this.counter++;
        if (this.counter > (this.beatsPerBar)) this.counter = 1;

        if (this.counter == 1) {
          this.sine1.stop();
          this.sine2.stop();

          this.sine1.volume = this.volume;
          this.sine2.volume = this.volume;

          this.sine1.play();
          setTimeout(function() {
            this.sine1.stop();
          }.bind(this), 100);

        } else {
          this.sine1.stop();
          this.sine2.stop();

          this.sine1.volume = this.volume;
          this.sine2.volume = this.volume;

          this.sine2.play();
          setTimeout(function() {
            this.sine2.stop();
          }.bind(this), 100);
        }
      }.bind(this), beatLength * 1000);
    } else {
      this.sine1.stop();
      this.sine2.stop();
      this.stop();
      this.loop();
    }
  }

  // stops sound playing using the clear interval method
  stop() {
    clearInterval(this.loopID);
    this.counter = null;
    this.loopID = null;

    this.sine1.stop();
    this.sine2.stop();
  }

  // this is called when options are changed to update the metronome
  setOptions(tempo: number, beatsPerBar, clicksPerBeat) {
    if (tempo >= 1 && tempo) this.tempo = tempo;

    if (beatsPerBar && beatsPerBar >= 1) this.beatsPerBar = beatsPerBar;

    if (clicksPerBeat && clicksPerBeat >= 1) this.clicksPerBeat = clicksPerBeat;
  }

  changeTempo(tempo: number) {
    this.tempo = tempo;
    if (this.loopID) {
      this.stop();
      this.loop();
    }
  }

  changeBeatsPerBar(beatsPerBar: number) {
    this.beatsPerBar = beatsPerBar;
    if (this.loopID) {
      this.stop();
      this.loop();
    }
  }

  changeClicksPerBeat(clicksPerBeat: number) {
    this.clicksPerBeat = clicksPerBeat;
    if (this.loopID) {
      this.stop();
      this.loop();
    }
  }

  toggleFinerSteps() {
    if (this.numberOfTempoSteps == 5)
      this.numberOfTempoSteps = 1;
    else
      this.numberOfTempoSteps = 5;
  }
}