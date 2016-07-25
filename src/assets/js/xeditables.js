/**
prodref editable input.
Internally value stored as {city: "Moscow", street: "Lenina", building: "15"}

@class prodref
@extends abstractinput
@final
@example
<a href="#" id="prodref" data-type="prodref" data-pk="1">awesome</a>
<script>
$(function(){
    $('#address').editable({
        url: '/post',
        title: 'Enter city, street and building #',
        value: {
            city: "Moscow",
            street: "Lenina",
            building: "15"
        }
    });
});
</script>
**/
(function ($) {
    "use strict";

    var Prodref = function (options) {
        this.init('Prodref', options, Prodref.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Prodref, $.fn.editabletypes.abstractinput);

    $.extend(Prodref.prototype, {
        /**
        Renders input from tpl

        @method render()
        **/
        render: function() {
           this.$input = this.$tpl.find('input');
        },

        /**
        Default method to show value in element. Can be overwritten by display option.

        @method value2html(value, element)
        **/
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return;
            }
            var html = '<h4>' + $('<div>').text(value.tr_prodref_title).html() +
              ' <small>(' + $('<div>').text(value.tr_prodref_year).html() + ' ' +
              $('<div>').text(value.tr_prodref_length).html() + ' hét)</small>' +
              '</h4>' +
              '<p>' + $('<div>').text(value.tr_prodref_descr).html() +'</p>';
            $(element).html(html);
        },

        /**
        Gets value from element's html

        @method html2value(html)
        **/
        html2value: function(html) {
          /*
            you may write parsing method to get value by element's html
            e.g. "Moscow, st. Lenina, bld. 15" => {city: "Moscow", street: "Lenina", building: "15"}
            but for complex structures it's not recommended.
            Better set value directly via javascript, e.g.
            editable({
                value: {
                    city: "Moscow",
                    street: "Lenina",
                    building: "15"
                }
            });
          */
          return null;
        },

       /**
        Converts value to string.
        It is used in internal comparing (not for sending to server).

        @method value2str(value)
       **/
       value2str: function(value) {
           var str = '';
           if(value) {
               for(var k in value) {
                   str = str + k + ':' + value[k] + ';';
               }
           }
           return str;
       },

       /*
        Converts string to value. Used for reading value from 'data-value' attribute.

        @method str2value(str)
       */
       str2value: function(str) {
           /*
           this is mainly for parsing value defined in data-value attribute.
           If you will always set value by javascript, no need to overwrite it
           */
           return str;
       },

       /**
        Sets value of input.

        @method value2input(value)
        @param {mixed} value
       **/
       value2input: function(value) {
           if(!value) {
             return;
           }

           this.$input.filter('[name="tr_prodref_title"]').val(value.tr_prodref_title);
           this.$input.filter('[name="tr_prodref_year"]').val(value.tr_prodref_year);
           this.$input.filter('[name="tr_prodref_length"]').val(value.tr_prodref_length);
           this.$input.filter('[name="tr_prodref_descr"]').val(value.tr_prodref_descr);

       },

       /**
        Returns value of input.

        @method input2value()
       **/
       input2value: function() {
           return {
              tr_prodref_title: this.$input.filter('[name="tr_prodref_title"]').val(),
              tr_prodref_year: this.$input.filter('[name="tr_prodref_year"]').val(),
              tr_prodref_length: this.$input.filter('[name="tr_prodref_length"]').val(),
              tr_prodref_descr: this.$input.filter('[name="tr_prodref_descr"]').val()
           };
       },

        /**
        Activates input: sets focus on the first field.

        @method activate()
       **/
       activate: function() {
            this.$input.filter('[name="tr_prodref_title"]').focus();
       },

       /**
        Attaches handler to submit form in case of 'showbuttons=false' mode

        @method autosubmit()
       **/
       autosubmit: function() {
           this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
           });
       }
    });

    Prodref.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="row"><div class="columns small-12"><label>Produkció címe <input type="email" name="tr_contact_emailtitle"></label></div>'+
             '<div class="columns small-6"><label>Év<input type="text" name="tr_prodref_year"></label></div>'+
             '<div class="columns small-6"><label>Mennyi ideig tartott (hét)<input type="text" name="tr_prodref_length"></label></div>'+
             '<div class="columns small-12"><label>Mit csináltál<textarea name="tr_prodref_descr" rows="4"></textarea></label></div></div>',

        inputclass: ''
    });

    $.fn.editabletypes.prodref = Prodref;

}(window.jQuery));

