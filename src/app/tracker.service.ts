import { Injectable } from '@angular/core';
import { Journal } from './journal';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  journal:Journal[];
  url=environment.url

  constructor(public http:HttpClient) { 
    this.journal = [];
    
  }
 
  addEntry(journal: Journal){
    console.log(journal.note);
    this.http.post<Journal>(this.url+"/journals", journal).subscribe();

  }

}
