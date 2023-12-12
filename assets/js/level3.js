$(document).ready(function(){
    $("body")
        .on("change", "#multiplication_form", generateMultiplicationTable)
       
});

function generateMultiplicationTable() {
    let multiplier = $("#select_number").val();
    let table = $("#multiplication_table");
    table.empty();

    for (let option = 1; option <= 10; option++) {
        let table_row = $("<tr></tr>");

        for(let option2 = 1; option2 <= multiplier; option2++){
            table_row.append("<td>" + option * option2 + "</td>");
        }
        table.append(table_row);
    }
}
