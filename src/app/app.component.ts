import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = "Server one";
  username = "";

  listItems = [
    {"id": 1, "valeur": "un"},
    {"id": 2, "valeur": "deux"},
    {"id": 3, "valeur": "3"},
    {"id": 4, "valeur": "4"},
    {"id": 5, "valeur": "5"},
    {"id": 6, "valeur": "6"},
  ];

  constructor() {
    setTimeout( ()=>{
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!' + this.serverName
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  onReset(){
    this.username = '';
  }
}
