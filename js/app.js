'use strict';
let time=['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM',
'11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM']
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//Constructor Function
let allLocations=[];
function SalmonCookies(Location,minCust,maxCust,avgCookies)
{
    this.Location=Location;
    this.minCust=minCust;
    this.maxCust=maxCust;
    this.avgCookies=avgCookies;
    allLocations.push(this);
}

SalmonCookies.prototype.fillCustPerHou=function(){
    this.custPerHour=[];
    for (let index = 0; index < time.length; index++) {
        
        this.custPerHour.push(random(this.minCust,this.maxCust));
        
    }
}
SalmonCookies.prototype.fillAvgCookiesPerHour=function(){
    this.avgCookiesPerHour=[];
    for (let index = 0; index < time.length; index++) {
        
        this.avgCookiesPerHour.push(Math.floor(this.avgCookies*this.custPerHour[index]));
        
    }
}

//initializing location objects

 let Seattle=new SalmonCookies("Seattle",23,65,6.3);
 let Tokyo=new SalmonCookies("Tokyo",3,24,1.2);
 let Dubai=new SalmonCookies("Dubai",11,38,3.7);
 let Paris=new SalmonCookies("Paris",20,38,2.3);
 let Lima=new SalmonCookies("Lima",2,16,4.6);

 

 //filling avg arrays
 for (let index = 0; index < allLocations.length; index++){
   allLocations[index].fillCustPerHou();
   allLocations[index].fillAvgCookiesPerHour();

 }

 for (let index = 0; index < allLocations.length; index++){
    console.log(allLocations[index]);
  }
 
//*******DOM ******************************
let dailyLocation=0; //Daily Location Total


let table=document.getElementById("salmon");
let trh=document.createElement("tr");
table.appendChild(trh);
let th=document.createElement("th");
trh.appendChild(th);
th.textContent="Location";

function printall(){
    for (let i = 0; i < time.length; i++) {
        let th1=document.createElement("th");
        trh.appendChild(th1);
        th1.textContent=`${time[i]}`;
        
    }
    let lth=document.createElement("th");
    trh.appendChild(lth);
    lth.textContent="Daily Location Total";
    
    
    
    for (let j = 0; j <allLocations.length; j++) {
        let row=document.createElement("tr");
        table.appendChild(row);
        let locationName=document.createElement("td");
        row.appendChild(locationName);
        locationName.textContent=allLocations[j].Location;
        for (let x = 0; x <time.length; x++) {
            let inner=document.createElement("td");
            row.appendChild(inner);
            inner.textContent=allLocations[j].avgCookiesPerHour[x];
            
        }
       let daily=document.createElement("td");
       row.appendChild(daily);
       let sum=0;
       for (let i = 0; i < time.length; i++) 
       { 
        sum +=allLocations[j].avgCookiesPerHour[i];
    
       }
       dailyLocation+=sum;
       daily.textContent=sum;
       
    }
    
    //making totals row
    
    let lastrow=document.createElement("tr");
    table.appendChild(lastrow);
    let totals=document.createElement("td");
    lastrow.appendChild(totals);
    totals.textContent="Totals";
    for (let j = 0; j < time.length; j++) {
        let ttd=document.createElement("td");
        lastrow.appendChild(ttd);
        let sum=0;
        for (let i = 0; i < allLocations.length; i++) {
            sum+=allLocations[i].avgCookiesPerHour[j];
            
        }
        ttd.textContent=sum;
        
    }
    let ttd=document.createElement("td");
    lastrow.appendChild(ttd);
    ttd.textContent=dailyLocation;
    console.log(allLocations);
    
}
printall();
let button=document.getElementById('submit');
button.addEventListener('click',function(){
    let name=document.getElementById('Location').value;
    let min=document.getElementById('min').value;
    let max=document.getElementById('max').value;
    let avg=document.getElementById('avg').value;
    let x=new SalmonCookies(name,min,max,avg);
    x.fillCustPerHou();
    x.fillAvgCookiesPerHour();
    table.innerHTML = '';
   printall();
}
);
