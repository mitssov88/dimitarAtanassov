const container = document.querySelector('.container');
const rect = document.querySelector('.rect');

container.addEventListener("mouseover", function(e){
    let x = e.pageX;
    const x_middle = window.innerWidth / 2;
    const leftmost_x = $('.container').position().left;
    const rightmost_x = 2*x_middle - leftmost_x - 1;

    let y = e.pageY;
    const y_middle = window.innerHeight / 2 ;
    const topmost_y = $('.container').position().top; // .666 ROUND THIS
    const botmost_y = 2*y_middle - topmost_y - 1;


    console.log(`${leftmost_x} ${rightmost_x} ${topmost_y} ${botmost_y}`)
    // Further from x-axis, larger the angle
    const x_max_degrees = 20;
    const x_decimal = (x - x_middle ) / ( rightmost_x - x_middle);
    console.log(`${x_decimal}` + " %");
    const x_degrees = x_max_degrees * x_decimal; // how many degrees to turn
    // y - axis
    const y_max_degrees = 20;
    const y_decimal = (y - y_middle) / (y_middle - botmost_y);
    console.log(`${y_decimal}` + " %");
    const y_degrees = y_max_degrees * y_decimal;

    //.container:hover .rect
    $('.container .rect').css("transform", "rotateY(" + x_degrees +"deg) rotateX(" + y_degrees +"deg)"); // Y-axis is the pivot -> use x-degrees     
})
container.addEventListener("mouseout", function() { // remove the e most likely
    //document.querySelector('.rect').css.style.rotateY(0), rotateX(0); // try this way later
    $('.container .rect').css("transform", "rotateY(0deg) rotateX(0deg)"); // Y-axis is the pivot -> use x-degrees     
})


let education_container = document.querySelector('.education-container');
let hobbies_container = document.querySelector('.hobbies-container');
let goals_container = document.querySelector('.goals-container');

education_container.addEventListener("mouseover", function(){
    $('.education-text').fadeIn("slow");
    $('.education-container').css("color", "white");
    $('.education-container').css("background-size", "102%");
    $('.whisper').css("transform", "translateY(-12vh)");
    $('.whisper').fadeOut("slow");

})
education_container.addEventListener("mouseleave", function(){
    $('.education-text').fadeOut("slow");
    $('.education-container').css("background-color", "white");
    $('.education-container').css("color", "black");
    $('.education-container').css("background-size", "0");
})
hobbies_container.addEventListener("mouseover", function(){
    $('.hobbies-text').fadeIn("slow");
    $('.hobbies-container').css("color", "white");
    $('.hobbies-container').css("background-size", "102%");
    $('.whisper').css("transform", "translateY(-12vh)");
    $('.whisper').fadeOut("slow");
    
})
hobbies_container.addEventListener("mouseleave", function(){
    $('.hobbies-text').fadeOut("slow");
    $('.hobbies-container').css("background-color", "white");
    $('.hobbies-container').css("color", "black");
    $('.hobbies-container').css("background-size", "0");
})
goals_container.addEventListener("mouseover", function(){
    $('.goals-text').fadeIn("slow");
    $('.goals-container').css("color", "white");
    $('.goals-container').css("background-size", "102%");
    $('.whisper').css("transform", "translateY(-12vh)");
    $('.whisper').fadeOut("slow");
})
goals_container.addEventListener("mouseleave", function(){
    $('.goals-text').fadeOut("slow");
    $('.goals-container').css("background-color", "white");
    $('.goals-container').css("color", "black");
    $('.goals-container').css("background-size", "0");
})


