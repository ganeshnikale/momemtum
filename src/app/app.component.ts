import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'momemtum';
  navOpen:boolean = false;

  toggleNav(){
    this.navOpen =! this.navOpen;
    console.log(this.navOpen);
  }
}
