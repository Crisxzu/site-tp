document.addEventListener("DOMContentLoaded", () =>
{
	function getNbSuiteStr()
	{
		var user_nb=document.getElementById("nb_choice").value;
		var nb_suite_str=new String();
		console.log(user_nb);
		console.log("Je");
		if(user_nb<0)
		{
			var i=user_nb;

			for(; i<-1; i++)
			{
				nb_suite_str+=i.toString()+"->";
			}

			nb_suite_str+=i.toString();
		}

		else if(user_nb>0)
		{
			var i=user_nb;

			for(; i>1; i--)
			{
				nb_suite_str+=i.toString()+"->";
			}

			nb_suite_str+=i.toString();	
		}

		return nb_suite_str;
	}

	function onButtonCalcClick(e)
	{
		var nb_suite_str=getNbSuiteStr();

		if(nb_suite_str.length!=0)
		{
			var result_div=document.getElementById("result");

			if(result_div.childElementCount>0)
			{
				while(result_div.firstChild)
				{
					result_div.removeChild(result_div.firstChild);
				}
			}

			var p=document.createElement("p");
			p.innerHTML=`Réponse: ${nb_suite_str}`;
			result_div.appendChild(p);
		}
	}

	document.getElementById("b_calc").onclick=onButtonCalcClick;
});