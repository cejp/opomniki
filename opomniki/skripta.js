window.addEventListener('load', function() {
	//stran nalozena
	
	
	//Dodaj Opomink
	var preberiOpominke = function(event){
		var naziv_opomnika = document.querySelector("#naziv_opomnika").value;
		var cas_opomnika = document.querySelector("#cas_opomnika").value;
		document.querySelector("#naziv_opomnika").value="";
		document.querySelector("#cas_opomnika").value="";
		document.querySelector("#opomniki").innerHTML+=" \
		<div class='opomnik rob senca'> \
            <div class='naziv_opomnika'>"+naziv_opomnika+"</div> \
            <div class='cas_opomnika'> Opomnik čez <span>"+cas_opomnika+"</span> sekund.</div> \
        </div>";
	}
	document.querySelector("#dodajGumb").addEventListener('click',preberiOpominke);
		
	//Koda za prijavo
	var izvediPrijavo = function(event){
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility="hidden";
	}
	document.querySelector("#prijavniGumb").addEventListener('click',izvediPrijavo);
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		var i;
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			if(cas==0){
				var naziv_opomnika = opomnik.querySelector(".naziv_opomnika").innerHTML;
				alert("Opomnik\n\nZadolžitev '"+naziv_opomnika+"' je potekal!");
				document.querySelector("#opomniki").removeChild(opomnik);
			}else{
				casovnik.innerHTML = cas-1;
			}
			
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});