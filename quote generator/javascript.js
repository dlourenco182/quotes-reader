function newQuote() {

    //animate
    animateBox();

    //clear the div
    $("#quoteDisplay").empty();

    animateText();


}

function animateBox() {
    /*  $("#quoteDisplay").height() = 0;
    $("#quoteDisplay").animate({
        height: '=180px'
    }, 250);

*/
}

function animateText() {
    // call API and get the value of the fields we want to show
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(result) {
        $.each(result, function(i, field) {
            if (i == "quoteText" || i == "quoteAuthor") {
                $("#quoteDisplay").append(field + " ");
            }
        });
    });
}

$("#strat").click(function() {
    $("#quoteDisplay").animate({ height: 0 }, 250);
    $("#quoteDisplay").animate({ height: 180 }, 250);
});