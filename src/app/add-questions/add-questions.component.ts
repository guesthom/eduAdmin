import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {
  questionSection = true;
  truefalseSection = false;
  fillintheblankSection = false;
  subjectiveSection = false;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private userService: UserService,private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
  }

  showObjective(){
    console.log("Calling 1");
    this.questionSection = true;
    this.truefalseSection = false;
    this.fillintheblankSection = false;
    this.subjectiveSection = false;
  }

  showTrueFalse(){
    console.log("Calling 2");
    this.questionSection = false;
    this.truefalseSection = true;
    this.fillintheblankSection = false;
    this.subjectiveSection = false;
    
  }

  showFillinblank(){
    console.log("Calling 3");
    this.questionSection = false;
    this.truefalseSection = false;
    this.fillintheblankSection = true;
    this.subjectiveSection = false;
  }

  showSubjective(){
    console.log("Calling 4");
    this.questionSection = false;
    this.truefalseSection = false;
    this.fillintheblankSection = false;
    this.subjectiveSection = true;
  }
  addQuestion(form: NgForm) {
    this.userService.postQuestion(form.value).subscribe(
      res => {
        // this.toastr.success('Hello world!', 'Toastr fun!');
        this.router.navigateByUrl("/questions");
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }
}
