document.addEventListener("DOMContentLoaded", () =>
{
    function clearDiv(div)
    {
        while(div.firstChild)
        {
            div.removeChild(div.firstChild);
        }
    }
    
    function calcFunction(x)
    {
        return ((x ** 3) + 2 * (x ** 2) + 10 * x - 20)
    }

    function onConfirmButtonClick(e)
    {
        var a = document.getElementById("interval_begin_entry").value;
        var b = document.getElementById("interval_end_entry").value;
        var result_div = document.getElementById("result");
       
        if(result_div.childElementCount > 0)
        {
            clearDiv(result_div);
        }
        
        if( a >= b && (calcFunction(a)*calcFunction(b)) > 0)
        {
            var p = document.createElement("p");
            
            p.innerHTML = "Erreur, veuillez vérifier les valeurs de a et b (a =/= b et a < b et f(a)*f(b) < 0)";
            result_div.appendChild(p);
        }

        else
        {
            var m = (a + b)/2
            var p = document.createElement("p");

            if(calcFunction(a) * calcFunction(m) < 0)
            {
                p.innerHTML = `f(a) = ${calcFunction(a)} ; f(b) = ${calcFunction(b)}\n x se trouve dans l'intervalle [${a}, ${m}]`
            }

            else if(calcFunction(b) * calcFunction(m) < 0)
            {
                p.innerHTML = `f(a) = ${calcFunction(a)} ; f(b) = ${calcFunction(b)}\n x se trouve dans l'intervalle [${m}, ${b}]`
            }

            result_div.appendChild(p);
        }
    }


    document.getElementById("b_confirm").onclick = onConfirmButtonClick;
});