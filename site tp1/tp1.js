document.addEventListener("DOMContentLoaded", () =>
{
	function calcSquare(sideLen, sideType)
	{
		switch(sideType)
		{
			case "Carré":
				return sideLen*sideLen;	
				break;

			case "Triangle équilatéral":
				return (sideLen[0]*sideLen[1])/2;
				break;

			case "Cercle":
				return 3.14*(sideLen*sideLen);
				break;

			default:
				return 0;
		}
	}

	function buttonCalcOnClick(e)
	{
		switch(document.getElementById("figure_choice").value)
		{
			case "square":
				var sideLen=document.getElementById("side_value_input").getAttribute("value");
				var result=calcSquare(sideLen, "Carré");

				break;

			case "triangle":
				var sideLen=[];
				sideLen[0]=document.getElementById("base_value_input").getAttribute("value");
				sideLen[1]=document.getElementById("height_value_input").getAttribute("value");
				var result=calcSquare(sideLen, "Triangle équilatéral");
				break;

			case "circle":
				var sideLen=document.getElementById("radius_value_input").getAttribute("value");
				var result=calcSquare(sideLen, "Cercle");
				break;
		}

		if(document.getElementById("calc_result")!=null)
		{
			document.removeChild(document.getElementById("calc_result"));
		}

		var calc_result=document.createElement("p");

		calc_result.id="calc_result";
		calc_result.innerHTML=`Réponse: ${result} cm²`;

		document.getElementById("figure_data").appendChild(calc_result);
	}

	function initFigureDataDiv(figure_type)
	{
		figure_data_div=document.getElementById("figure_data");

		console.log(figure_type);
		console.log(figure_data_div.childElementCount);

		if(figure_data_div.childElementCount>0)
		{
			while(figure_data_div.firstChild)
			{
				figure_data_div.removeChild(figure_data_div.firstChild);
			}
		}

		switch(figure_type)
		{
			case "square":
				var label=document.createElement("label");
				var side_value_input=document.createElement("input");
				var input_div=document.createElement("div");
				var b_calc=document.createElement("button");

				label.setAttribute("for", "side_value_input");
				label.innerHTML="Longueur de chaque côté(en cm)";

				side_value_input.id="side_value_input";
				side_value_input.setAttribute("type", "number");
				side_value_input.setAttribute("value", "10");				

				b_calc.id="b_calc";
				b_calc.setAttribute("type", "button");
				b_calc.innerHTML="Calcule l'aire !";
				b_calc.onclick=buttonCalcOnClick;

				input_div.appendChild(label);
				input_div.appendChild(side_value_input);
				figure_data_div.appendChild(input_div);
				figure_data_div.appendChild(b_calc);
				break;

			case "triangle":				
				var input_div=[];
				var base_input_label=document.createElement("label");
				var height_input_label=document.createElement("label");
				input_div[0]=document.createElement("div");
				var base_value_input=document.createElement("input");
				var height_value_input=document.createElement("input");
				input_div[1]=document.createElement("div");
				var b_calc=document.createElement("button");

				base_input_label.setAttribute("for", "base_value_input");
				base_input_label.innerHTML="Longueur de la base(en cm)";

				height_input_label.setAttribute("for", "height_value_input");
				height_input_label.innerHTML="Longueur de la hauteur(en cm)";				

				base_value_input.id="base_value_input";
				base_value_input.setAttribute("type", "number");
				base_value_input.setAttribute("value", "10");				

				height_value_input.id="height_value_input";
				height_value_input.setAttribute("type", "number");
				height_value_input.setAttribute("value", "10");

				b_calc.id="b_calc";
				b_calc.setAttribute("type", "button");
				b_calc.innerHTML="Calcule l'aire !";
				b_calc.onclick=buttonCalcOnClick;

				input_div[0].appendChild(base_input_label);
				input_div[0].appendChild(base_value_input);
				input_div[1].appendChild(height_input_label);				
				input_div[1].appendChild(height_value_input);
				figure_data_div.appendChild(input_div[0]);
				figure_data_div.appendChild(input_div[1]);
				figure_data_div.appendChild(b_calc);
				break;

			case "circle":
				var label=document.createElement("label");
				var radius_value_input=document.createElement("input");
				var input_div=document.createElement("div");
				var b_calc=document.createElement("button");

				label.setAttribute("for", "radius_value_input");
				label.innerHTML="Longueur du rayon(en cm)";

				radius_value_input.id="radius_value_input";
				radius_value_input.setAttribute("type", "number");
				radius_value_input.setAttribute("value", "10");				

				b_calc.id="b_calc";
				b_calc.setAttribute("type", "button");
				b_calc.innerHTML="Calcule l'aire !";
				b_calc.onclick=buttonCalcOnClick;

				input_div.appendChild(label);
				input_div.appendChild(radius_value_input);
				figure_data_div.appendChild(input_div);
				figure_data_div.appendChild(b_calc);
				break;
		}		
	}

	function figureChoiceOnInput(e)
	{
		initFigureDataDiv(e.target.value);
	}

	document.getElementById("figure_choice").oninput=figureChoiceOnInput;
});