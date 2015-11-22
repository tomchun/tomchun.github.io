  $(document).ready(function() {
      $(".guess_box").click(checkForCode);


      function getRandom(num) {
          var my_num = Math.floor(Math.random() * num);
          return my_num;
      }

      var hideCode = function() {
          var numRand = getRandom(4);
          alert(numRand);
          $(".guess_box").each(function(index, value) {
              if (numRand == index) {
                  $(this).append("<span id='has_discount'></span>");
                  return false;
              }
          });
      };

      hideCode();

      function checkForCode() {
          var discount;

          if ($.contains(this, document.getElementById("has_discount"))) {
              var my_num = getRandom(100);
              discount = "<p>your Code: CODE" + my_num + "</p>";
          } else {
              discount = "<p>Sorry, no doscount this time!</p>";
          }
          $(this).append(discount);
          $(".guess_box").each(function() {
              $(this).unbind('click');
          });


          if ($.contains(this, document.getElementById("has_discount"))) {
              $(this).addClass("discount");
          } else {
              $(this).addClass("no_discount");
          } //end click function
      } //end click function

      $(".guess_box").hover(
          function() {
              $(this).addClass("my_hover");

          },
          function() {
              $(this).removeClass("my_hover");
          }
      );



  }); //end doc ready
