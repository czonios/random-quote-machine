
var colors = [
    ["0, 34, 51", " 187, 170, 153"],
    ["51, 51, 17", "238, 221, 187"],
    ["51, 68, 85", "119, 102, 85"],
    ["34, 0, 0", "153, 187, 238"],
    ["85, 51, 51", "136, 170, 153"]
];
  
var tweet = "\"A journey of a thousand miles begins with a single step\" - Lao Tzu";

$(document).ready(function() {
    
    $.ajaxSetup({ cache: false });
    
    $("#getQuote").on("click", function() {
        
        /* Change background and text color */
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        
//        Change colors
        jQuery('body').css("background", ("rgb(" + randomColor[0] + ")"));
        jQuery('.text-header').css("background", ("rgb(" + randomColor[1] + ")"));
        jQuery('.vert-text').css("color", ("rgb(" + randomColor[0] + ")"));
        jQuery('.btn-primary').css("background", ("rgb(" + randomColor[0] + ")"));
        jQuery('.btn-primary').css("color", ("rgb(" + randomColor[1] + ")"));
        jQuery('.btn-primary:hover').css("border-color", ("rgb(" + randomColor[0] + ")"));
        
        /* Get new quote */
        
        var newQuote = "";

        $.getJSON("https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(q) {
          
            console.log(JSON.stringify(q));
            var quote = JSON.stringify(q[0].content);
            quote = quote.slice(4, quote.length-8);
          
            var author = JSON.stringify(q[0].title);
            author = author.slice(1, author.length-1);
          
            newQuote += "<h1>\"" + quote + "\"</h1><br><p>- " + author + "</p>";
          
            $("#quote").html(newQuote);
            tweet = "\"" + quote + "\" - " + author;
            });
      console.log(tweet);
    });
  
  $(".tweet").on("click", function(){
      window.open("https://twitter.com/intent/tweet?text=" + tweet);
    });
});