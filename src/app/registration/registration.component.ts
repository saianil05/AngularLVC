import { Component } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']

 
})
export class RegistrationComponent {
  public user!: User; // our model

  ngOnInit() {       // we will initialize our form here
    this.user = {
    name: '',
    address: {
    street: '',
    postcode: '' // set default value to 8000
    }
    };
    }
    save(model: User, isValid: boolean) 
    { 
    // check if model is valid// if valid, call API to save customer
    console.log(model, isValid);
    } 
}
