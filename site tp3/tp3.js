document.addEventListener("DOMContentLoaded", () =>
{
    function calcFibonnacciSuite(user_nb)
    {
        if(user_nb == 0)
        {
            return 1;
        }

        else if(user_nb == 1)
        {
            return 1;
        }

        else
        {
            var n_plus_one = 2;
            var u_n_minus_one = 1;
            var u_n = 1;
            var u_n_plus_one = u_n + u_n_minus_one;


            while(n_plus_one != user_nb)
            {
                u_n_minus_one = u_n
                u_n = u_n_plus_one;

                u_n_plus_one = u_n + u_n_minus_one
                n_plus_one += 1;
            }
            
            return u_n_plus_one;
        }
    }
    
    function clearDiv(div)
    {
        while(div.firstChild)
        {
            div.removeChild(div.firstChild);
        }
    }

    function onConfirmButtonClick(e)
    {
        var user_nb = document.getElementById("user_nb_entry").value;
        var result_div = document.getElementById("result");

        if(result_div.childElementCount > 0)
        {
            clearDiv(result_div)
        }

        if(user_nb < 0)
        {    
            var p = document.createElement("p");
            p.innerHTML = "Erreur, vous devez entrer un nombre positif !";
            result_div.appendChild(p)
        }

        else
        {
            var result = calcFibonnacciSuite(user_nb)
            
            var p = document.createElement("p");
            p.innerHTML = `Résultat: ${result}`;
            result_div.appendChild(p)
        }
    }
    
    document.getElementById("b_confirm").onclick = onConfirmButtonClick;
});