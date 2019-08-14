import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoodComponent } from './mood/mood.component';
import { MoodService } from './mood.service';
import { TrackerService } from './tracker.service';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MoodService,
    TrackerService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
