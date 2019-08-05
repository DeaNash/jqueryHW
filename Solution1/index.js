$("#mainbtn").on("click", function () {
    $(".red").each(function () {
        $(this).fadeToggle()
    })
})

$(".red").each(function () {
    console.log($(this))
})