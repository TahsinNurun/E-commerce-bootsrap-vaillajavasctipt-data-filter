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

function sortBy() {

    
    var select = document.getElementById("sort-by");
    console.log(select);
    var selectedValue = select.value;

    // var allProducts = document.querySelectorAll(".male,.female");
    // console.log(allProducts);

    // if( selectedValue === "male"){

    //     var femaleProducts = document.querySelectorAll(".female");
    //     for(i=0; i<femaleProducts.length; i++){
    //         femaleProducts[i].classList.add("d-none");          
    //     }

    // }else if(selectedValue === "female"){
    //     var maleProducts = document.querySelectorAll(".male");
    //     for(i=0; i<maleProducts.length; i++){
    //         maleProducts[i].classList.add("d-none");          
    //     }
    // }

    switch (selectedValue) {
        case "male":
            var femaleProducts = document.querySelectorAll(".female");
            for (i = 0; i < femaleProducts.length; i++) {
                femaleProducts[i].classList.add("d-none");
            };
            break;
        case "female":
            var maleProducts = document.querySelectorAll(".male");
            for (i = 0; i < maleProducts.length; i++) {
                maleProducts[i].classList.add("d-none");
            };
            break;
    }

}
// initially loading products list

window.addEventListener('DOMContentLoaded', (event) => {
    var allProducts = document.querySelectorAll(".male,.female");
    for (i = 0; i < 18; i++) {
        allProducts[i].classList.remove("d-none");
    }
});

// load product based on dropdown

function loadProduct(value) {
    var allProducts = document.querySelectorAll(".male,.female");
    for (i = 0; i < value; i++) {
        allProducts[i].classList.remove("d-none");
    }
}

// New/sale filter code



var itemsToFilter = document.querySelectorAll(".male,.female");
// console.log(itemsToFilter);
var checkBoxes = document.querySelectorAll(".form-check-input");
// console.log(checkBoxes);
for (var i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener("click", filterItems, false);
}

function filterItems(e) {
    var clickedItem = e.target;
    if (clickedItem.value == true) {
        hideOrShowItems(clickedItem.value, "hideItem", "showItem")
    } else if (clickedItem.value == false) {
        hideOrShowItems(clickedItem.value, "showItem", "hideItem");
    } else { }
}

function hideOrShowItems(itemType, classToRemove, classToAdd){
    for(var i = 0; i < itemsToFilter.length; i++){
        var currentItem = itemsToFilter[i];
        if(currentItem.getAttribute("data-type")==itemType){
            removeClass(currentItem, classToRemove);
            addClass(currentItem, classToAdd);
        }
    }
}

function addClass(element,classToAdd){
    var currentClassValue = element.className;

    if(currentClassValue.indexOf(classToAdd) == -1){
        if((currentClassValue ==null)||(currentClassValue=="")){
            element.className = classToAdd;
        }else{
            element.className += " "+classToAdd;
        }
    }
}

function removeClass(element, classToRemove){
    var currentClassValue = element.className;
    if(currentClassValue == classToRemove){
        element.className = " ";
        return;
    }

    var classValues = currentClassValue.split(" ");
    var filterList =[];

    for(var i=0; i<classValues.length; i++){
        if(classToRemove != classValues[i]){
            filterList.push(classValue[i]);
        }
    }
    element.className = filterList.join(" ");
}