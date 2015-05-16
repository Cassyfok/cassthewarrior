$(function() {
     $( document ).tooltip({
       items: "img, [data-geo], [title]",
       content: function() {
         var element = $( this );
         if ( element.is( "[data-geo]" ) ) {
           var text = element.text();
           return "<img class='map' alt='" + text +
             "' src='http://maps.google.com/maps/api/staticmap?" +
             "zoom=11&size=500x500&maptype=terrain&sensor=false&center=" +
             text + "'>";
         }
         if ( element.is( "[title]" ) ) {
           return element.attr( "title" );
         }
         if ( element.is( "img" ) ) {
           return element.attr( "alt" );
         }
       }
     });
  });
  
  
 var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-146052-10']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
      
$(document).ready(function(){
    // Set the interval to be 5 seconds
    var t = setInterval(function(){
        $(".carousel ul").animate({marginLeft:-500},800,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);
}); 


function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(53.9968459,-6.3906669,17z),
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var marker = new google.maps.Marker({
    position: map.getCenter(53.9968459,-6.3906669,17z),
    map: map,
    animation:google.maps.Animation.BOUNCE,
    title: 'We Are Here!'
    
  });
  

  google.maps.event.addListener(map, 'center_changed', function() {
    // 2 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 2000);
  });

  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(40);
    map.setCenter(marker.getPosition());
  });
}

google.maps.event.addDomListener(window, 'load', initialize);