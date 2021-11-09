//client side - Local storage  and Session storage

//TO assign values to local storage- we use localstorage.setItem("key","value")

// TO get items from local storage - we use localstorage.getItem("key")

// TO REMOVE key value pair from local storage - we use localstorage.removeItem("key")

// TO clear all key value pair from local storage - we use localstorage.clear()


//FOR STORING OBJ IN LOCAL STORAGE
//json, xml, gson - data transfer chyan oru formater- while storing in local storage-  from client to server side
//so we transfer as strings- so use JSON.stringify(value)

//WHILE GETTING THE values from local storage - we get as string- so to get it as obj - use JSON.parse(string)


//find the key- key in localstorage- 1000 in localstorage

//multithreading- oru single prgm divided to diff blocks and processed.

//single threaded - line by line execute








// //checking accno in locAL STROAGE

// function validateAccno(acno){
//     if(acno in localStorage){
//         return true
//     }
//     else{
//         return false
//     }
// }
// // console.log(validateAccno(1000));



// //BALANCE
// function getBalance(acno){
//     if(validateAccno(acno)){
//         let balData=JSON.parse(localStorage.getItem(acno))
//         return balData.balance
//     }

// }
// // console.log(getBalance(1000));




// //AUTHENTICATE

// function authenticate(acno,pwd)
// {
//     if(validateAccno(acno))
//     {
//         let data=JSON.parse(localStorage.getItem(acno));
//         checkpass= data.password

//         if(checkpass==pwd){
//             console.log("authentication success");
//         }
//         else{
//             console.log("failed");
//         }
//     }
//     else{
//         console.log("invalid acno");
//     }
// }
// authenticate(1000,"xyz123");





class Bank  
{
    createAccount()
     {
        let first_name = fname.value;
        //here accnum.value, pwd.valueis  of bank.html page is taken
        let acno = accnum.value;
        let password = pwd.value;
        let balance= Number(bal.value);
        let transcations=[];

        //  console.log(first_name,acno,password);
        let user =
        {
            first_name, acno, password,balance, transcations
        }
        // console.log(user);
        localStorage.setItem(user.acno, JSON.stringify(user))
        alert("account created")
        location.href = "./login.html"
    }
    
       validateAccountNumber(accno){
           return accno in localStorage?true:false
           
       }
       

    authentication()
    {
        //here acc.value , pass.value of login page is taken
         let account_number= acc.value;
         let newpass= pass.value;
         if (this.validateAccountNumber) 
         {
              let data=JSON.parse(localStorage.getItem(account_number))
              if (newpass == data.password) {
                  sessionStorage.setItem("user",account_number)
                alert("login success")  
                location.href="./nav.html"
              }
         }
         else{
             alert("invalid accountnumber")
         }
    }

    logout()
    {
        sessionStorage.removeItem("user")  
        location.href="./login.html"
    }
     

    getBalance(){
        let log_acno=sessionStorage.getItem("user");
        let data=JSON.parse(localStorage.getItem(log_acno))
        return data.balance
    }

  
    balanceEnquiry(){
        let log_acno=sessionStorage.getItem("user");
        let data=JSON.parse(localStorage.getItem(log_acno))
        
        let mydiv=document.createElement("div")
        mydiv.innerHTML=`avl balance is ${data.balance}`
        document.querySelector("body").append(mydiv)
        // alert(data.balance)
    }
    
  fundTransfer(){
      let to_accountnumber= to_acc.value;
      let c_accountnumber= to_cc.value;
      let amount= amt.value;
      if (to_accountnumber == c_accountnumber) 
      {
          if (this.validateAccountNumber(to_accountnumber)) 
          {
              if (Number(this.getBalance())>amount) 
              {
                  let user_acno= sessionStorage.getItem("user")
                  let payer_details=this.getAccountDetails(user_acno)
                  let receiver_details=this.getAccountDetails(c_accountnumber)
                  receiver_details["balance"]+=Number(amount)
                  localStorage.setItem(c_accountnumber,JSON.stringify(receiver_details))
                  payer_details["balance"]-=Number(amount)
                  localStorage.setItem(user_acno,JSON.stringify(payer_details))
                  swal("Transcation successful", "success") //for instead of alert box  
                  this.paymentHistory(to_accountnumber,amount)
              }
              else
              {
                alert("insufficient balance")  //swal("Good job!", "You clicked the button!", "error") for error - use error
              }
          }
          else{
              alert("invalid account number")
          }
      }
      else
      {
          alert("account number mismatch")
      }
      

  }

      getAccountDetails(accno){
              return JSON.parse(localStorage.getItem(accno))
      }

      paymentHistory(acno,amt){
        let user_acno= sessionStorage.getItem("user");
        let payer_details=this.getAccountDetails(user_acno);
        payer_details.transcations.push({"to":acno, "amount":amt});
        localStorage.setItem(user_acno, JSON.stringify(payer_details));
      }

}

var bank = new Bank();





