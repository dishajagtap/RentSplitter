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