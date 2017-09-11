function optionSelected(id){
    hideAllContent();
    dropdownMenu(id);
}

function dropdownMenu(id){
    var c = document.getElementById(id);
    var b = document.getElementById("housing-btn");
    b.innerHTML = id;
    
    var contentElement = document.getElementById(id+"Content");
    contentElement.style.display = 'block';    
}

function hideAllContent(){
    var id_list = ["Ambrose","Berkeley","Columbia","Cornell","Dartmouth","Harvard","Stanford"];
    for (i = 0; i < id_list.length; i++){
        document.getElementById(id_list[i]+"Content").style.display = 'none';
    }
}

function calculateStudioRent(){
    var p = parseInt(document.getElementById("numberOfPersons").value);
    var r = parseInt(document.getElementById("rentAmount").value);
    
    document.getElementById("result").value = r/p;   
}

function calculuateOneRent(sqft,bed1,common){
    
}

function studioModalFill(label){
    var m = document.getElementById("studioModalTitle");
    m.innerHTML = label;
}

function oneModalFill(label){
    var m = document.getElementById("oneModalTitle");
    m.innerHTML = label;
}

function twotwoModalFill(label){
    var m = document.getElementById("twotwoModalTitle");
    m.innerHTML = label;
}