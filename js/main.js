$(function(){
    $(".select-custom__current").on('click', (e) => {
        e.preventDefault();
        e.stopPropagation();        

        let options = $(e.currentTarget).parent().find('.select-custom__options');
        
        if(!options.hasClass('select-custom__active')){
            $('.select-custom__options').removeClass('select-custom__active');
            options.addClass('select-custom__active');
        }else{
            $('.select-custom__options').removeClass('select-custom__active');
        }
    });

    $(".header__option .select-custom__option").on('click', (e) => {
        e.preventDefault();
        let current = $(e.currentTarget).parent().parent().find('.select-custom__selected');
        current.text($(e.currentTarget).text());
    });

    $(document).on('click', (e) => {
        $('.select-custom__options').removeClass('select-custom__active');
    })

  $('.header__logo').on('click', e => {
      $('html, body').animate({
        scrollTop: $(".header__main").offset().top
      }, 700);
  })

  $('.feedback__input input[type=text]').on('keyup', e => {
    let regex = /[\d]/gi;
    e.currentTarget.value = e.currentTarget.value.replace(regex, '');
  });

  if(location.search.indexOf('dark') !== -1){
    $('#change-theme2 a').attr('href', '/');
  }else{
    $('#change-theme2 a').attr('href', '?dark=true')
  }
});


function setInputFilter(textbox, inputFilter) {
    ["input", "mousedown", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function(e) {
        if(this.value.length > 12){
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }

        if(this.value.length < 2){
            this.value = '+7';
          }
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }else{
            this.value = '';
        }
      });
    });
  }

  document.querySelector(".feedback__input input").addEventListener('blur', e => {
      if(e.currentTarget.value.length <= 2){
        e.currentTarget.value = '';
      }
  })

  setInputFilter(document.querySelector(".feedback__input input"), function(value) {
    return /^\d*\+?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
  });


(function () {
  if (location.search.indexOf('dark') !== -1){
    var styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.type = 'text/css';
    styles.media = 'screen';
    styles.href = './css/dark.css';
    document.getElementsByTagName('head')[0].appendChild(styles);
  }
})();
