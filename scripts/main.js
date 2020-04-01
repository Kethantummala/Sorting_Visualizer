/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

var inp_as=document.getElementById('a_size');
var array_size=inp_as.value;

var butts_algos=document.getElementsByTagName('button');

inp_as.addEventListener("input",update_array_size);

for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function update_array_size()
{
    array_size=inp_as.value;
    document.getElementById("msg").innerHTML=array_size;
}

function runalgo()
{
    console.log(this.innerHTML);
    switch(this.innerHTML)
    {
        case "Bubble":this.attributes['background-color:white;']
                        alert("Running Bubble Sort!");
                        break;
        case "Selection":alert("Running Selection Sort!");
                        break;
        case "Insertion":alert("Running Insertion Sort!");
                        break;
        case "Merge":alert("Running Merge Sort!");
                        break;
        case "Quick":alert("Running Quick Sort!");
                        break;
        case "Heap":alert("Running Heap Sort!");
                        break;
        case "Bucket":alert("Running Bucket Sort!");
                        break;
    }
}