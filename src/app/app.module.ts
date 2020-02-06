import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { SampleContentComponent } from './sample-content/sample-content.component';


import { 
  MatProgressSpinnerModule, 
MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
MatTabsModule,
MatToolbarModule,
 } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
  declarations: [
    AppComponent, 
    SampleContentComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    // however: diameter = 50 works!
    { provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, useValue: { diameter: 40 } }
  ]
})
export class AppModule { }
