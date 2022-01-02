import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // aim = "PERFECT BANKING PARTNER"  //for change in string
  // acc = "Account number please"      //proprty binding


  // acno = ""
  // pswd = ""



  loginForm = this.fb.group({

    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[ a-zA-Z0-9]*')]]   //if spcl charcters needed, we put ?><.,*&%^$#@!
  })

  constructor(private routerLogin: Router, private ds: DataService, private fb: FormBuilder) { }

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


  // login()
  // {

  //   //    //for two binding
  //   // var acno = this.acno
  //   // var pswd = this.pswd



  //   var acno= this.loginForm.value.acno;
  //   var pswd= this.loginForm.value.pswd;


  //   if(this.loginForm.valid)

  //   {
  //      let result = this.ds.login(acno,pswd)
  //   if (result) 
  //   {
  //     alert("login success")
  //     this.routerLogin.navigateByUrl('dashboard')

  //   }


  //   }


  // }

  login() {

    //    //for two binding
    // var acno = this.acno
    // var pswd = this.pswd



    var acno = this.loginForm.value.acno;
    var pswd = this.loginForm.value.pswd;


    if (this.loginForm.valid) {
      this.ds.login(acno, pswd)
        .subscribe((result:any) => {
          if (result) {
            alert(result.message)
            localStorage.setItem("currentUserName", JSON.stringify(result.currentUserName))
            localStorage.setItem("token", JSON.stringify(result.token))
            localStorage.setItem("currentAcno", JSON.stringify(result.currentAcno))
            this.routerLogin.navigateByUrl('dashboard')
          }
        },
        (result: any) => {
          alert(result.error.message)
        }
        )
    }
    else{
    alert("invalid form")
    }
  }


}





