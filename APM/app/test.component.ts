import {Component} from '@angular/core';
@Component({
    selector : 'test-app',
    template : `
        <div>
            <h1>{{name}}</h1>
            <div>My Second Angular2 Component</div>
        </div>
    `
})

export class TestComponent{
    name:string = "Bhupendra Solanki";
}
