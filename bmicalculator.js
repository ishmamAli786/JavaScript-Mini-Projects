
function getBmiValue(){
    var weight=document.getElementById('Weight').value;
    var height=document.getElementById('Height').value;
    height =height *12;
    height=height * 0.025;  // now height in meter
    var value=weight/(height*height);
   var value1= Math.round(value);
    document.getElementById('bmivalue').value=value1;
}