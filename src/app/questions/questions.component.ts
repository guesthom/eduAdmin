import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questionDetails;
  questionList : any;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getQuestion().subscribe(
      res => {
        this.questionDetails = res['questions'];
        this.questionList = JSON.parse(JSON.stringify(this.questionDetails));
      },
      err => { 
        console.log(err);
        
      }
    );

  }

}
