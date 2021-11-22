import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  uname=""
  acno=""
  pswd=""

  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
    
  }
  register(){
    var uname= this.uname;  
    var acno= this.acno;
    var pswd= this.pswd;
    
    var result= this.ds.register(acno,uname,pswd)

    if(result){
      alert(" new user created. please login in")
      this.router.navigateByUrl('')
    }

    else{
      alert("user exist.please login")
      this.router.navigateByUrl('')
    }
  }

}


    