

// function Open1(){
// document.getElementById('Game1').innerHTML = '<object type="text/html" data="candycrush/index.html" ></object>, wid';
// }


// function clearBox()
// {
//     document.getElementById('Game1').innerHTML = "";
// }


 function resizeIframe(obj)
 {
   obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
   obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
 }

$(document).ready(function () {
    $(".popup").hide();
    $(".openpop").click(function (e) {
        e.preventDefault();
        $("iframe").attr("src", $(this).attr('href'));
        $(".links").fadeOut('slow');
        $(".popup").fadeIn('slow');
    });

    $(".close").click(function () {
        $(this).parent().fadeOut("slow");
        $(".links").fadeIn("slow");
    });
});
