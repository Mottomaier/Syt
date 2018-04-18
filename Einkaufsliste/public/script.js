	

//button function
function onClick(){
	//variable für den Text
	var name = document.getElementById("name");
	//variable für den Button
	var button = document.getElementById("button");
	//variable zum root Objekt der Datenbank
	var firebaseRef = firebase.database().ref();
	//variable für das text value
	var messageText = name.value;
	//push da man mit .child immer sein vorher erstelltes überschreibt
	//erstellt einen neuen Datensatz mit einer random id und dem Text 
	firebaseRef.push().set(messageText);
}