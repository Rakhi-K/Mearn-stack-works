//WEATHER DETAILS

var weather_data=[
    {district:"tvm",temp:30},
    {district:"tvm",temp:31},
    {district:"apy",temp:24},
    {district:"ktm",temp:20},
    {district:"idk",temp:19},
    {district:"ekm",temp:31},
    {district:"tsr",temp:29},
    {district:"mpm",temp:30},
   
    {district:"apy",temp:25},
    {district:"ktm",temp:21},
    {district:"idk",temp:18},
    {district:"ekm",temp:30},
    {district:"tsr",temp:20},
    {district:"mpm",temp:31},

]


//OUTPUT- [ TVM:30-HIGHEST TEMP]

var forecast={}

for (let data of weather_data)
{
    let district_name= data.district
    let cur_temp= data.temp
    if (district_name in forecast) 
    {
        let old_temp=forecast[district_name]
        if (cur_temp>old_temp) 
        {
            forecast[district_name]=cur_temp
        }
    }

    else
    {
        forecast[district_name]=cur_temp
    }

}
console.log(forecast);
    


//SORT W.R.T TEMP- as object we covrt to array
console.log(Object.entries(forecast)); - //we get result as nested array only  - no sorting


Object.entries(forecast).sort((temp1,temp2)=>temp1[1]-temp2[1])
console.log(forecast);  //check this


//BILL DETAILS

var bill_details=[

    {bill_number:1000,date:"17-09-2021",amount:5000,payment_type:"card"},
    {bill_number:1001,date:"17-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1002,date:"17-09-2021",amount:6000,payment_type:"card"},
    {bill_number:1003,date:"17-09-2021",amount:2000,payment_type:"cash"},
    {bill_number:1004,date:"18-09-2021",amount:7000,payment_type:"cash"},
    {bill_number:1004,date:"18-09-2021",amount:10000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1006,date:"18-09-2021",amount:3000,payment_type:"cash"},
    {bill_number:1004,date:"18-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1007,date:"19-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1008,date:"19-09-2021",amount:6000,payment_type:"cash"},
]

//output as- {17-9-21:17000, 18-9-21:14000, 19-9-21:10000}
 var sales_report={}

 for (let bill of bill_details)
 {
       let bill_date=bill.date
       let bill_amount= bill.amount

       if (bill_date in sales_report) 
       {
           sales_report[bill_date]+=bill_amount
       }
       else
       {
           sales_report[bill_date]=bill_amount
       }

 }
 console.log(sales_report);
 


 //SORT WRT TO TOTSL COLLECTN
 //SORT W/R.T TO TEMP - WEATHER REPORT





   