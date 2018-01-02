import { Component, OnInit } from '@angular/core';
import { TeacherListDataService } from '../../service/teacher-list-data.service';
import {Teacher} from '../../service/teacher-list-data.service';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
teachers: Teacher[];
isToDisplayTeachers: boolean = false;
  constructor(private TeacherListDataService:TeacherListDataService) 
  { 
    
  }

  ngOnInit() 
  {
    this.TeacherListDataService.getTeachers().subscribe((teachers)=>{
      console.log(teachers);
      this.teachers = teachers;
    })
  }

  toggleToDisplayTeachers() {
    this.isToDisplayTeachers = !this.isToDisplayTeachers;
  }

}
