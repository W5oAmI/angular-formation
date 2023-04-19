import { Component } from "@angular/core";

@Component({
  selector: 'app-warning-alert',
  template: `
    <p [ngClass]="{'bg-primary' : flagClasse}">This is a warning, you are in danger!</p>
  `,
  styles: [`
    p {
      padding: 20px;
      //background-color: mistyrose;
      border: 1px solid red;
    }

  `]
})
export class WarningAlertComponent{

  flagClasse = true;

}
