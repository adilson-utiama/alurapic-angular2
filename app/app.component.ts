import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})

export class AppComponent {

    //Poderiamos usar o decorator @Inject(Http) http neste caso
    constructor(http: Http) {

    }
}