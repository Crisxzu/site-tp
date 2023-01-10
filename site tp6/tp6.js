document.addEventListener("DOMContentLoaded", () =>
{
    var table = [];
    var i = 0;
    var result_div = document.getElementById("result");
    var f_increasing_order = true;

    function clearDiv(div)
    {
        if(div.childElementCount > 0)
        {
            while(div.firstChild)
            {
                div.removeChild(div.firstChild);
            }
        }
    }

    function onChangeOrderButtonClick(e)
    {
        f_increasing_order = !f_increasing_order;

        if(f_increasing_order == true)
        {
            var p = document.createElement("p");
            var change_order_button = document.createElement("button");

            clearDiv(result_div);
            change_order_button.innerHTML = "Change l'ordre";
            change_order_button.onclick = onChangeOrderButtonClick;
            p.innerHTML = "Tableau : ";

            for(var i_table = 0; i_table < table.length; i_table++)
                p.innerHTML += String(table[i_table]) + " ";
            
            result_div.appendChild(p);
            result_div.appendChild(change_order_button);
        }

        else
        {
            var p = document.createElement("p");
            var change_order_button = document.createElement("button");

            clearDiv(result_div);
            change_order_button.innerHTML = "Change l'ordre";
            change_order_button.onclick = onChangeOrderButtonClick;
            p.innerHTML = "Tableau : ";

            for(var i_table = table.length-1; i_table >= 0; i_table--)
                p.innerHTML += String(table[i_table]) + " ";
            
            result_div.appendChild(p);
            result_div.appendChild(change_order_button);
        }
    }

    function onConfirmButtonClick(e)
    {
        var user_nb = document.getElementById("user_nb_entry").value;
        var p = document.createElement("p");

        clearDiv(result_div);

        if(user_nb.length == 0)
        {
            p.innerHTML = "Erreur, votre entrée est vide";
        }

        else
        {
            var change_order_button = document.createElement("button");
            
            change_order_button.innerHTML = "Change l'ordre";
            change_order_button.onclick = onChangeOrderButtonClick;
            table[i] = user_nb;
            i++;
            p.innerHTML = "Tableau : ";

            for(var i_table = 0; i_table < table.length; i_table++)
                p.innerHTML += String(table[i_table]) + " ";
        }

        result_div.appendChild(p);
        result_div.appendChild(change_order_button);
        
    }

    document.getElementById("b_confirm").onclick = onConfirmButtonClick;
});