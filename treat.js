(function () {
    'use strict';

    var next,
        walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

    while (next = walk.nextNode()) {
        if (/Get Yourself a Little Something/i.test(next.textContent) !== false) {
            next.textContent = 'Treat Yo\'self!';
        }
    }

}());
