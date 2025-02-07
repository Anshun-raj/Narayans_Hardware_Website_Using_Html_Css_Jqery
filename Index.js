$(document).ready(function(){
    $(".btn").click(function(){
        $(this).text($(this).text()=='Know More'? 'Know Less':'Know More')
    })
})

$(document).ready(function(){
    $(".btn1").click(function(){
        $(this).text($(this).text()=='Connect'? 'Connecting...':'Connect')
    })
})

$(document).ready(function(){
    $(".btn2").click(function(){
        $(this).text($(this).text()=='Add to Cart'? 'Added':'Add to Cart')
    })
})

var count=0;

function counter(){
    count++;
    $("#cart").text(count);
}

$(document).ready(function(){
    $(".btn2").click(function(){
        counter();
    })
})






