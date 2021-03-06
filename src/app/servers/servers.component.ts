import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers'
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers =['TestServer', 'TestServer2'];
  toggleParagraph = true;
  timestamps = [];

  onButtonClick() {
    this.toggleParagraph = !this.toggleParagraph;
    this.timestamps.push(new Date());
    console.log(this.timestamps);
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
 
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName() {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getTimeStampColor(timestamp,i) {
    if (i > 3) {
      return "dodgerBlue";
    }
  }

}
