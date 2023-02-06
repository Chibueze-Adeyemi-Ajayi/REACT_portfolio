const scrollTo = (id) => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#" + id).offset().top
    }, 2000);
}