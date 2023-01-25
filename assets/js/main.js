//open menu
$(document).ready(function () {
    $(".c-header__burger").click(function () {
      var menusp = $(".c-header__menusp");
      $(".c-header__iconopen").toggleClass("is-active");
      $(".c-header__wrapper").addClass("is-active");
      menusp.toggleClass("is-active");
      $("body").toggleClass("u-overflowhidden");
      $('.c-mainvisual__content').addClass('is-hide')
      
    });
   
  });
  
  //close menu
  $(document).ready(function () {
    $(".c-header__closemenu").click(function () {
      $(".c-header__menusp").addClass("u-close")
      $(".c-header__menusp").removeClass("is-active");
      $("body").removeClass("u-overflowhidden");
      $(".c-header__wrapper").removeClass("is-active");
      $(".c-header__iconopen").removeClass("is-active");
      $('.c-mainvisual__content').removeClass('is-hide')
      setTimeout(function() {
        $(".c-header__menusp").removeClass("u-close")
      }, 400)
    });
  
  
    $(".c-header__iconclose").click(function () {
      $(".c-header__menusp").addClass("u-close")
      $(".c-header__menusp").removeClass("is-active");
      $("body").removeClass("u-overflowhidden");
      $(".c-header__wrapper").removeClass("is-active");
      $(".c-header__iconopen").removeClass("is-active");
      $('.c-mainvisual__content').removeClass('is-hide')
      setTimeout(function() {
        $(".c-header__menusp").removeClass("u-close")
      }, 400)
    })
  });
  
  //slider visual
  $(document).ready(function () {
    $(".c-mainvisual__wrapper").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      autoplay: true,
      autoplaySpeed: 3000,
    });
  });
  
  
  
  
  //slider pickup
  $(document).ready(function () {
    $(".c-pickup__slide").slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      variableWidth: true,
      slidesToShow: 5,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
              slidesToShow: 4,
          }
        },
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
          }
        },
      ]
    });
  });
  
  //scrolltop
  $(document).ready(function () {
    $(".c-footer__scrolltopicon").click(function () {
      $("html, body").animate({ scrollTop: 6 }, 200);
      return false;
    });
  });
  
  //validate
  $(document).ready(function () {
    $("#contactForm").validate({
      onfocusout: function (element) {
        this.element(element);
        if(!(this.element(element))){
          $(".c-form__errorall").addClass("is-active");
        }else{
          $(".c-form__errorall").removeClass("is-active");
        }
      },
      errorClass: "c-form__error",
      rules: {
        fullname: {
          required: true
        },
        email: {
          required: true,
          email: true,
        }, 
        phone: {
          required: true,
          number: true
        },
        contents: {
          required: true
        },
      },
      messages: {
        fullname: {
          required: "『氏名』を入力してください。"
        },
        email: {
          required: "『メールアドレス』を入力してください。",
          email: "メールアドレスが無効です",
        },
        phone: {
          required: "『電話番号』を入力してください。",
          number: "『電話番号』を入力してください。",
        },
        contents: {
          required: "『お問い合わせ内容』を入力してください。",
        },
      },
    });
  });
  
  //check all field
  $(document).ready(function () {
    var fullname = $("#fullname").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var contents = $("#contents").val();
    $(".c-form__submitbtn").click(function () {
      if (!fullname && !phone && !email && !contents) {
        $(".c-form__errorall").toggleClass("is-active");
      }
    });
  });
  