import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private fb:FormBuilder){

  }
  employeeForm:FormGroup;
  ngOnInit(){
    this.employeeForm=this.fb.group({
      fullName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')]],
        skillName:['',[Validators.required]],
        experienceInYears:['',[Validators.required]]
     
     
    })
  }
 
}
