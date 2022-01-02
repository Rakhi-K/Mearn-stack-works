import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  withCredential :true,
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService 
{

  //***FOR HAVING THE USER NAME DISPLAYED***
  currentUserName = ""
  currentAcno = ""

  data: any = {
    1000: { acno: 1000, uname: "NEER", password: "1000", balance: 5000, transaction: [] },
    1001: { acno: 1001, uname: "LAISA", password: "1001", balance: 5000, transaction: [] },
    1002: { acno: 1002, uname: "REETHU", password: "1002", balance: 5000, transaction: [] },
  }

  constructor(private http: HttpClient) {  //getdetails is called- as first we need this
   // this.getDetails()
  }

  

  getTransaction(acno: any) {
    // return this.data[acno]["transaction"]

    const data={
      acno
    }
    return this.http.post('http://localhost:3000/transaction', data, this.getOptions())
  }





  //for storing in local storage
  saveDetails() {
    if (this.data) {
      localStorage.setItem("data", JSON.stringify(this.data))
    }

    if (this.currentUserName) {
      localStorage.setItem("currentUserName", JSON.stringify(this.currentUserName))
    }

    if (this.currentAcno) {
      localStorage.setItem("currentAcno", JSON.stringify(this.currentAcno))
    }
  }
  //getting details from local stroage- and call this in constructor
  getDetails() {
    if (localStorage.getItem("data")) {
      this.data = JSON.parse(localStorage.getItem("data") || " ")
    }
    if (localStorage.getItem("currentUserName")) {
      this.currentUserName = JSON.parse(localStorage.getItem("currentUserName") || " ")
    }
    if (localStorage.getItem("currentAcno")) {
      this.currentAcno = JSON.parse(localStorage.getItem("currentAcno") || " ")
    }
  }


  register(acno: any, uname: any, password: any) {
    const data = {
      acno,uname,password
    }
     return this.http.post('http://localhost:3000/register', data)

  //   let database = this.data
  //   if (acno in database) {
  //     return false
  //   }
  //   else {
  //     database[acno] = {
  //       acno, uname, password, balance: 0, transaction: []
  //     }
  //     this.saveDetails()
  //     return true
  //   }
  // }
  }

  login(acno: any, pswd: any) {
    const data = {
      acno,pswd
    }
     return this.http.post('http://localhost:3000/login', data)

    // let database = this.data
    // if (acno in database) {
    //   if (pswd == database[acno]["password"]) {
    //     //***FOR HAVING THE USER NAME DISPLAYED***
    //     this.currentUserName = database[acno]["uname"]
    //     this.currentAcno = acno;
    //     this.saveDetails()
    //     return true

    //   }
    //   else {
    //     alert("invalid password")
    //     return false
    //   }
    // }
    // else {
    //   alert("user dosenot exist")
    //   return false
    // }

  }


  //TO GET TOKEN IN HEADER

   getOptions(){
     const token = JSON.parse(localStorage.getItem('token') || '')
     console.log(token);
     let headers = new HttpHeaders()
     if(token){
       headers= headers.append('token',token)
       options.headers = headers
     }
     console.log(options)
     return options
     
   }

  deposite(acno: any, password: any, amt: any) {

    const data ={
      acno,password,amt
    }
    return this.http.post('http://localhost:3000/deposite', data,this.getOptions())
    }
  

   // var amount = parseInt(amt)  //as it comes as string so parsed to int

  //   let database = this.data
  //   if (acno in database) {
  //     if (pswd == database[acno]["password"]) {

  //       database[acno]["balance"] = database[acno]["balance"] + amount
  //       database[acno]["transaction"].push({ amount: amount, type: "CREDIT" })
  //       console.log(database[acno]["transaction"]);
  //       this.saveDetails()
  //       return database[acno]["balance"]

  //     }

  //     else {
  //       alert("invalid password")
  //       return false
  //     }
  //   }

  //   else {
  //     alert("User not found")
  //     return false
  //   }

  // }
  

  withdrawal(acno: any, password: any, amt: any) {


    const data ={
      acno,password,amt
    }
    return this.http.post('http://localhost:3000/withdrawal', data,this.getOptions())
  //   var amount = parseInt(amt)  //as it comes as string so parsed to int

  //   let database = this.data
  //   if (acno in database) {
  //     if (pswd == database[acno]["password"]) {
  //       if (database[acno]["balance"] > amount) {
  //         database[acno]["balance"] = database[acno]["balance"] - amount
  //         database[acno]["transaction"].push({ amount: amount, type: "DEBIT" })
  //         console.log(database[acno]["transaction"]);
  //         this.saveDetails()
  //         return database[acno]["balance"]
  //       }
  //       else {
  //         alert("insufficient balance")
  //         return false
  //       }


  //     }
  //     else {
  //       alert("invalid password")
  //       return false
  //     }
  //   }
  //   else {
  //     alert("User not found")
  //     return false
  //   }
  // }


  
  }

  deleteAcc(acno:any){
    return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())
  }




//   Transaction(acno:any){
//     const data ={
//       acno
//     }
//   }

 }
