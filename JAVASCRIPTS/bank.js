class bank {
    createAccount(p_name, acno, ac_type, min_bal) {
        this.p_name = p_name,
            this.acno = acno,
            this.ac_type = ac_type,
            this.balance = min_bal
    }
    deposit(amount) {
        this.balance += amount
        console.log(`Your account ${this.acno} is credited with amount ${amount} and aval balance is ${this.balance}`);
    }
    withdrawal(amount) {
        if (this.balance > amount) {
            this.balance -= amount;
            console.log(`your account ${this.acno} debited ${amount} and avl balance is ${this.balance}`);

        } else {
            console.log(`transaction failed , insufficient amount`);
        }
    }
}

var obj1 = new bank
obj1.createAccount("revi", "1000", "savings", 3000)
obj1.deposit(3000)
obj1.withdrawal(2000)





//SECOND QUESTN
class Bank_details {
    session = {}
    accounts =
        {
            1001: {
                acno: 1001, password: "userone", balance: 5000, transactions:
                    [
                        { to: 1002, amount: 500 },
                        { to: 1003, amount: 600 },
                        { to: 1004, amount: 700 }
                    ]
            },
            1002: {
                acno: 1002, password: "usertwo", balance: 7000,
                transactions:
                    [
                        { to: 1001, amount: 500 },
                        { to: 1003, amount: 600 },
                        { to: 1004, amount: 700 }
                    ]
            },
            1003: {
                acno: 1003, password: "userthree", balance: 8000,
                transactions:
                    [
                        { to: 1001, amount: 500 },
                        { to: 1002, amount: 600 },
                        { to: 1004, amount: 700 }
                    ]
            },
            1004: {
                acno: 1004, password: "userone", balance: 9000,
                transactions:
                    [
                        { to: 1001, amount: 500 },
                        { to: 1003, amount: 600 },
                        { to: 1004, amount: 700 }
                    ]
            }
        }

    getdetails() {
        return this.accounts
    }

    //validation
    validateAccountNumber(acno){
        // if(acno in this.accounts){
        //     return true
        // }
        // else{
        //     return false
        // }
        return acno in this.accounts?true:false
    }

    //AUTHENTICATION-  LOGIN DETAILS

    authentication(acno, password) {

        if (acno in this.accounts) {
            let pwd = this.accounts[acno].password
            if (pwd == password) {
                this.session["user"] = acno
                //console.log("login success");
                return 1;
            }
            else {
                         //console.log("invalid password");
                return 0;
            }
                         //return pwd==password?1:0
        }

        else {
            return -1               //here -1 indicates invalid acno

        }
    }

    balanceEnquiry() {
        let user = this.session["user"]
        return this.accounts[user].balance
       
    }


    fundTransfer(to_acno, amount)  {
        if (this.validateAccountNumber(to_acno)) 
        {
            let user=this.session["user"]
            let bal= this.balanceEnquiry()
            if (bal > amount) {
                this.accounts[user].balance-= amount;
                this.accounts[to_acno].balance+= amount;
                this.accounts[user].transactions.push({ to: to_acno, amount: amount })
                console.log(this.accounts[user]);
            }
            else {
                console.log("insufficient bal");
            }
        }
        else 
        {
            console.log("invalid to_account");
        }

    }
    //PAYMENT HISTORY
    paymentHistory(){
        let user= this.session["user"]
        console.log(this.accounts[user].transactions);
    }
      

    getTransactions(){
        let transaction_history=[];
        for(let account in this.accounts){
            transaction_history.push(this.accounts[account].transactions)
        }
        return transaction_history
    }
      

    creditTransactions(){
        let transactions= this.getTransactions()
             for(let trans of transactions){
                 for (let tran of trans){
                     if (trans.to==this.session["user"]) {
                         console.log(tran);
                         
                     }
                 }
             }
        
    }
    
}



//PRINTING ALL DETAILS
var obj1 = new Bank_details
// console.log(obj1.getdetails());                  - printing all details in accounts



var user = obj1.authentication(1002, "usertwo")      // here user assigned as value 1 is returned
//  console.log(user);


//for AUTHENTICATION
console.log(user == 1 ? "login success" : user == -1 ? "invalid acno" : "invalid password");

//FOR BALANCE ENQUIRY
var user = obj1.authentication(1002, "usertwo")
console.log(obj1.balanceEnquiry());



//  //FUND TRANSFER
 obj1.fundTransfer(1002,2000)

 //payment
 obj1.paymentHistory(1002)

 //credit transfer
 obj1.creditTransactions(1002)




