import { Component } from "@angular/core";

@Component({
    selector: 'pm-root',
    template: `<div><h1>{{pageTitle}}</h1>
    <div>Z Nation Operation Reset</div>
    </div>`    
})
export class AppComponent {
    pageTitle: string = 'Z Nation Citizens Management';

}