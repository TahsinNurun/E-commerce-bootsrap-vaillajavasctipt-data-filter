
var proImg = document.querySelectorAll(".pro");
// console.log(proImg);

proImg.forEach((item, index) => {
    item.addEventListener("click", () => {
        var img = document.getElementsByClassName('pro')[`${index}`];
        console.log(img);
        img.classList.add("product");
        var back = document.getElementsByClassName('back')[`${index}`];
        console.log(back);
        back.classList.add("background");
    })
});


// sorting code

function sortBy(value) {

    if (value == "female" || value == "male") {
        var allProducts = document.querySelectorAll(".male,.female");
        for (i = 0; i < allProducts.length; i++) {
            allProducts[i].classList.remove("d-none");
        }
        var products = document.querySelectorAll("." + value);
        for (i = 0; i < products.length; i++) {
            products[i].classList.add("d-none");
        }
    } else if (value == "both") {
        var products = document.querySelectorAll(".male,.female");
        for (i = 0; i < products.length; i++) {
            products[i].classList.remove("d-none");
        }
    }

    // switch (selectedValue) {
    //     case "male":
    //         var femaleProducts = document.querySelectorAll(".female");
    //         for (i = 0; i < femaleProducts.length; i++) {
    //             femaleProducts[i].classList.add("d-none");
    //         };
    //         break;
    //     case "female":
    //         var maleProducts = document.querySelectorAll(".male");
    //         for (i = 0; i < maleProducts.length; i++) {
    //             maleProducts[i].classList.add("d-none");
    //         };
    //         break;
    //     case "both":
    //         var maleProducts = document.querySelectorAll(".male,.female");
    //         for (i = 0; i < maleProducts.length; i++) {
    //             maleProducts[i].classList.add("d-block");
    //         };
    //         break;
    // }

}
// initially loading products list

window.addEventListener('DOMContentLoaded', () => {
    var allProducts = document.querySelectorAll(".male,.female");
    for (i = 0; i < 18; i++) {
        allProducts[i].classList.remove("d-none");
    }
});


// load product based on dropdown

function loadProduct(value) {

    var allProducts = document.querySelectorAll(".male,.female");   
    for (i = 0; i < allProducts.length; i++) {
        allProducts[i].classList.add("d-none"); 
    }

    for (i = 0; i < value; i++) {
        allProducts[i].classList.remove("d-none");
    }
    
}

// New/sale filter code

function filter() {
    var checkedValue = document.querySelector('.form-check-input:checked').value;
    console.log(checkedValue);
}


var itemsToFilter = document.querySelectorAll(".male,.female");
// console.log(itemsToFilter);
var checkBoxes = document.querySelectorAll(".form-check-input");
// console.log(checkBoxes);

checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("click", () => {
        showFilteredContent(checkBox);
    })
});

function showFilteredContent(checkBox) {
    // itemsToFilter.forEach((item) =>{
    //     item.classList.add("d-none");
    // });
    var allProducts = document.querySelectorAll(".male,.female");   
    for (i = 0; i < allProducts.length; i++) {
        allProducts[i].classList.add("d-none"); 
    }

    itemsToFilter.forEach((item) => {
        if (item.classList.contains(checkBox.id)) {
            console.log(checkBox.id);
            item.classList.remove("d-none");
        }
    });
};



// uncheck checboxes

var checkedInput = document.querySelector("#reset-btn");
checkedInput.addEventListener("click", () => {
    var inputs = document.querySelectorAll('.form-check-input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    };
    var allProducts = document.querySelectorAll(".male,.female");
    for (i = 0; i < allProducts.length; i++) {
        allProducts[i].classList.add("d-none");
    }
})

// function filterItems(e) {

//     var clickedItem = e.target;
//     if (clickedItem.value == true) {
//         hideOrShowItems(clickedItem.value, "hideItem", "showItem")
//     } else if (clickedItem.value == false) {
//         hideOrShowItems(clickedItem.value, "showItem", "hideItem");       
//     } else { }
// }

// function hideOrShowItems(itemType, classToRemove, classToAdd) {
//     for (var i = 0; i < itemsToFilter.length; i++) {
//         var currentItem = itemsToFilter[i];
//         if (currentItem.getAttribute("data-type") == itemType) {
//             removeClass(currentItem, classToRemove);
//             addClass(currentItem, classToAdd);
//         }
//     }
// }

// function addClass(element, classToAdd) {
//     var currentClassValue = element.className;

//     if (currentClassValue.indexOf(classToAdd) == -1) {
//         if ((currentClassValue == null) || (currentClassValue == "")) {
//             element.className = classToAdd;
//         } else {
//             element.className += " " + classToAdd;
//         }
//     }
// }

// function removeClass(element, classToRemove) {
//     var currentClassValue = element.className;
//     if (currentClassValue == classToRemove) {
//         element.className = " ";
//         return;
//     }

//     var classValues = currentClassValue.split(" ");
//     var filterList = [];

//     for (var i = 0; i < classValues.length; i++) {
//         if (classToRemove != classValues[i]) {
//             filterList.push(classValue[i]);
//         }
//     }
//     element.className = filterList.join(" ");
// }