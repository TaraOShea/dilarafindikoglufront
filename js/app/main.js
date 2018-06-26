var gs = gs || {};

function onReady() {
 gs.logoScrollResize();
 gs.stickyMenu();
}

function onResize() {
    gs.stickyMenu();
}

function onScroll() {
    gs.stickyMenu();
}

$(document).ready(onReady);
$(window).resize(onResize);
$(window).scroll(onScroll);