// When the about us section is active, make the footer appear under it
$('.section#about-us-section').on('show.bs.carousel', function () {
    $(footer).css('bottom', '0');
  });
  
  // When the about us section is not active, make the footer go back to the bottom of the page
  $('.section#about-us-section').on('hide.bs.carousel', function () {
    $(footer).css('bottom', 'auto');
  });
  
  
  $(document).ready(function() {
            $(".navbar-nav a").on("click", function() {
                $(".navbar-nav").find(".active").removeClass("active");
                $(this).addClass("active");
            });
        });
        
        
    // Close the navigation menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
          var toggleButton = document.getElementById('toggleButton');
          var navbarNav = document.getElementById('navbarNav');
          if (toggleButton && navbarNav) {
              toggleButton.click(); // Simulate a click on the toggle button
          }
      });
  });

