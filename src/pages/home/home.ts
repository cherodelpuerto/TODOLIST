import { Component } from '@angular/core';
import { NavController,AlertController  } from 'ionic-angular';
 
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    todos: string[] = [];
    todo: string;
 
    constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
 
    }
 
    add() {
        this.todos.push(this.todo);
        this.todo = "";
        let alert = this.alertCtrl.create({
        title: 'Success!',
        buttons: ['Dismiss']
        });

        alert.present();

    }
    
 
    delete(item) {
        var index = this.todos.indexOf(item, 0);
        if (index > -1) {
            this.todos.splice(index, 1);

            let alert = this.alertCtrl.create({
            title: 'Successfull Deleted!',
            buttons: ['Dismiss']
            });

                alert.present();
            }
    }

     edit(item) {
        var index = this.todos.indexOf(item, 0);
            if (index > -1) {
            this.todos.splice(index, 1);
            this.todo = item;
        }
            
        
    }

    
 

}