import $ from 'jquery'

//Tab navigate by ID
$('.tab--button').on('click', function (e) {
    $('.tab--content').hide();
    $($(this).attr('href')).show();
    $(this).addClass('tab--active')
    $(this).siblings().removeClass('tab--active')
    e.preventDefault()
})