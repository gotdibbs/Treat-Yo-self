(function () {
    'use strict';

    var next,
        walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

    function fadeOut(el, callback){
        el.style.opacity = 1;

        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = 'none';
                callback();
            }
            else {
                requestAnimationFrame(fade);
            }
        })();
    }

    function fadeIn(el, display){
        el.style.opacity = 0;
        el.style.display = display || 'block';

        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

    function animatedReplace(el, text) {
        var display = el.parentNode.style.display;

        fadeOut(el.parentNode, function onFaded() {
            el.textContent = text;

            fadeIn(el.parentNode, display);
        });
    }

    while (next = walk.nextNode()) {
        if (/Get Yourself a Little Something/i.test(next.textContent) !== false) {
            animatedReplace(next, 'Treat Yo\'self!');
        }
        else if (/For a night in/.test(next.textContent) !== false) {
            animatedReplace(next, 'For a night of Treatin\' Yo\'self!');
        }
        else if (/Inspired by your Wish List/.test(next.textContent) !== false) {
            animatedReplace(next, 'Suggested ways to Treat Yo\'self!');
        }
        else if (/More top picks for you/.test(next.textContent) !== false) {
            animatedReplace(next, 'Even more ways to Treat Yo\'self!');
        }
        else if (/Everyday made easier/.test(next.textContent) !== false) {
            animatedReplace(next, 'Make your life easier by TREATIN\' YO\'SELF!');
        }
        else if (/Inspired by your shopping trends/.test(next.textContent) !== false) {
            animatedReplace(next, 'Inspired by previous Treat Yo\'self moments');
        }
        else if (/Recommendations for you in/.test(next.textContent) !== false) {
            animatedReplace(next, next.textContent.replace('Recommendations for you in', 'Ways for you to Treat Yo\'self in'));
        }
        else if (/Recommended for You in/.test(next.textContent) !== false) {
            animatedReplace(next, next.textContent.replace('Recommended for You in', 'Ways for you to Treat Yo\'self in'));
        }
        else if (/Recommendations for You/.test(next.textContent) !== false) {
            animatedReplace(next, next.textContent.replace('Recommendations for You', 'Ways to Treat Yo\'self'));
        }
    }

}());
