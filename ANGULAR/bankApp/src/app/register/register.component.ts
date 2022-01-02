import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // uname=""
  // acno=""
  // pswd=""

  //Our modal form - so for this- uname,acc,pswd- is made in form array- as key value pairs- empty FORM array
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[ a-zA-Z0-9]*')]]   //if spcl charcters needed, we put ?><.,*&%^$#@!
  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

  }


  register() {
    // var uname= this.uname;  
    // var acno= this.acno;
    // var pswd= this.pswd;



    //FOR REACTIVE FORM-
    //WE USE UNAME,ACNO,PASWD OF REGISTERFORM- WHICH WHEN CONSOLED IS IN THE OBJECT.VALUE.UNAME
    //SO

    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;


    //FOR CHECKING WHETHER ERROR IS IN UNAME,ACNO,PSWD- IF THERE - FOR ALERTING
    // if(this.registerForm.get('uname')?.errors){                    //for error case, to display invalid asi= red below user name- in html page we create a div
    //   alert("invalid username")
    // }



    //FOR VALIDATING

    // if(this.registerForm.valid)
    // {
    //   var result= this.ds.register(acno,uname,pswd)

    //   if(result){
    //     alert(" new user created. please login in")
    //     this.router.navigateByUrl('')
    //   }

    //   else{
    //     alert("user exist.please login")
    //     this.router.navigateByUrl('')
    //   }
    // }
    // else{
    //   alert("form invalid")
    // }
    // }



    if (this.registerForm.valid) {
      this.ds.register(acno, uname, pswd)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            this.router.navigateByUrl('')
          }
        },
          (result: any) => {
            alert(result.error.message)
            this.router.navigateByUrl('')
          }
        )

    }
    else {
      alert("form invalid")
    }
  }



}