/**** iskola ****/
(function ($) {
    "use strict";

    var School = function (options) {
        this.init('School', options, School.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(School, $.fn.editabletypes.abstractinput);

    $.extend(School.prototype, {
        /**
        Renders input from tpl

        @method render()
        **/
        render: function() {
           this.$input = this.$tpl.find('input');
        },

        /**
        Default method to show value in element. Can be overwritten by display option.

        @method value2html(value, element)
        **/
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return;
            }
            var html = '<h4>' + $('<div>').text(value.tr_school_title).html() +
              ' <small>(' + $('<div>').text(value.tr_school_year).html() + ' ' +
              $('<div>').text(value.tr_school_length).html() + ' hét)</small>' +
              '</h4>' +
              '<p>' + $('<div>').text(value.tr_school_descr).html() +'</p>';
            $(element).html(html);
        },

        /**
        Gets value from element's html

        @method html2value(html)
        **/
        html2value: function(html) {
          /*
            you may write parsing method to get value by element's html
            e.g. "Moscow, st. Lenina, bld. 15" => {city: "Moscow", street: "Lenina", building: "15"}
            but for complex structures it's not recommended.
            Better set value directly via javascript, e.g.
            editable({
                value: {
                    city: "Moscow",
                    street: "Lenina",
                    building: "15"
                }
            });
          */
          return null;
        },

       /**
        Converts value to string.
        It is used in internal comparing (not for sending to server).

        @method value2str(value)
       **/
       value2str: function(value) {
           var str = '';
           if(value) {
               for(var k in value) {
                   str = str + k + ':' + value[k] + ';';
               }
           }
           return str;
       },

       /*
        Converts string to value. Used for reading value from 'data-value' attribute.

        @method str2value(str)
       */
       str2value: function(str) {
           /*
           this is mainly for parsing value defined in data-value attribute.
           If you will always set value by javascript, no need to overwrite it
           */
           return str;
       },

       /**
        Sets value of input.

        @method value2input(value)
        @param {mixed} value
       **/
       value2input: function(value) {
           if(!value) {
             return;
           }

           this.$input.filter('[name="tr_school_title"]').val(value.tr_school_title);
           this.$input.filter('[name="tr_school_year"]').val(value.tr_school_year);
           this.$input.filter('[name="tr_school_length"]').val(value.tr_school_length);
           this.$input.filter('[name="tr_school_descr"]').val(value.tr_school_descr);

       },

       /**
        Returns value of input.

        @method input2value()
       **/
       input2value: function() {
           return {
              tr_school_title: this.$input.filter('[name="tr_school_title"]').val(),
              tr_school_year: this.$input.filter('[name="tr_school_year"]').val(),
              tr_school_length: this.$input.filter('[name="tr_school_length"]').val(),
              tr_school_descr: this.$input.filter('[name="tr_school_descr"]').val()
           };
       },

        /**
        Activates input: sets focus on the first field.

        @method activate()
       **/
       activate: function() {
            this.$input.filter('[name="tr_school_title"]').focus();
       },

       /**
        Attaches handler to submit form in case of 'showbuttons=false' mode

        @method autosubmit()
       **/
       autosubmit: function() {
           this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
           });
       }
    });

    School.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="row"><div class="columns small-12"><label>Iskola neve <input type="text" name="tr_school_name"></label></div>'+
            '<div class="columns small-12"><label>Mit tanultál<input type="text" name="tr_school_grad"></label></div>'+
             '<div class="columns small-6"><label>Mikor kezdted (év)<input type="text" name="tr_school_yearstart"></label></div>'+
             '<div class="columns small-6"><label>Mikor végeztél<input type="text" name="tr_school_yearend"></label></div>'+

             '</div>',

        inputclass: ''
    });

    $.fn.editabletypes.school = School;

}(window.jQuery));

