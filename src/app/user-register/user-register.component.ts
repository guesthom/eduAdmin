import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private userService: UserService,private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
    
  }
  register(form: NgForm) {
    
    this.userService.postUser(form.value).subscribe(
      res => {
        // this.toastr.success('Hello world!', 'Toastr fun!');
        this.router.navigateByUrl("/users");
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );

    console.log(form.value);
}
resetForm(form: NgForm) {
  this.userService.selectedUser = {
    fullName: '',
    email: '',
    password: ''
  };
  form.resetForm();
  this.serverErrorMessages = '';
}

}
