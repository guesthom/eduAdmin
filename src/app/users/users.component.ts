import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userDetails;
  userList : any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserList().subscribe(
      res => {
        this.userDetails = res['user'];
        this.userList = JSON.parse(JSON.stringify(this.userDetails));
        console.log("Calling this",this.userList);
      },
      err => { 
        console.log(err);
        
      }
    );
  }

}
