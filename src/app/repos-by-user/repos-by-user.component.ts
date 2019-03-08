import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos-by-user',
  templateUrl: './repos-by-user.component.html',
  styleUrls: ['./repos-by-user.component.css']
})
export class ReposByUserComponent implements OnInit {
  param:any;
  userExist:any;
  reposByUser:any;

  constructor(private usersService: UsersService,
    private activatedRoute: ActivatedRoute,) { }

    ngOnInit() {
      this.usersService.getUsers().subscribe((data: {}) => {
        this.findUserById(data);
      });
      
    }

    findUserById(users){
      this.activatedRoute.params
      .subscribe(params => {
        this.userExist = users.filter(function(user) { 
          if(user.id == parseInt(params.userId)) {
            console.log(user);
            return user;
          }
         });
        });
  }
  
}
