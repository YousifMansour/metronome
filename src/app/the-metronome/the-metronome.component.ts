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
  beatsPerBar: number = 4;
  clicksPerBeat: number = 1;
  loopID: any;
  counter: number;
  volume: number = 0.8;

  ngOnInit() {
    this.loadSound();
  }

  loadSound() {
    // this.sine1 = new Pizzicato.Sound('http://45.32.150.44:8080/sine1.wav');

    // this.sine2 = new Pizzicato.Sound('http://45.32.150.44:8080/sine2.wav');

    this.sine1 =
        new Pizzicato.Sound({source: 'wave', options: {frequency: 880}});

    this.sine2 =
        new Pizzicato.Sound({source: 'wave', options: {frequency: 440}});
  }

  loop() {
    if (this.loopID == null) {
      this.sine1.stop();
      this.sine2.stop();

      let beatLength = (60 / (this.tempo * this.clicksPerBeat));
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

  stop() {
    clearInterval(this.loopID);
    this.counter = null;
    this.loopID = null;

    this.sine1.stop();
    this.sine2.stop();
  }

  setOptions(tempo: number, beatsPerBar, clicksPerBeat) {
    if (tempo >= 1 && tempo) this.tempo = tempo;


    if (beatsPerBar >= 1 && beatsPerBar) this.beatsPerBar = beatsPerBar;

    if (clicksPerBeat >= 1 && clicksPerBeat) this.clicksPerBeat = clicksPerBeat;
  }
}
