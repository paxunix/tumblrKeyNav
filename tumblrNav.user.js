// ==UserScript==
// @name            Tumblr Key Nav
// @namespace       halpenny
// @description     Map left/right arrow keys to prev page/next page navigation.
// @include         http://*.tumblr.com/*
// @version         0.1
// ==/UserScript==

document.body.onkeydown = function(evt) {

var els = document.location.pathname.split(/\//);

if (els.length == 2 || els[1] && els[1] === "page")
{
    var curPage = +(els[2] || 1);
    var nextPage = curPage + 1;
    var prevPage = Math.max(1, curPage - 1);

    if (evt.which == 39)   // right arrow
    {
        document.location.pathname = "/page/" + nextPage;
    }
    else if (evt.which == 37)     // left arrow
    {
        if (curPage != 1)
            document.location.pathname = "/page/" + prevPage;
    }
}

};
