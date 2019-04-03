// blocks of the page

let wrap = document.querySelector(".wrap");
let header = document.querySelector(".header-wrap");
let main = document.querySelector(".main-wrap");
let footer = document.querySelector(".footer-wrap");

let blocks_arr = [wrap, header, main, footer];

// elements of the page

let sec_title = document.querySelector("#sec_title");
let title = document.querySelector("#title");
let sub_title = document.querySelector("#sub_title");
let sec_button = document.querySelector("#sec_button");

let elem_arr = [sec_title, title, sub_title, sec_button];

// popup elements

let popup = document.querySelector(".popup-wrap");
let tabs = document.querySelector("#tabs");
let color_schemes = document.querySelectorAll("#color-scheme input");

let cancel = document.querySelector("#cancel");
let save = document.querySelector("#save");


// popup events

tabs.addEventListener("change", function(e) {

    let val = e.target.value;

        val = "#" + val;

    let tabs = document.querySelectorAll(".popup-content__tabcontent");
    
    tabs.forEach(function(element) {
        element.classList.add("hidden");
    });

    let activetab = document.querySelector(val);
        activetab.classList.remove("hidden");

});

save.addEventListener("click", function() {

    // Style options

    let color = document.querySelector("#color-scheme input:checked");
    
    blocks_arr.forEach(function(element) {

        if (element.classList.contains(color.value)) {
            return true;

        } else {

            color_schemes.forEach(function(elem){

                if (elem.value != color.value) {
                    element.classList.remove(elem.value);
                } 
            });
            
            element.classList.add(color.value);
        }

    });

    // Layout options

    let layout_options = document.querySelectorAll("#layout-options input:checked");
    var visible_arr = [];

});


cancel.addEventListener("click", function() {

    popup.classList.add("hidden");

});





