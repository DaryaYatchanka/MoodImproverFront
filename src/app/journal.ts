import { Mood } from './mood';

export class Journal {
    mood: string;
   
    note: string;
    

    // constructor(mood:Mood = new Mood(""), notes:string = ""){
    //     this.mood=mood;
    //     this.notes=notes;
    // }
  


    constructor( notes:string,  mood:string){
        this.note=notes;
        this.mood=mood;

    }
}
