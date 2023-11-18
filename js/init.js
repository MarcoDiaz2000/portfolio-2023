jQuery(document).ready(() => {
  // here all ready functions
/* eslint-disable */
  edrea_tm_picker();
  edrea_tm_modalbox();
  edrea_tm_page_transition();
  edrea_tm_trigger_menu();
  edrea_tm_about_popup();
  edrea_tm_portfolio_popup();
  edrea_tm_news_popup();
  edrea_tm_cursor();
  edrea_tm_imgtosvg();
  edrea_tm_popup();
  edrea_tm_data_images();
  edrea_tm_contact_form();
  hashtag();
  edrea_tm_swiper();
  edrea_tm_headline();
  edrea_tm_location();
  edrea_tm_color_switcher();
  edrea_tm_cursor_switcher();
  edrea_tm_switcher_opener();

  jQuery(window).load('body', () => {
    edrea_tm_my_load();
  });
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------   COLOR PICKER    -------------------
// -----------------------------------------------------

function edrea_tm_picker() {
  if (jQuery('.edrea_tm_settings').length) {
    // attach background for all colors
    const list	= jQuery('.edrea_tm_settings .colors li a');
    list.each(function () {
      jQuery(this).css({ backgroundColor: jQuery(this).data('color') });
    });

    // change root color
    list.on('click', function () {
      const element = jQuery(this);
      const color	= element.data('color');
      jQuery(':root').css('--main-color', color);
      return false;
    });
  }
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function edrea_tm_my_progress() {
  jQuery('.progress_inner').each(function () {
    const progress 		= jQuery(this);
    const pValue 			= parseInt(progress.data('value'), 10);
    const pColor			= progress.data('color');
    const pBarWrap 		= progress.find('.bar');
    const pBar 			= progress.find('.bar_in');
    pBar.css({ width: `${pValue}%`, backgroundColor: pColor });
    setTimeout(() => { pBarWrap.addClass('open'); });
  });
}

// -----------------------------------------------------
// ---------------   CIRCULAR PROGRESS   ---------------
// -----------------------------------------------------

function edrea_tm_circular_progress() {
  const circVal 		= 110;

  const colorSchemes	= jQuery(':root').css('--main-color');

  jQuery('.circular_progress_bar .myCircle').each(function () {
    const element	= jQuery(this);
    element.append('<span class="number"></span>');
    const value	= element.data('value');
    element.circleProgress({
      size: circVal,
      value: 0,
      animation: { duration: 1400 },
      thickness: 2,
      fill: colorSchemes,
      emptyFill: 'rgba(0,0,0,0)',
      startAngle: -Math.PI / 2,
		  }).on('circle-animation-progress', (event, progress, stepValue) => {
      element.find('.number').text(`${parseInt(stepValue.toFixed(2) * 100)}%`);
		  });
		  element.circleProgress('value', 1.0);
		  setTimeout(() => { element.circleProgress('value', value); }, 1400);
  });
}

// -----------------------------------------------------
// --------------------   MODALBOX    ------------------
// -----------------------------------------------------

function edrea_tm_modalbox() {
  jQuery('.edrea_tm_all_wrap').prepend('<div class="edrea_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');
}

// -----------------------------------------------------
// -------------   PAGE TRANSITION    ------------------
// -----------------------------------------------------

function edrea_tm_page_transition() {
  const section 		= jQuery('.edrea_tm_section');
  const allLi 			= jQuery('.transition_link li');
  const button			= jQuery('.transition_link a');
  const wrapper 		= jQuery('.edrea_tm_all_wrap');
  const enter	 		= wrapper.data('enter');
  const exit		 	= wrapper.data('exit');

  button.on('click', function () {
    const element 	= jQuery(this);
    const href		= element.attr('href');
    if (element.parent().hasClass('edrea_tm_button')) {
      jQuery(`.menu .transition_link a[href="${href}"]`).trigger('click');
      hashtag();
      return false;
    }
    const sectionID 	= jQuery(href);
    const parent	 	= element.closest('li');
    if (!parent.hasClass('active')) {
      allLi.removeClass('active');
      wrapper.find(section).removeClass(`animated ${enter}`);
      if (wrapper.hasClass('opened')) {
        wrapper.find(section).addClass(`animated ${exit}`);
      }
      parent.addClass('active');
      wrapper.addClass('opened');
      wrapper.find(sectionID).removeClass(`animated ${exit}`).addClass(`animated ${enter}`);
      jQuery(section).addClass('hidden');
      jQuery(sectionID).removeClass('hidden').addClass('active');
    }
    return false;
  });
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function edrea_tm_trigger_menu() {
  const hamburger 		= jQuery('.edrea_tm_topbar .trigger .hamburger');
  const mobileMenu		= jQuery('.edrea_tm_mobile_menu');
  const mobileMenuList	= jQuery('.edrea_tm_mobile_menu ul li a');

  hamburger.on('click', function () {
    const element 	= jQuery(this);

    if (element.hasClass('is-active')) {
      element.removeClass('is-active');
      mobileMenu.removeClass('opened');
    } else {
      element.addClass('is-active');
      mobileMenu.addClass('opened');
    }
    return false;
  });

  mobileMenuList.on('click', () => {
    jQuery('.edrea_tm_topbar .trigger .hamburger').removeClass('is-active');
    mobileMenu.removeClass('opened');
    return false;
  });
}

// -------------------------------------------------
// ---------------  ABOUT POPUP  -------------------
// -------------------------------------------------

function edrea_tm_about_popup() {
  const button			= jQuery('.edrea_tm_about .edrea_tm_button a');
  const close			= jQuery('.edrea_tm_modalbox .close');
  const modalBox		= jQuery('.edrea_tm_modalbox');
  const hiddenContent	= jQuery('.edrea_tm_hidden_content').html();

  button.on('click', () => {
    modalBox.addClass('opened');
    modalBox.find('.description_wrap').html(hiddenContent);
    edrea_tm_data_images();
    edrea_tm_my_progress();
    edrea_tm_circular_progress();
    edrea_tm_mycarousel();
    edrea_tm_location();
  });
  close.on('click', () => {
    modalBox.removeClass('opened');
    modalBox.find('.description_wrap').html('');
  });
}

// -------------------------------------------------
// -----------  PORTFOLIO POPUP  -------------------
// -------------------------------------------------

function edrea_tm_portfolio_popup() {
  const modalBox		= jQuery('.edrea_tm_modalbox');
  const button			= jQuery('.edrea_tm_portfolio .portfolio_popup');
  const closePopup		= modalBox.find('.close');

  button.off().on('click', function () {
    const element 	= jQuery(this);
    const parent 		= element.closest('.list_inner');
    const content 	= parent.find('.edrea_tm_hidden_content').html();
    const image		= parent.find('.image .main').data('img-url');
    const title		= parent.find('.details h3').text();
    const category	= parent.find('.details span').text();
    modalBox.addClass('opened');
    modalBox.find('.description_wrap').html(content);
    modalBox.find('.portfolio_popup_details').prepend(`<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="${image}"></div></div>`);
    modalBox.find('.portfolio_popup_details .top_image').after(`<div class="portfolio_main_title"><h3>${title}</h3><span><a href="#">${category}</a></span><div>`);
    edrea_tm_data_images();
    edrea_tm_popup();
    return false;
  });
  closePopup.on('click', () => {
    modalBox.removeClass('opened');
    modalBox.find('.description_wrap').html('');
    return false;
  });
}

// -------------------------------------------------
// ----------------  NEWS POPUP  -------------------
// -------------------------------------------------

function edrea_tm_news_popup() {
  const modalBox		= jQuery('.edrea_tm_modalbox');
  const button			= jQuery('.edrea_tm_news .news_popup,.edrea_tm_news .news_list h3 a');
  const closePopup		= modalBox.find('.close');

  button.off().on('click', function () {
    const element 	= jQuery(this);
    const parent 		= element.closest('.list_inner');
    const content 	= parent.find('.edrea_tm_hidden_content').html();
    const image		= parent.find('.image .main').data('img-url');
    const title		= parent.find('.details h3 a').text();
    const category	= parent.find('.details span').html();
    modalBox.addClass('opened');
    modalBox.find('.description_wrap').html(content);
    modalBox.find('.news_popup_details').prepend(`<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="${image}"></div></div>`);
    modalBox.find('.news_popup_details .top_image').after(`<div class="news_main_title"><h3>${title}</h3><span>${category}</span><div>`);
    edrea_tm_data_images();
    return false;
  });
  closePopup.on('click', () => {
    modalBox.removeClass('opened');
    modalBox.find('.description_wrap').html('');
    return false;
  });
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function edrea_tm_preloader() {
  const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  const preloader = $('#preloader');

  if (!isMobile) {
    setTimeout(() => {
      preloader.addClass('preloaded');
    }, 800);
    setTimeout(() => {
      preloader.remove();
    }, 2000);
  } else {
    preloader.remove();
  }
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function edrea_tm_my_load() {
  const speed	= 500;
  setTimeout(() => { edrea_tm_preloader(); }, speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function edrea_tm_cursor() {
  const myCursor	= jQuery('.mouse-cursor');

  if (myCursor.length) {
    if ($('body')) {
      const e = document.querySelector('.cursor-inner');
      const t = document.querySelector('.cursor-outer');
      let n; let i = 0;
      const o = !1;
      window.onmousemove = function (s) {
        o || (t.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`), e.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`, n = s.clientY, i = s.clientX;
      }, $('body').on('mouseenter', 'a,.edrea_tm_topbar .trigger, .cursor-pointer', () => {
        e.classList.add('cursor-hover'), t.classList.add('cursor-hover');
      }), $('body').on('mouseleave', 'a,.edrea_tm_topbar .trigger, .cursor-pointer', function () {
        $(this).is('a') && $(this).closest('.cursor-pointer').length || (e.classList.remove('cursor-hover'), t.classList.remove('cursor-hover'));
      }), e.style.visibility = 'visible', t.style.visibility = 'visible';
    }
  }
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function edrea_tm_imgtosvg() {
  jQuery('img.svg').each(function () {
    const jQueryimg 		= jQuery(this);
    const imgClass		= jQueryimg.attr('class');
    const imgURL			= jQueryimg.attr('src');

    jQuery.get(imgURL, (data) => {
      // Get the SVG tag, ignore the rest
      let jQuerysvg = jQuery(data).find('svg');

      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        jQuerysvg = jQuerysvg.attr('class', `${imgClass} replaced-svg`);
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

      // Replace image with new SVG
      jQueryimg.replaceWith(jQuerysvg);
    }, 'xml');
  });
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function edrea_tm_popup() {
  jQuery('.gallery_zoom').each(function () { // the containers for all your galleries
    jQuery(this).magnificPopup({
      delegate: 'a.zoom', // the selector for gallery item
      type: 'image',
      gallery: {
			  enabled: true,
      },
      removalDelay: 300,
      mainClass: 'mfp-fade',
    });
  });
  jQuery('.popup-youtube, .popup-vimeo').each(function () { // the containers for all your galleries
    jQuery(this).magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  });

  jQuery('.soundcloude_link').magnificPopup({
	  type: 'image',
	   gallery: {
		   enabled: true,
	   },
  });
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function edrea_tm_data_images() {
  const data			= jQuery('*[data-img-url]');

  data.each(function () {
    const element			= jQuery(this);
    const url				= element.data('img-url');
    element.css({ backgroundImage: `url(${url})` });
  });
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function edrea_tm_contact_form() {
  jQuery('.contact_form #send_message').on('click', () => {
    const name 		= jQuery('.contact_form #name').val();
    const email 		= jQuery('.contact_form #email').val();
    const message 	= jQuery('.contact_form #message').val();
    const subject 	= jQuery('.contact_form #subject').val();
    const success = jQuery('.contact_form .returnmessage').data('success');

    jQuery('.contact_form .returnmessage').empty(); // To empty previous error/success message.
    // checking for blank fields
    if (name === '' || email === '' || message === '') {
      jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
    } else {
      // Returns successful data submission message when the entered information is stored in database.
      jQuery.post('modal/contact.php', {
        ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject,
      }, (data) => {
        jQuery('.contact_form .returnmessage').append(data);// Append returned message to message paragraph

        if (jQuery('.contact_form .returnmessage span.contact_error').length) {
          jQuery('.contact_form .returnmessage').slideDown(500).delay(2000).slideUp(500);
        } else {
          jQuery('.contact_form .returnmessage').append(`<span class='contact_success'>${success}</span>`);
          jQuery('.contact_form .returnmessage').slideDown(500).delay(4000).slideUp(500);
        }

        if (data === '') {
          jQuery('#contact_form')[0].reset();// To reset form fields on success
        }
      });
    }
    return false;
  });
}

// -----------------------------------------------------
// --------------    OWL CAROUSEL    -------------------
// -----------------------------------------------------

function edrea_tm_mycarousel() {
	 const carousel			= jQuery('.edrea_tm_modalbox .owl-carousel');

  carousel.owlCarousel({
    loop: true,
    items: 1,
    lazyLoad: false,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 7000,
    dots: false,
    nav: false,
    navSpeed: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
  });
}

// -----------------------------------------------------
// -------------------    HASHTAG    -------------------
// -----------------------------------------------------

function hashtag() {
  const ccc 			= $('.edrea_tm_header .menu .ccc');
  let element 		= $('.edrea_tm_header .menu .active a');
  $('.edrea_tm_header .menu a').on('mouseenter', function () {
    const e 			= $(this);
    currentLink(ccc, e);
  });
  $('.edrea_tm_header .menu').on('mouseleave', () => {
    element 		= $('.edrea_tm_header .menu .active a');
    currentLink(ccc, element);
    element.parent().siblings().removeClass('mleave');
  });
  currentLink(ccc, element);
}

function currentLink(ccc, e) {
  if (!e.length) { return false; }
  const { left } = e.offset();
  const width		= e.outerWidth();
  const menuleft 	= $('.edrea_tm_header .menu').offset().left;
  e.parent().removeClass('mleave');
  e.parent().siblings().addClass('mleave');
  ccc.css({ left: `${left - menuleft}px`, width: `${width}px` });
}

// -----------------------------------------------------
// ---------------   SWIPER SLIDER    ------------------
// -----------------------------------------------------

function edrea_tm_swiper() {
  $('.swiper-section').each(function () {
    const element 	= $(this);
    const container 	= element.find('.swiper-container');
    const mySwiper 	= new Swiper(container, {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 0,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 6000,
      },

      navigation: {
        nextEl: '.my_next',
        prevEl: '.my_prev',
			  },

      pagination: {
        el: '.edrea_tm_swiper_progress',
        type: 'custom', // progressbar
        renderCustom(swiper, current, total) {
          // progress animation
          let scale; let translateX;
          const progressDOM	= container.find('.edrea_tm_swiper_progress');
          if (progressDOM.hasClass('fill')) {
            translateX 	= '0px';
            scale		= parseInt((current / total) * 100) / 100;
          } else {
            scale 		= parseInt((1 / total) * 100) / 100;
            translateX 	= `${(current - 1) * parseInt((100 / total) * 100) / 100}px`;
          }

          progressDOM.find('.all span').css({ transform: `translate3d(${translateX},0px,0px) scaleX(${scale}) scaleY(1)` });
          if (current < 10) { current = `0${current}`; }
          if (total < 10) { total = `0${total}`; }
          progressDOM.find('.current').html(current);
          progressDOM.find('.total').html(total);
        },
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  });
  edrea_tm_imgtosvg();
}

// -------------------------------------------------
// -----------------  LOCATION  --------------------
// -------------------------------------------------

function edrea_tm_location() {
  const button		= jQuery('.href_location');
  button.on('click', function () {
    const element		= jQuery(this);
    let address		= element.text();
    address			= address.replace(/\ /g, '+');
    const text		= 'https://maps.google.com?q=';
    window.open(text + address);
    return false;
  });
}

// -----------------------------------------------------
// ---------------------   SWITCHERS    ----------------
// -----------------------------------------------------

function edrea_tm_color_switcher() {
  const list	= jQuery('.edrea_tm_settings .colors li a');

  list.on('click', function () {
    const element = jQuery(this);
    const elval	= element.attr('class');
    element.closest('.edrea_tm_all_wrap').attr('data-color', `${elval}`);
    //		edrea_tm_circular_progress();
    return false;
  });
}

function edrea_tm_cursor_switcher() {
  const wrapper		= jQuery('.edrea_tm_all_wrap');
  const button		= jQuery('.edrea_tm_settings .cursor li a');
  const show		= jQuery('.edrea_tm_settings .cursor li a.show');
  const hide		= jQuery('.edrea_tm_settings .cursor li a.hide');

  button.on('click', function () {
    const element = jQuery(this);
    if (!element.hasClass('showme')) {
      button.removeClass('showme');
      element.addClass('showme');
    }
    return false;
  });
  show.on('click', () => {
    wrapper.attr('data-magic-cursor', '');
  });
  hide.on('click', () => {
    wrapper.attr('data-magic-cursor', 'hide');
  });
}

function edrea_tm_switcher_opener() {
  const settings	= jQuery('.edrea_tm_settings');
  const button		= settings.find('.link');

  button.on('click', function () {
    const element = jQuery(this);
    if (element.hasClass('opened')) {
      element.removeClass('opened');
      element.closest('.edrea_tm_settings').removeClass('opened');
    } else {
      element.addClass('opened');
      element.closest('.edrea_tm_settings').addClass('opened');
    }
    return false;
  });
}
/* eslint-enable */