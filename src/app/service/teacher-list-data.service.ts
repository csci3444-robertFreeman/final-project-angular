import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherListDataService {

  constructor(public http:Http) 
  {
    console.log("TeacherListDataService constructor ")
  }
  
  getTeachers()
  {
    return this.http.get('http://localhost:9016/api/v1/teachers')
    .map(response=> response.json()); // NOTE rxjs map operator allows us to hook up a transformer to observable returned by above GET
  }
}


export interface Teacher
{
  teacherid: string,
  name: string,
  lastname: string,
  title: string,
  salary: number,
  age: number,
  isFullTime: boolean,
  updatedOn: Date
}

