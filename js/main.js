jQuery(function ($) {

  // modal window
  $('.modal-toggle').on('click', function (e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
  });

  // Mask phone
  $("#phone").mask("+9 (999) 999-9999"), {
    autoclear: false
  };

  // Validation jQuery
  $.validator.addMethod("letters", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/)  ;
  }, "Нельзя использовать символы в имени");

  jQuery.extend(jQuery.validator.messages, {
    maxlength: jQuery.validator.format("Пожалуйста, используйте не больше чем {0} символа."),
    minlength: jQuery.validator.format("Пожалуйста, используйте больше чем {0} символа."),
  });

  $(function () {
    $("#form").validate({
      rules: {
        username: {
          required: true,
          minlength: 3, 
          maxlength: 50,
          letters: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          maxlength: 1024
        }
      },
      messages: {
        username: {
          required: "Пожалуйста введите свое имя"
        },
        email: {
          required: "Пожалуйста введите свой email."
        },
      },
      submitHandler: function() {
        window.location.href = "thanksPage.html";
      }
    });
  });

  // Dropdown flags for phone number
  $('.select-country').flagStrap({
    countries: {
      "UA": "",
      "RU": "",
    },
    buttonSize: "btn-sm",
    buttonType: "btn-info",
    labelMargin: "3px",
    scrollable: false,
    scrollableHeight: "350px"
  });
});