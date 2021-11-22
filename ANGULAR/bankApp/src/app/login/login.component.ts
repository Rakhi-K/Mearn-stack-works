import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "PERFECT BANKING PARTNER"  //for change in string
  acc = "Account number please"      //proprty binding


  acno = ""
  pswd = ""



  constructor(private routerLogin: Router, private ds: DataService) { }

  ngOnInit(): void {
  }

  // accChange(event:any)
  // {

  //   this.acno= event.target.value       //event using $
  //       console.log(this.acno);

  // }

  // pswdChange(event:any)
  // {
  //   this.pswd = event.target.value       //event using $
  //       console.log(this.pswd);

  // }

  // login()
  // {  
  //                                         //for event binding
  //    var acno= this.acno
  //    var pswd  = this.pswd

  //    let db= this.data              
  //    if(acno in db)
  //    {
  //      if(pswd == db[acno]["password"]){
  //        alert("login success")
  //      }
  //      else{
  //        alert("invalid password")
  //      }  
  //    }
  //    else{
  //      alert("user dosenot exist")
  //    }


  // }

  //     login(a:any,p:any)
  //     {  
  //                                             //for template binfing
  //        var acno= a.value
  //        var pswd  = p.value

  //        let db= this.data              
  //        if(acno in db)
  //        {
  //          if(pswd == db[acno]["password"]){
  //            alert("login success")
  //          }
  //          else{
  //            alert("invalid password")
  //          }  
  //        }
  //        else{
  //          alert("user dosenot exist")
  //        }                              
  //     }


  login()
  {
    //for two binding
    var acno = this.acno
    var pswd = this.pswd

    let result = this.ds.login(acno,pswd)
    if (result) 
    {
      alert("login success")
      this.routerLogin.navigateByUrl('dashboard')

    }

  }
}





