'use strict';
let time=['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM',
'11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM']
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

let seattle={
    location:"Seattle",
    minCust:23,
    maxCust:65,
    avgCookiesCust:6.3,
    custPerHour:[],
    avgCookiesPerHour:[],
    fillCustPerHour:function(){
        for(let i=0;i<time.length;i++)
        {
        this.custPerHour.push(random(this.minCust,this.maxCust));   
        }
    },
    fillAvgCookiesPerHour:function(){
        for(let i=0;i<time.length;i++)
        {
            this.avgCookiesPerHour.push(Math.floor(this.custPerHour[i]*this.avgCookiesCust));
        }
    }
    
    
};
let tokyo={
    location:"Tokyo",
    minCust:3,
    maxCust:24,
    avgCookiesCust:1.2,
    custPerHour:[],
    avgCookiesPerHour:[],
    fillCustPerHour:function(){
        for(let i=0;i<time.length;i++)
        {
        this.custPerHour.push(random(this.minCust,this.maxCust));   
        }
    },
    fillAvgCookiesPerHour:function(){
        for(let i=0;i<time.length;i++)
        {
            this.avgCookiesPerHour.push(Math.floor(this.custPerHour[i]*this.avgCookiesCust));
        }
    }
    
    
};
let dubai={
    location:"Dubai",
    minCust:11,
    maxCust:38,
    avgCookiesCust:3.7,
    custPerHour:[],
    avgCookiesPerHour:[],
    fillCustPerHour:function(){
        for(let i=0;i<time.length;i++)
        {
        this.custPerHour.push(random(this.minCust,this.maxCust));   
        }
    },
    fillAvgCookiesPerHour:function(){
        for(let i=0;i<time.length;i++)
        {
            this.avgCookiesPerHour.push(Math.floor(this.custPerHour[i]*this.avgCookiesCust));
        }
    }
    
    
};
let paris={
    location:"Paris",
    minCust:20,
    maxCust:38,
    avgCookiesCust:2.3,
    custPerHour:[],
    avgCookiesPerHour:[],
    fillCustPerHour:function(){
        for(let i=0;i<time.length;i++)
        {
        this.custPerHour.push(random(this.minCust,this.maxCust));   
        }
    },
    fillAvgCookiesPerHour:function(){
        for(let i=0;i<time.length;i++)
        {
            this.avgCookiesPerHour.push(Math.floor(this.custPerHour[i]*this.avgCookiesCust));
        }
    }
    
    
};
let lima={
    location:"Lima",
    minCust:2,
    maxCust:16,
    avgCookiesCust:4.6,
    custPerHour:[],
    avgCookiesPerHour:[],
    fillCustPerHour:function(){
        for(let i=0;i<time.length;i++)
        {
        this.custPerHour.push(random(this.minCust,this.maxCust));   
        }
    },
    fillAvgCookiesPerHour:function(){
        for(let i=0;i<time.length;i++)
        {
            this.avgCookiesPerHour.push(Math.floor(this.custPerHour[i]*this.avgCookiesCust));
        }
    }
    
    
};



let allLocation=[seattle,tokyo,dubai,paris,lima];
for(let x=0;x<allLocation.length;x++)
{
    allLocation[x].fillCustPerHour();
    allLocation[x].fillAvgCookiesPerHour();

}
/*displaying above info in sales.html as ul using dom*/
console.log(seattle);
let mainDiv=document.getElementById("salmon");

for(let i=0;i<allLocation.length;i++){
    let h=document.createElement("h1");
    mainDiv.appendChild(h);
    h.textContent=allLocation[i].location;
    let ul=document.createElement("ul");
    mainDiv.appendChild(ul);
    for(let j=0;j<time.length;j++)
    {
        let li=document.createElement("li");
        ul.appendChild(li);
        li.textContent=time[j]+": "+allLocation[i].avgCookiesPerHour[j];
    }
}
