$(document).ready(function(){
    $("body").on("change", "#select_number", appendImageByNumber)      
});

/**
 * DOCU: Function for appending images as per selected option.
 * Last Updated: December 11, 2023
 * @memberof module:Beginner_Activities
 * @author Nathaniel
 */
function appendImageByNumber(){
    let select_number = $("#select_number").val();
    let image_container = $("#images_list");
    
    /* Clear previous images */
    image_container.empty();

    /* Append new images based on the selected option */
    for (let option = 0; option < select_number; option++) {
        let image_clone = $("#image_clone").clone().removeAttr("id");
        image_container.append(image_clone);
    }
};