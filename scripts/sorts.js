//We only have to change background-color and height of the sorting element.

function div_update(div,margin_size,width,height,color)
{
    div.style=" margin:0% " + margin_size + "%; background-color:" + color + "; width:" + width + "%; height:" + height + "%;";
}

function enable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_unselected");

        inp_as.disabled=false;
        butts_algos[i].disabled=false;
    }
}

function Bubble(div_sizes,divs,cont,n)
{
    console.log("Bubbling");
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
                window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"red");//Color update
                c_delay_time+=delay_time;
                window.setTimeout(div_update,c_delay_time,divs[i+1],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i+1]),"red");//Color update
                c_delay_time+=delay_time;

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[i+1];
                div_sizes[i+1]=temp;

                window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"red");//Height update
                c_delay_time+=delay_time;
                window.setTimeout(div_update,c_delay_time,divs[i+1],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i+1]),"red");//Height update
                c_delay_time+=delay_time;
                window.setTimeout(div_update,c_delay_time,divs[i+1],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i+1]),"yellow");//Color update
                c_delay_time+=delay_time;
            }
            else
            {
                window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"yellow");//Color update
                c_delay_time+=delay_time;
            }
            window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"blue");//Color update
            c_delay_time+=delay_time;
        }
        window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"green");//Color update
        c_delay_time+=delay_time;
    }
    window.setTimeout(div_update,c_delay_time,divs[0],margin_size,(100/array_size-(2*margin_size)),(div_sizes[0]),"green");//Color update
    c_delay_time+=delay_time;

    window.setTimeout(enable_buttons,c_delay_time);
}

function Selection_sort(div_sizes,divs,cont,n)
{
    var array_size=n;
    var margin_size=0.1;
    var factor=Math.floor(n/10);
    var delay_time=8/factor;        //Decrease numerator to increase speed.

    var c_delay_time=delay_time;

    for(var i=0;i<n-1;i++)
    {
        window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"red");//Color update
        c_delay_time+=delay_time;

        index_min=i;

        for(var j=i+1;j<n;j++)
        {
            window.setTimeout(div_update,c_delay_time,divs[j],margin_size,(100/array_size-(2*margin_size)),(div_sizes[j]),"yellow");//Color update
            c_delay_time+=delay_time;

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    window.setTimeout(div_update,c_delay_time,divs[index_min],margin_size,(100/array_size-(2*margin_size)),(div_sizes[index_min]),"blue");//Color update
                    c_delay_time+=delay_time;
                }
                index_min=j;
                window.setTimeout(div_update,c_delay_time,divs[index_min],margin_size,(100/array_size-(2*margin_size)),(div_sizes[index_min]),"red");//Color update
                c_delay_time+=delay_time;
            }
            else
            {
                window.setTimeout(div_update,c_delay_time,divs[j],margin_size,(100/array_size-(2*margin_size)),(div_sizes[j]),"blue");//Color update
                c_delay_time+=delay_time;
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            window.setTimeout(div_update,c_delay_time,divs[index_min],margin_size,(100/array_size-(2*margin_size)),(div_sizes[index_min]),"red");//Height update
            c_delay_time+=delay_time;
            window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"red");//Height update
            c_delay_time+=delay_time;
            window.setTimeout(div_update,c_delay_time,divs[index_min],margin_size,(100/array_size-(2*margin_size)),(div_sizes[index_min]),"blue");//Height update
            c_delay_time+=delay_time;
        }
        window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"green");//Height update
        c_delay_time+=delay_time;
    }
    window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"green");//Height update
    c_delay_time+=delay_time;

    window.setTimeout(enable_buttons,c_delay_time);
}

function Insertion(div_sizes,divs,cont,n)
{
    var array_size=n;
    var margin_size=0.1;
    var factor=Math.floor(n/10);
    var delay_time=8/factor;        //Decrease numerator to increase speed.

    var c_delay_time=delay_time;

    for(var j=0;j<n;j++)
    {
        window.setTimeout(div_update,c_delay_time,divs[j],margin_size,(100/array_size-(2*margin_size)),(div_sizes[j]),"yellow");//Color update
        c_delay_time+=delay_time;

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"red");//Color update
            c_delay_time+=delay_time;
            window.setTimeout(div_update,c_delay_time,divs[i+1],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i+1]),"red");//Color update
            c_delay_time+=delay_time;

            div_sizes[i+1]=div_sizes[i];

            window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"red");//Height update
            c_delay_time+=delay_time;
            window.setTimeout(div_update,c_delay_time,divs[i+1],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i+1]),"red");//Height update
            c_delay_time+=delay_time;

            window.setTimeout(div_update,c_delay_time,divs[i],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i]),"blue");//Color update
            c_delay_time+=delay_time;
            if(i==(j-1))
            {
                window.setTimeout(div_update,c_delay_time,divs[i+1],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i+1]),"yellow");//Color update
                c_delay_time+=delay_time;
            }
            else
            {
                window.setTimeout(div_update,c_delay_time,divs[i+1],margin_size,(100/array_size-(2*margin_size)),(div_sizes[i+1]),"blue");//Color update
                c_delay_time+=delay_time;
            }
            i-=1;
        }

        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            window.setTimeout(div_update,c_delay_time,divs[t],margin_size,(100/array_size-(2*margin_size)),(div_sizes[t]),"green");//Color update
            c_delay_time+=delay_time;
        }
    }

    window.setTimeout(div_update,c_delay_time,divs[j-1],margin_size,(100/array_size-(2*margin_size)),(div_sizes[j-1]),"green");//Color update
    c_delay_time+=delay_time;

    window.setTimeout(enable_buttons,c_delay_time);
}

function Merge(div_sizes,divs,cont,n)
{
    var array_size=n;
    var margin_size=0.1;
    var factor=Math.floor(n/10);
    var delay_time=8/factor;        //Decrease numerator to increase speed.

    var c_delay_time=delay_time;

    //sort logic

    window.setTimeout(enable_buttons,c_delay_time);
}