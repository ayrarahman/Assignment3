var girl = $("#girl-room");
var boy = $("#boy-room");
$("#girl-room").hide();
$("#boy-room").hide();
$("#polaroids").hide();
$("#painting-close").hide();
$("#doodles-close").hide();
$("#sketchbook-close").hide();
$("#phone-close").hide();
$("#shelf-close").hide();
$("#music-credit").hide();

$("#houses").show();
$("#back-button").hide();

//hover
$("#windowLeft, #windowRight, #polaroids, #painting, #recordplayer, #doodles, #sketchbook, #phone, #shelf, #doggy").hover(function () {
    $(this).css("cursor", "pointer");
})

//back to houses
$("#back-button").click(function () {
    girl.hide();
    boy.hide();
    $("#houses").show();
    $("#back-button").hide();
})


//WINDOWS
$("#windowLeft").click(function () {
    $("#houses").hide();
    $("#back-button").show();
    girl.show();
})
$("#windowRight").click(function () {
    $("#houses").hide();
    $("#back-button").show();
    boy.show();
})

//GIRL ROOM

//paintings
$("#painting").click(function () {
    girl.hide();
    $("#painting-close").show();
})
$("#painting-close").click(function () {
    $("#painting-close").hide();
    girl.show();
})

//doodles
$("#doodles").click(function () {
    girl.hide();
    $("#doodles-close").show();
})
$("#doodles-close").click(function () {
    $("#doodles-close").hide();
    girl.show();
})

//recordplayer
let isPlaying = false;
$("#recordplayer").click(function () {
    if (isPlaying) {
        $("#music")[0].pause(); 
        $("#music")[0].currentTime = 0; 
        $("#music-credit").hide(); 
        isPlaying = false; 
    } else {
        $("#music")[0].play(); 
        $("#music")[0].volume = 0.2;
        $("#music-credit").show(); 
        isPlaying = true; 
    }

})



//BOY ROOM

//sktechbook
$("#sketchbook").click(function () {
    $("#sketchbook-close").show();
    boy.hide();
})
$("#sketchbook-close").click(function () {
    $("#sketchbook-close").hide();
    boy.show();
})

//phone
$("#phone").click(function () {
    boy.hide();
    $("#phone-close").show();
})
$("#phone-close").click(function () {
    $("#phone-close").hide();
    boy.show();
})

//shelf
$("#shelf").click(function () {
    boy.hide();
    $("#shelf-close").show();
})
$("#shelf-close").click(function () {
    $("#shelf-close").hide();
    boy.show();
})

//dog
$("#doggy").click(function () {
    $("#bark")[0].play();
    console.log("bark");
})


document.querySelectorAll('#girl-room, #boy-room, #houses, #painting-close, #doodles-close, #shelf-close, #phone-close, #sketchbook-close').forEach(function (img) {
    img.addEventListener('click', function () {
        document.querySelector('.intro').classList.add('hidden');
    });
});

