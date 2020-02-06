import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

    public gotoModulWare(): void {
        window.open("https://www.modulware.de", "modulware");
    }

}
