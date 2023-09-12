import { Component, OnInit } from '@angular/core';
import { IUser } from '../Iuser';
import { UserService } from '../user.service';


@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent  implements OnInit {

  protected title = 'app';
 // protected users$: Observable<IUser[]>;
users$!: IUser[];
  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
    });
  }
}


