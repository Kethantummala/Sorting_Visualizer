/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    E-MAIL:-    tummala.kethan@gmail.com
    *****************
*/

//We only have to change background-color and height of the sorting element.

var delay_time=8/Math.floor(array_size/10);        //Decrease numerator to increase speed.
var c_delay;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            inp_as.disabled=false;
            butts_algos[i].disabled=false;
        }
    },c_delay+=delay_time);
}

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    E-MAIL:-    tummala.kethan@gmail.com
    *****************
*/