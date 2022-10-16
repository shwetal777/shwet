/*!
=========================================================
* ShwetalMore Landing page
=========================================================

* Copyright: 2022 ShwetalMore
* Licensed: Shwetal More
* Coded by ShwetalMore

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

//Check to see if the window is top if not then display button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#toTopBtn').fadeIn();
  }
  else {
      $('#toTopBtn').fadeOut();
  }
});

//Click event to scroll to top
$('#toTopBtn').click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 1500);
  return false;
});

fetch("https://api.unsplash.com/search/photos/?query=technology&client_id=2BHRf_91BeuRTt7CDCE-_eA3l95wlZLWlyog-KQ2c2Y")
    .then(
        function(response){
            
            
            if(response.status !== 200){
                console.log("There was a problem. Status code: " + response.status);
                return;
            }

            response.json().then(
                function(data){
                    document.getElementById("image").style.background = 'url(' + data["results"][0]["urls"]["regular"]+')';
                }
            )
        }
    )
    .catch(
        function(err){
            console.log(err+'404');
        }
        )
