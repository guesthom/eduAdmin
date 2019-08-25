import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  postUser(user: User){
    console.log("Helllo");
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }
  
  getUserList() {
    console.log("Here");
    return this.http.get(environment.apiBaseUrl + '/getUserList');
  }



  // Subject
  postSubject(user: User){
    console.log("Helllo");
    return this.http.post(environment.apiBaseUrl+'/addSubject',user,this.noAuthHeader);
  }

  getSubject() {
    return this.http.get(environment.apiBaseUrl + '/getSubjectList');
  }

  postQuestion(user: User){
    console.log(user);
    console.log("Helllo");
    return this.http.post(environment.apiBaseUrl+'/addQuestions',user,this.noAuthHeader);
  }

  getQuestion() {
    return this.http.get(environment.apiBaseUrl + '/getQuestionsList');
  }


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
