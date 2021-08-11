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
    for(i=0; i < 6; i++){
        allProducts[i].classList.remove("d-none");
    }
});

// load product based on dropdown

function loadProduct(value){
    var allProducts = document.querySelectorAll(".male,.female");
    for(i=0; i < value; i++){
        allProducts[i].classList.remove("d-none");
    }
}