/*** contact **/
(function ($) {
    "use strict";

    var Contact = function (options) {
        this.init('Contact', options, Contact.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Contact, $.fn.editabletypes.abstractinput);

    $.extend(Contact.prototype, {
        /**
        Renders input from tpl

        @method render()
        **/
        render: function() {
           this.$input = this.$tpl.find('input');
        },

        /**
        Default method to show value in element. Can be overwritten by display option.

        @method value2html(value, element)
        **/
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return;
            }
            var html = '<p>' + $('<div>').text(value.tr_contact_email).html() + '<br>' +
              'Telefon: '+ $('<div>').text(value.tr_contact_tel).html() + '<br>' +
              'Skype: ' + $('<div>').text(value.tr_contact_skype).html() + '</p>';
            $(element).html(html);
        },

        /**
        Gets value from element's html

        @method html2value(html)
        **/
        html2value: function(html) {
          /*
            you may write parsing method to get value by element's html
            e.g. "Moscow, st. Lenina, bld. 15" => {city: "Moscow", street: "Lenina", building: "15"}
            but for complex structures it's not recommended.
            Better set value directly via javascript, e.g.
            editable({
                value: {
                    city: "Moscow",
                    street: "Lenina",
                    building: "15"
                }
            });
          */
          return null;
        },

       /**
        Converts value to string.
        It is used in internal comparing (not for sending to server).

        @method value2str(value)
       **/
       value2str: function(value) {
           var str = '';
           if(value) {
               for(var k in value) {
                   str = str + k + ':' + value[k] + ';';
               }
           }
           return str;
       },

       /*
        Converts string to value. Used for reading value from 'data-value' attribute.

        @method str2value(str)
       */
       str2value: function(str) {
           /*
           this is mainly for parsing value defined in data-value attribute.
           If you will always set value by javascript, no need to overwrite it
           */
           return str;
       },

       /**
        Sets value of input.

        @method value2input(value)
        @param {mixed} value
       **/
       value2input: function(value) {
           if(!value) {
             return;
           }

           this.$input.filter('[name="tr_contact_title"]').val(value.tr_contact_title);
           this.$input.filter('[name="tr_contact_year"]').val(value.tr_contact_year);
           this.$input.filter('[name="tr_contact_length"]').val(value.tr_contact_length);
           this.$input.filter('[name="tr_contact_descr"]').val(value.tr_contact_descr);

       },

       /**
        Returns value of input.

        @method input2value()
       **/
       input2value: function() {
           return {
              tr_contact_title: this.$input.filter('[name="tr_contact_title"]').val(),
              tr_contact_year: this.$input.filter('[name="tr_contact_year"]').val(),
              tr_contact_length: this.$input.filter('[name="tr_contact_length"]').val(),
              tr_contact_descr: this.$input.filter('[name="tr_contact_descr"]').val()
           };
       },

        /**
        Activates input: sets focus on the first field.

        @method activate()
       **/
       activate: function() {
            this.$input.filter('[name="tr_contact_title"]').focus();
       },

       /**
        Attaches handler to submit form in case of 'showbuttons=false' mode

        @method autosubmit()
       **/
       autosubmit: function() {
           this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
           });
       }
    });

    Contact.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="row">'+
          '<div class="columns small-12"><label>E-mail címed <input type="text" name="tr_contact_email"></label></div>'+
          '<div class="columns small-6"><label>Telefon<input type="text" name="tr_contact_tel"></label></div>'+
          '<div class="columns small-6"><label>Skype<input type="text" name="tr_contact_skype"></label></div>'+
          '</div>',

        inputclass: ''
    });

    $.fn.editabletypes.contact = Contact;

}(window.jQuery));



/*** Defaults overwite ****/
$.fn.editable.defaults.mode = 'inline';
$.fn.editableform.template = '<form class="form-inline editableform"><div class="control-group"><div class="row"><div class="editable-input columns small-12"></div><div class="editable-buttons columns small-12"></div></div><div class="editable-error-block"></div></div></form>';

$.fn.editableform.buttons = '<button type="submit" class="button small editable-submit">Változtatások mentése</button>'+
    '<button type="button" class="button small secondary editable-cancel">Mégsem</button>';