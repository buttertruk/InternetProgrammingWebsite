//Kyle Butterworth
//CS4720
//Assignment 2

var visible_boxes = 1;
var total_boxes = 1;
var elements = [];
var lengths = [];
var entry = document.getElementById("entry");

//function that creates a row in the table and adds it
function addCell(){
    var next_line = visible_boxes + 1;
    var row = document.createElement("tr");

    var line1 = document.createElement("TH");
    var line1_value = document.createTextNode(next_line);
    line1.appendChild(line1_value);
    row.appendChild(line1);

    var line2 = document.createElement("TD");
    var line2_value = document.createTextNode(elements[visible_boxes]);
    var input = document.createElement("INPUT");
    input.setAttribute("id", next_line.toString());
    input.setAttribute("oninput", "cell_change()");
    line2.appendChild(input);

    var line3 = document.createElement("TH");
    var line3_value = document.createTextNode(lengths[visible_boxes]);
    line3.setAttribute("id", next_line.toString() + "Len");

    // add a previously visible row
    if (visible_boxes < total_boxes){
        row.appendChild(line2);
        line2.appendChild(line2_value);
        line3.appendChild(line3_value);
        row.appendChild(line3);
        visible_boxes++;
    }
    else { // add a completely new row
        row.appendChild(line2);
        line3.appendChild(document.createTextNode("0"));
        row.appendChild(line3);
        visible_boxes++;
        total_boxes++;
    }
    entry.appendChild(row);
}

// removes a cell
function removeCell(){
    if (visible_boxes > 1) {
        entry.deleteRow(visible_boxes);
        visible_boxes--;
    }
}

//function to sort the cells
function sort(){
    for (i = 0; i <= visible_boxes -2; i++){
        var temp_len, temp_ele;
        for (j = 1; j <= visible_boxes -1; j++){
            if (lengths[i] < lengths[j]){
                temp_len = lengths[i];
                temp_ele = elements[i];
                lengths[i] = lengths[j];
                elements[i] = elements[j];
                lengths[j] = temp_len;
                lengths[j] = temp_ele;
            }
        }
    }
    for (k = 0; k <= visible_boxes - 1; k++){
        //reprint the values in the correct places
    }
}

//oninput function to change the cell lengths
function cell_change(){
    var valueId = event.target.id;
    var value = event.target.value;
    var len = value.length;

    document.getElementById(valueId + "Len").innerHTML = len;
    elements[parseInt(valueId) - 1] = value;
    lengths[parseInt(valueId) - 1] = len;
}