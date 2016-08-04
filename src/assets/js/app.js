$(document).foundation();

$(document).ready(function() {
    $('.xeditable').append('<div class="xeditable__action"><i class="fi-pencil"></i><a href="#">Módosítás</a></div>');

    $('.tr_name.xeditable').editable({
      tpl: '<label>Neved</label><input type="text">'
    });
    $('.tr_about.xeditable').editable({
      tpl: '<label>Magamról</label><textarea></textarea>'
    });
    $('.tr_langs.xeditable').editable({
      source: [
              {id: 'en', text: 'Angol'},
              {id: 'de', text: 'Német'},
              {id: 'ru', text: 'Orosz'},
              {id: 'fr', text: 'Francia'},
              {id: 'es', text: 'Spanyol'},
              {id: 'it', text: 'Olasz'}
           ],
      select2: {
           multiple: true
      }
    });

    $('.tr_school.xeditable').editable({
        url: '/post',
        value: {
            tr_school_name: "Moholy-Nagy Iparművészeti Egyetem",
            tr_school_yearstart: "2012",
            tr_school_yearend: "2015",
            tr_school_grad: "operatőr",
        },
        validate: function(value) {
            if(value.tr_school_name == '') return 'Iskola neve kötelező!';
        },
        display: function(value) {
            if(!value) {
                $(this).empty();
                return;
            }
            var html = '<h4>' + $('<div>').text(value.tr_school_name).html() +
              ' <small>' + $('<div>').text(value.tr_school_yearstart).html() + '-' +
              $('<div>').text(value.tr_school_yearend).html() + '</small>' +
              '</h4>' +
              '<p>' + $('<div>').text(value.tr_school_grad).html() +'</p>'+
              '<div class="xeditable__action"><i class="fi-pencil"></i><a href="#">Módosítás</a></div>';
            $(this).html(html);
        }
    });


    $('.tr_prodref.xeditable').editable({
        url: '/post',
        value: {
            tr_prodref_title: "Szegénylegények",
            tr_prodref_year: "2014",
            tr_prodref_length: "15",
            tr_prodref_descr: "Elsősorban a gafferek ebédjét szállítottam, illetve a produkció pénzügyi asszisztensének hordtam kávékat egy nagyon drága kávézóból. Szerencsémre ráláttam az operatőr munkájára is."
        },
        validate: function(value) {
            if(value.tr_prodref_title == '') return 'Produkció címe kötelező!';
        },
        display: function(value) {
            if(!value) {
                $(this).empty();
                return;
            }
            var html = '<h4>' + $('<div>').text(value.tr_prodref_title).html() +
              ' <small>' + $('<div>').text(value.tr_prodref_year).html() + ', ' +
              $('<div>').text(value.tr_prodref_length).html() + ' hét</small>' +
              '</h4>' +
              '<p>' + $('<div>').text(value.tr_prodref_descr).html() +'</p>'+
              '<div class="xeditable__action"><i class="fi-pencil"></i><a href="#">Módosítás</a></div>';
            $(this).html(html);
        }
    });


    $('.tr_contact.xeditable').editable({
        url: '/post',
        value: {
            tr_contact_email: "mintapanna@gmail.com",
            tr_contact_tel: "+36 30 321 7654",
            tr_contact_skype: "minta.panna",
        },
        validate: function(value) {
            if(value.tr_contact_email == '') return 'Hiányzó kötelező mező!';
        },
        display: function(value) {
            if(!value) {
                $(this).empty();
                return;
            }
            var html = '<label>E-mail</label>' + $('<div>').text(value.tr_contact_email).html() + '<br>' +
              '<label>Telefon</label>'+ $('<div>').text(value.tr_contact_tel).html() + '<br>' +
              '<label>Skype</label>' + $('<div>').text(value.tr_contact_skype).html() +
              '<div class="xeditable__action"><i class="fi-pencil"></i><a href="#">Módosítás</a></div>';
            $(this).html(html);
        }
    });
    //Register Type selection
    $('input[name="regtype"]').on('change', function(e) {
      if ($(this).val() === 'tranie') {
        $('#tranieedata').foundation('toggle');
        $('#proddata').addClass('is-hidden');
      } else if ($(this).val() === 'producer') {
        $('#proddata').foundation('toggle');
        $('#tranieedata').addClass('is-hidden');
      }
    });


    ///// listnav mobile

    if ($('#listnav').length>0) {
      $('.mosaic').prepend('<p class="hide-for-tablet"><a class="csini" data-open="mobilistnav"><i class="fi-list"></i>Lista a szűrése</a></p>');
      var $mlistnav = new Foundation.Reveal(
        $(
          '<div id="mobilistnav" class="reveal reveal--semitransp">'
            + '<h1>Lista szűrése</h1>'
            + $('#listnav').html()
            + '<button class="close-button" data-close aria-label="Szűrőlista bezárása" type="button">'
            + '<span aria-hidden="true">&times;</span></button>'
            + '</div>'
        ), {
        fullScreen: true
      });
    }


});

