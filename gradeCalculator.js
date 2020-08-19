const calcy=()=>{
    let wd=document.getElementById('wd').value;
    let maths=document.getElementById('maths').value;
    let comp=document.getElementById('computer').value;
    let phy=document.getElementById('phy').value;
    let total=parseFloat(wd)+parseFloat(maths)+parseFloat(comp)+parseFloat(phy);
    let perc=(total/400)*100;
    if(perc>90){
        grades='A'
    }
    else if(perc>=80 && perc<90){
        grades='B'
    }
    else if(perc>=70 && perc<80){
        grades='C'
    }
    else if(perc>=60 && perc<70){
        grades='E'
    }
    else{
        grades='F'
    }
    if(perc>39.5){
        document.getElementById('showData').innerHTML=`Out Off 400 Your Total is ${total} and Percentage is ${perc}%. <br> And Your Grade is ${grades}. you are passed`;
    }else{
        document.getElementById('showData').innerHTML=`Out Off 400 Your Total is ${total} and Percentage is ${perc}%. <br> And Your Grade is ${grades}.you are fail`;
    }
    
}