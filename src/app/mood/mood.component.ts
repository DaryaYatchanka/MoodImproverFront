import { Component, OnInit, Input } from '@angular/core';
import { MoodService } from '../mood.service';
import { Mood } from '../mood';
import { TrackerService } from '../tracker.service';
import { Journal } from '../journal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders(
  { 
    'Access-Control-Allow-Origin' : '*', 
    'x-rapidapi-host': 'healthruwords.p.rapidapi.com',
    'x-rapidapi-key': 'f8c6b34214msh232fbc09e621676p1528b5jsnf9d29dcdf348',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json'
  }
  )
};
@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss']
})
export class MoodComponent implements OnInit {

  img:string;

  @Input() note: string;
  currentSelected: Mood;
  moodsHeirarchy: Mood[][];
  constructor(private moodeService: MoodService, 
              private trackerService: TrackerService,
              private http: HttpClient) { }

  ngOnInit() {
    this.currentSelected = new Mood("");
    this.moodsHeirarchy = [this.moodeService.moods];
  }

  showSubButtons(mood: Mood) {
    this.currentSelected = mood;
    this.moodsHeirarchy.push(mood.submoods);
  }

  goBack() {    
    this.moodsHeirarchy = this.moodsHeirarchy.slice(0, this.moodsHeirarchy.length-1);
  }

  submit() {
    this.shufflePic();

    if(this.currentSelected.name === "") {
      return;
    }
    console.log(this.note)
    // this.trackerService.addEntry(new Journal(this.currentSelected, this.note));
    this.trackerService.addEntry(new Journal(this.note,  this.currentSelected.name));
    console.log(this.currentSelected.name);

    this.refresh();
  }

  shufflePic(){
    this.http.get<any>(environment.apiUrl, httpOptions)
      .subscribe(result => {
        console.log(result);
        this.img = result[0].media;
        console.log(this.img);
      });


  }

  getEntries():Journal[] {
    return this.trackerService.journal;
  }

  refresh() {
    this.currentSelected = new Mood("");
    while(this.moodsHeirarchy.length > 1) {
      this.goBack();
    }
    this.note = "";
  }
}


