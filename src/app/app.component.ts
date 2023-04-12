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
