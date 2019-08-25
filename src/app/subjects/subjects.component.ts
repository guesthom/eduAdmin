import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjectDetails;
  subjectList : any;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getSubject().subscribe(
      res => {
        this.subjectDetails = res['subject'];
        this.subjectList = JSON.parse(JSON.stringify(this.subjectDetails));
      },
      err => { 
        console.log(err);
        
      }
    );

  }

}
