import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  [x: string]: any;

  title = "Grocery List";

  items = [
    {
      name: "Milk",
      quantity: 1
    },
    {
      name: "Bread",
      quantity: 2
    },
    {
      name: "Cookies",
      quantity: 7
    },
    {
      name: "Cheese",
      quantity: 5
    },
    {
      name: "Eggs",
      quantity: 10
    },
    {
      name: "Butter",
      quantity: 6
    },
  ];
  constructor(public NavController: NavController,public toastController: ToastController, public alertController: AlertController) {}

  async removeItem(item, index) {
      console.log("Removing Item -", item, index);
      const toast = await this.toastController.create({
        message: 'Removing Item -' + index + "...",
        duration: 3000
      });
       await toast.present();
      this.items.splice(index, 1);
    }

    addItem(){
      console.log("Adding Item");
      this.showAddItemPrompt();
    }

  async showAddItemPrompt() {
      const alert = document.createElement('ion-alert');
      alert.title = 'Add Item';
      alert.message = 'Please add item:';
      
      alert.inputs = [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        }
      ];
      alert.buttons = [{
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: item => {
          console.log('Saved clicked', item);
          this.items.push(item);
        }
      },

      ];
  
      document.body.appendChild(alert);
      await alert.present();
    }

}
