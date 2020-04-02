//We only have to change background-color and height of the sorting element.

function div_update(div,margin_size,width,height,color)
{
    div.style=" margin:0% " + margin_size + "%; background-color:" + color + "; width:" + width + "%; height:" + height + "%;";
}

function Bubble(div_sizes,divs,cont,n)
{
    var array_size=n;
    var margin_size=0.1;
    var factor=Math.floor(n/10);
    var delay_time=8/factor;        //Decrease numerator to increase speed.

    var c_delay_time=delay_time;

    for(var k=0;k<n-1;k++)
    {
        for(var i=0;i<n-k-1;i++)
        {

            if(div_sizes[i]>div_sizes[i+1])
            {
                window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"red");
                c_delay_time+=delay_time;
                window.setTimeout(div_update,c_delay_time,divs[i+1],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i+1]),"red");
                c_delay_time+=delay_time;

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[i+1];
                div_sizes[i+1]=temp;

                window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"red");
                c_delay_time+=delay_time;
                window.setTimeout(div_update,c_delay_time,divs[i+1],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i+1]),"red");
                c_delay_time+=delay_time;
                window.setTimeout(div_update,c_delay_time,divs[i+1],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i+1]),"yellow");
                c_delay_time+=delay_time;
            }
            else
            {
                window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"yellow");
                c_delay_time+=delay_time;
            }
            window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"blue");
            c_delay_time+=delay_time;
        }
        window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"green");
        c_delay_time+=delay_time;
    }
    window.setTimeout(div_update,c_delay_time,divs[0],margin_size,(100/array_size-(2*margin_size)),(div_sizes[0]),"green");
    c_delay_time+=delay_time;
}