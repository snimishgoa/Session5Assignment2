import {Component} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'

@Component({
    selector:'app-component',
    template:`<br>
    <div class="container">
    <section id="login">
    <input class="form-control" type="text" placeholder="FirstName">
    <button type="button" class="btn btn-primary btn-block">Login</button>
    </section></div>
    `
    
})
export class RootComponent{

}