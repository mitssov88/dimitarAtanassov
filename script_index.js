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

    $('.container .rect').css("transform", "rotateY(" + x_degrees +"deg) rotateX(" + y_degrees +"deg)"); // Y-axis is the pivot -> use x-degrees     
})
container.addEventListener("mouseout", function() { // remove the e most likely
    $('.container .rect').css("transform", "rotateY(0deg) rotateX(0deg)"); // Y-axis is the pivot -> use x-degrees     
})


$(".left").hover(function(){
    var hoveredOver =  $("#" + this.id); 
    document.querySelector("#" + this.id).classList.toggle("moveLeft");
    document.querySelector("#second-fadingCaption").classList.toggle("captionFadeOut");
    document.querySelector("#second-fadingCaption").classList.toggle("captionFadeIn");
}, function(){    
    var hoveredOver =  $("#" + this.id); 
    document.querySelector("#" + this.id).classList.toggle("moveLeft");
    document.querySelector("#second-fadingCaption").classList.toggle("captionFadeIn");
    document.querySelector("#second-fadingCaption").classList.toggle("captionFadeOut");
});
$(".right").hover(function(){
    console.log($(".lead").css("font"));
    console.log("VERSUS");
    console.log($("figcaption").css("font"));
    if (this.id == "first-img"){
        document.querySelector("#first-img").classList.toggle("moveRight");
        document.querySelector("#first-fadingCaption").classList.toggle("captionFadeOut");
        document.querySelector("#first-fadingCaption").classList.toggle("captionFadeIn");
    }
    else{
        document.querySelector("#third-img").classList.toggle("moveRight");
        document.querySelector("#third-fadingCaption").classList.toggle("captionFadeOut");
        document.querySelector("#third-fadingCaption").classList.toggle("captionFadeIn");
    }
}, function(){    
    if (this.id == "first-img"){
        document.querySelector("#first-img").classList.toggle("moveRight");
        document.querySelector("#first-fadingCaption").classList.toggle("captionFadeIn");
        document.querySelector("#first-fadingCaption").classList.toggle("captionFadeOut");
    }
    else{
        document.querySelector("#third-img").classList.toggle("moveRight");
        document.querySelector("#third-fadingCaption").classList.toggle("captionFadeIn");
        document.querySelector("#third-fadingCaption").classList.toggle("captionFadeOut");
    }
});

