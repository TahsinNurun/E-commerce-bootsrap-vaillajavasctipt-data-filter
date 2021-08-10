var proImg = document.querySelectorAll(".pro");
// console.log(proImg);

proImg.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        var img = document.getElementsByClassName('pro')[`${index}`];
        console.log(img);
        img.classList.add("product");
        var back = document.getElementsByClassName('back')[`${index}`];
        console.log(back);
        back.classList.add("background");
    })
});


// sorting code

// function filter(){
//     console.log('apply btn clicked')
//     var sortBy = document.getElementById("sort-by");

    
//     var allProducts = document.getElementById("all-products");
//     console.log(allProducts);
//     allProducts.innerHTML="";

//     var maleProducts = document.getElementsByClassName("male");
//     console.log(maleProducts);
//     for(var i=0; i<maleProducts.length; i++){
//         console.log(maleProducts[i]);
//         maleProducts[i].classList.add("block");
//     }
    
// };

function sortBy(){
    var select = document.getElementById("sort-by");
    var selectedValue = select.value;
    
    var allProducts = document.querySelectorAll(".male,.female");
    // console.log(allProducts);

    if( selected){
        var femaleProducts = document.querySelectorAll(".female");
        console.log(femaleProducts);
    }
    
    
}
