import { Injectable } from '@angular/core';
import { Mood } from './mood';

@Injectable({
  providedIn: 'root'
})
export class MoodService {
  moods: Mood[];
  constructor() { 
    let happy = new Mood("Happy", "success");
    let sad = new Mood("Sad", "info");
    let tired = new Mood("Tired", "warning");
    let angry = new Mood("Angry", "danger");
    
    happy.submoods = [new Mood("Excited", "danger"), new Mood("Whole", "primary"), new Mood("Energized", "warning")];
    
    let fatiged = new Mood("Fatigued", "primary");
    fatiged.submoods = [new Mood("Overworked"), new Mood("Mentally Stressed")];
    tired.submoods = [fatiged, new Mood("Depressed"), new Mood("Unmotivated")];
    sad.submoods = [new Mood("Missing"), new Mood("Longing"), new Mood("Bored")];
    angry.submoods = [new Mood("Upset"), new Mood("Furious"), new Mood("Judged")];

    this.moods = [
      happy, sad, tired, angry
    ];
  }
}
