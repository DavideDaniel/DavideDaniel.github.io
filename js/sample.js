;
(function ($) {
  "use strict";

  // just a little bit of vanilla js fun... <3

  var hello = function (name, array) {
    if (name !== null) {
      if (name === "World" || name === "world") {
        name = name.toUpperCase();
        alertify.alert("HELLO " + name + "!");
      } else {
        array.push(name);
        alertify.alert("oh, hi " + name + "...");
        alertify.log("Visitors so far: " + array);
      }
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    var promptButton = document.querySelector("#promptButton");
    var nameArray = [];

    promptButton.addEventListener("click", function () {
      alertify.prompt("Hi.. What's your name?", function (entry,
        string) {
        if (entry) {
          hello(string, nameArray);
        }
      });
    });

  })

  // have fun!
})(jQuery);
