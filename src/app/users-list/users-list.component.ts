import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = [];
    this.usersService.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
  }

}
