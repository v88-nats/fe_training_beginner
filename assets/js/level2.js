$(document).ready(function(){
    $("body")
        .on("change", "#select_number", appendImageByNumber)
        .on("click", ".delete_button", deleteImage);
});

/**
 * DOCU: Function for appending images with delete button as per selected option.
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
        let image_clone = $("#image_clone").clone();
            image_clone.removeAttr("id");
            image_clone.addClass("images");
        image_container.append(image_clone);
    }
}

/**
 * DOCU: Function for displaying the value of select tag.
 * Last Updated: December 11, 2023
 * @memberof module:Beginner_Activities
 * @author Nathaniel
 */
function updateSelectedOption(){
    let images = $(".images").length;
    $("#select_number").val(images);
}

/**
 * DOCU: Function for deleting images and updating the value of select tag.
 * Last Updated: December 11, 2023
 * @memberof module:Beginner_Activities
 * @author Nathaniel
 */
function deleteImage(){
    $(this).closest("li").remove();
    updateSelectedOption();
}