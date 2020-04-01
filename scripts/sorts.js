//We only have to change background-color and height of the sorting element.

function Bubble(div_sizes,divs,cont,n)
{
    var array_size=n;
    var margin_size=0.1;

    for(var k=0;k<n-1;k++)
    {
        for(var i=0;i<n-k-1;i++)
        {
            if(div_sizes[i]>div_sizes[i+1])
            {
                divs[i].style=" margin:0% " + margin_size + "%; background-color:red; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
                divs[i+1].style=" margin:0% " + margin_size + "%; background-color:red; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i+1]) + "%;";
                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[i+1];
                div_sizes[i+1]=temp;
                divs[i].style=" margin:0% " + margin_size + "%; background-color:red; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
                divs[i+1].style=" margin:0% " + margin_size + "%; background-color:red; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i+1]) + "%;";
                divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
                divs[i+1].style=" margin:0% " + margin_size + "%; background-color:green; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i+1]) + "%;";
            }
            else
            {
                divs[i].style=" margin:0% " + margin_size + "%; background-color:green; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
                divs[i+1].style=" margin:0% " + margin_size + "%; background-color:green; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i+1]) + "%;";
            }
        }
    }
}