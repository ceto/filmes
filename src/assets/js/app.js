$(document).foundation();


$(document).ready(function() {
    $('.tr_name').editable({
      tpl: '<label>Neved</label><input type="text">'
    });
    $('.tr_about').editable({
      tpl: '<label>Magamról</label><textarea></textarea>'
    });
    $('.tr_langs').editable({
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

    $('.tr_prodref').editable({
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
              ' <small>(' + $('<div>').text(value.tr_prodref_year).html() + ' ' +
              $('<div>').text(value.tr_prodref_length).html() + ' hét)</small>' +
              '</h4>' +
              '<p>' + $('<div>').text(value.tr_prodref_descr).html() +'</p>';
            $(this).html(html);
        }
    });


    $('.tr_contact').editable({
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
            var html = '<p>' + $('<div>').text(value.tr_contact_email).html() + '<br>' +
              'Telefon: '+ $('<div>').text(value.tr_contact_tel).html() + '<br>' +
              'Skype: ' + $('<div>').text(value.tr_contact_skype).html() + '</p>';
            $(this).html(html);
        }
    });




});

