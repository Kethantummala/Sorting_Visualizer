/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

var inp_as=document.getElementById('a_size');
var array_size=inp_as.value;

var butts_algos=document.getElementsByTagName('button');

var div_sizes=[];
var divs=[];
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";




inp_as.addEventListener("input",update_array_size);
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}



function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        var margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

function runalgo()
{
    console.log(this.innerHTML);
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].className.replace("butt_selected","");
        butts_algos[i].className.replace("  "," ");
    }
    this.className+=" butt_selected";
    switch(this.innerHTML)
    {
        case "Bubble":Bubble(div_sizes,divs,cont,array_size);
                        break;
        case "Selection":Selection_sort(div_sizes,divs,cont,array_size);
                        break;
        case "Insertion":Insertion(div_sizes,divs,cont,array_size);
                        break;
        case "Merge":Merge(div_sizes,divs,cont,array_size);
                        break;
        case "Quick":Quick(div_sizes,divs,cont,array_size);
                        break;
        case "Heap":Heap(div_sizes,divs,cont,array_size);
                        break;
        case "Bucket":Bucket(div_sizes,divs,cont,array_size);
                        break;
    }
}

window.onload=update_array_size();