	function myFunction() {
if (document.getElementById('patient').checked) {
  abonnes = document.getElementById('patient').value;
}
if (document.getElementById('docteur').checked) {
  abonnes = document.getElementById('docteur').value;
}

var mysql = require('mysql');

  var nom=document.getElementById("nom").value;
var prenom=document.getElementById("prenom").value;
var date=document.getElementById("date").value;
var adresse=document.getElementById("adresse").value;
var ville=document.getElementById("ville").value;
var code=document.getElementById("code").value;
var email=document.getElementById("email").value;
var telephone=document.getElementById("telephone").value;
var mdp=document.getElementById("mdp").value;
var insert_query ="INSERT INTO "+abonnes.toString()+ " (`Nom`, `Prénom`,`Date de naissance`,`Adresse`,`Ville`,`Code Postal`,`Email`,`Telephone`,`password` ) VALUES ('"+nom.toString()+"','"+prenom.toString()+"','"+date.toString()+"','"+adresse.toString()+"','"+ville.toString()+"','"+code.toString()+"','"+email.toString()+"','"+telephone.toString()+"','"+mdp.toString()+"');";
	document.write(insert_query);
	document.write(abonnes);


	}
