import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // acno=""
  // pswd=""
  // amount=""


  // acno1=""
  // pswd1=""
  // amount1=""

  ldate = new Date()

  depositeForm = this.fb.group({

    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[ a-zA-Z0-9]*')]],   //if spcl charcters needed, we put ?><.,*&%^$#@!
    amount: ['', [Validators.required, Validators.pattern('[ 0-9]*')]]
  })

  withdrawalForm = this.fb.group({

    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[ a-zA-Z0-9]*')]],  //if spcl charcters needed, we put ?><.,*&%^$#@!
    amount1: ['', [Validators.required, Validators.pattern('[ 0-9]*')]]
  })


  //***FOR HAVING THE USER NAME DISPLAYED***
  // username= this.ds.currentUserName

  
  username: any
  acno: any

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    this.username = JSON.parse(localStorage.getItem("currentUserName") || " ")
  }


  ngOnInit(): void {
    if (!localStorage.getItem("token")) {
      alert("please login")

    }
  }


  deposite() {


    // var acno = this.acno
    // var pswd= this.pswd
    // var amt = this.amount
    // var result= this.ds.deposit(acno,pswd,amt)

    //****For validating****//

    var acno = this.depositeForm.value.acno;
    var password = this.depositeForm.value.pswd;
    var amt = this.depositeForm.value.amount

    if (this.depositeForm.valid) {
      this.ds.deposite(acno, password, amt)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
        },
          (result) => {
            alert(result.error.message)
          })
    }
    else {
      alert("invalid form")
    }
  }

  withdrawal() {

    // var acno = this.acno1
    // var pswd= this.pswd1
    // var amt = this.amount1
    // var result= this.ds.withdrawal(acno,pswd,amt)

    //For validating

    var acno1 = this.withdrawalForm.value.acno1;
    var pswd1 = this.withdrawalForm.value.pswd1;
    var amount1 = this.withdrawalForm.value.amount1;


    if (this.withdrawalForm.valid) {
      this.ds.withdrawal(acno1, pswd1, amount1)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
        },
          (result) => {
            alert(result.error.message)
          })

    }
    else {
      alert("invalid form")
    }
  }

  deleteFromParent() {
    this.acno = JSON.parse(localStorage.getItem("currentAcno") || '')
  }

  onDelete(event: any) {
    this.ds.deleteAcc(event)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl('')
        }
      },
        (result) => {
          alert(result.error.message)
        })
  }


  onCancel(event: any) {
    this.acno = ""
  }

  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUserName")
    this.router.navigateByUrl("")


    //if timer needed
    // var router = this.router
    // setTimeout(function(){
    //   router.navigateByUrl("")
    // }, 5000);
  }



}
