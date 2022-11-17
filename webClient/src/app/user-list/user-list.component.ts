import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
//import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit {
  userList$!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getUsers().subscribe((i:any)=> {

        this.userList$=i.users;
        console.log(i);
    });
  }

}


