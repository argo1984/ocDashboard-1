var urls = [];

urls[0] = [
        "http://www.google.com/search?q=",
        "http://search.yahoo.com/search?p=",
        "http://www.bing.com/search?q=",
        "https://duckduckgo.com/?q=",
        "http://ask.com/web?q=",
        "http://search.ebay.com/",
        "http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=",
        "https://www.youtube.com/results?search_query="
    ];
urls[1] = [
        "http://www.google.de/search?q=",
        "http://search.yahoo.de/search?p=",
        "http://www.bing.de/search?q=",
        "https://duckduckgo.com/?q=",
        "http://ask.com/web?sm=adv&advl=de&dm=adv&q=",
        "http://search.ebay.de/",
        "http://www.amazon.de/s?url=search-alias%3Daps&field-keywords=",
        "https://www.youtube.com/results?gl=DE&hl=de&search_query="
];


$(document).ready(function() {
    $('.app-ocDashboard .widget.search .content input[type="button"]').live("click",function(){
        var engine  = $('.app-ocDashboard .widget.search .content select.engine').val();
        var lang    = $('.app-ocDashboard .widget.search .content input[name="lang"]' ).val();
        var keyword = $('.app-ocDashboard .widget.search .content input[type="text"].keyword').val();

        var url = urls[lang][engine] + keyword;

        window.open(url,'_blank');
    });
});