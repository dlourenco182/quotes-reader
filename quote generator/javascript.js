function newQuote() {
    //clear the div
    $("div").empty();

    // call API and get the value of the fields we want to show
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(result) {
        $.each(result, function(i, field) {
            if (i == "quoteText" || i == "quoteAuthor") {
                $("div").append(field + " ");
            }
        });
    });
}