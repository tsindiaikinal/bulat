$(document).ready(function(){
  $('.slider-intop').slick({
    infinite: true,
    slidesToShow: 4,
    // initialSlide:1,
    slidesToScroll: 1,
    easing:'linear',
    // fade: true,
    prevArrow:'<i class="fa fa-angle-left" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  });
  $('.slider--slick').slick({
    // adaptiveHeight: true,
    // lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true
  });
  $('.owl-carousel').owlCarousel({
    items:3,
    nav:true,
    // navText:['prev','next'],
    loop:true,
    dots:true,
    // margin:-120,
    startPosition:1,
    slideTransition:'linear',
    center:1,
    // animateOut:true,
    // animateIn:true,
    dotsEach:true
  });
  // function prev() {
  //   num++;
  //   if(num >= $('acordion').length) {
  //     num = 0;
  //   }
  //   var img1 = $('.acordion__content1').;
  //   img1.addClass('.acordion__content1');
  // }
});
//GOOGLE MAP start
  // initMap() - функция инициализации карты
function initMap() {
  // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
  var centerLatLng = new google.maps.LatLng(47.812066, 35.045805);
  // Обязательные опции с которыми будет проинициализированна карта
  var mapOptions = {
    center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
    zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
  };
  // Создаем карту внутри элемента #map
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
//GOOGLE MAP end

console.log("hello, I work for you");
