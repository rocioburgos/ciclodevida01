import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciclodevida';

  HacerCambios(){
    this.title ="Angular 2021. Bienvenidos";
  }
}
