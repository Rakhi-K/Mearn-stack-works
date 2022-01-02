import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  

  acno="";
  transaction:any;

  constructor(private ds:DataService) { 
  // this.acno =this.ds.currentAcno
  // this.transaction = this.ds.getTransaction(this.acno)
  // console.log(this.transaction);
   
   this.acno = JSON.parse (localStorage.getItem("currentAcno") || '')
   this.ds.getTransaction(this.acno)
   .subscribe((result:any)=>{
     if(result){
       this.transaction = result.transaction
     }
   },
   (result)=>{
     alert(result.console.error.message)
     
   })
  
  }  

  ngOnInit(): void {
  }

}
