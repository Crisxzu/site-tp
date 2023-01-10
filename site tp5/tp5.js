document.addEventListener("DOMContentLoaded", () =>
{
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
    
    function onConfirmButtonClick(e)
    {
        var user_nb = document.getElementById("user_nb_entry").value;
        var result_div = document.getElementById("result");
        
        clearDiv(result_div)

        if(user_nb <= 0)
        {
            var p = document.createElement("p");

            p.innerHTML = "Erreur, vous devez entrer un nombre strictement positif";
            result_div.appendChild(p)
        }

        else
        {
            var table = [];
            var p = document.createElement("p");

            for(var i = 0; i < user_nb; i++)
                table[i]= i+1;

            p.innerHTML = "Tableau d'entiers : ";

            for(var i = 0; i < table.length; i++)
                p.innerHTML += String(table[i]) + " ";
            
            result_div.appendChild(p);
        }
    }
    
    document.getElementById("b_confirm").onclick = onConfirmButtonClick;
});