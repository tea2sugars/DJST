  /**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */(function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.util.clone(e[i]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n)r[i]=n[i];return r},insertBefore:function(e,n,r,i){i=i||t.languages;var s=i[e],o={};for(var u in s)if(s.hasOwnProperty(u)){if(u==n)for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a]);o[u]=s[u]}return i[e]=o},DFS:function(e,n){for(var r in e){n.call(e,r,e[r]);t.util.type(e)==="Object"&&t.languages.DFS(e[r],n)}}},highlightAll:function(e,n){var r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,s;s=r[i++];)t.highlightElement(s,e===!0,n)},highlightElement:function(r,i,s){var o,u,a=r;while(a&&!e.test(a.className))a=a.parentNode;if(a){o=(a.className.match(e)||[,""])[1];u=t.languages[o]}if(!u)return;r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;a=r.parentNode;/pre/i.test(a.nodeName)&&(a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var f=r.textContent;if(!f)return;f=f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var l={element:r,language:o,grammar:u,code:f};t.hooks.run("before-highlight",l);if(i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data),o);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(l.element);t.hooks.run("after-highlight",l)};c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else{l.highlightedCode=t.highlight(l.code,l.grammar,l.language);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(r);t.hooks.run("after-highlight",l)}},highlight:function(e,r,i){return n.stringify(t.tokenize(e,r),i)},tokenize:function(e,n,r){var i=t.Token,s=[e],o=n.rest;if(o){for(var u in o)n[u]=o[u];delete n.rest}e:for(var u in n){if(!n.hasOwnProperty(u)||!n[u])continue;var a=n[u],f=a.inside,l=!!a.lookbehind,c=0;a=a.pattern||a;for(var h=0;h<s.length;h++){var p=s[h];if(s.length>e.length)break e;if(p instanceof i)continue;a.lastIndex=0;var d=a.exec(p);if(d){l&&(c=d[1].length);var v=d.index-1+c,d=d[0].slice(c),m=d.length,g=v+m,y=p.slice(0,v+1),b=p.slice(g+1),w=[h,1];y&&w.push(y);var E=new i(u,f?t.tokenize(d,f):d);w.push(E);b&&w.push(b);Array.prototype.splice.apply(s,w)}}}return s},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[];r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(!r||!r.length)return;for(var i=0,s;s=r[i++];)s(n)}}},n=t.Token=function(e,t){this.type=e;this.content=t};n.stringify=function(e,r,i){if(typeof e=="string")return e;if(Object.prototype.toString.call(e)=="[object Array]")return e.map(function(t){return n.stringify(t,r,e)}).join("");var s={type:e.type,content:n.stringify(e.content,r,i),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:i};s.type=="comment"&&(s.attributes.spellcheck="true");t.hooks.run("wrap",s);var o="";for(var u in s.attributes)o+=u+'="'+(s.attributes[u]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+o+">"+s.content+"</"+s.tag+">"};if(!self.document){self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.tokenize(i,t.languages[r])));self.close()},!1);return}var r=document.getElementsByTagName("script");r=r[r.length-1];if(r){t.filename=r.src;document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)}})();;
Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi};Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/ig,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g};Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}});;
Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/ig,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/ig,inside:{punctuation:/\(/}}, number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};;
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g});Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}});Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}});;
Prism.hooks.add("after-highlight",function(e){var t=e.element.parentNode;if(!t||!/pre/i.test(t.nodeName)||t.className.indexOf("line-numbers")===-1){return}var n=1+e.code.split("\n").length;var r;lines=new Array(n);lines=lines.join("<span></span>");r=document.createElement("span");r.className="line-numbers-rows";r.innerHTML=lines;if(t.hasAttribute("data-start")){t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)}e.element.appendChild(r)})
;;
/**
 * @file liquidslider.js
 */
(function ($) {
  Drupal.behaviors.viewsSlideshowLiquidSlider = {
    attach: function (context, settings) {
      var fullId;
      var slideshowSettings;
      var slideshowContainer;

      $('.views_slideshow_liquid_slider_main:not(.viewsSlideshowLiquidSlider-processed)', context).addClass('viewsSlideshowLiquidSlider-processed').each(function() {
        // The id of the slider.
        fullId = '#' + $(this).attr('id');
        slideshowSettings = settings.viewsSlideshowLiquidSlider[fullId];

        slideshowSettings.autoHeight = (slideshowSettings.autoheight_settings.autoHeight == 1) ? true : false;
        slideshowSettings.autoHeightMin = parseInt(slideshowSettings.autoheight_settings.autoHeightMin);
        slideshowSettings.autoHeightEaseDuration = parseInt(slideshowSettings.autoheight_settings.autoHeightEaseDuration);

        slideshowSettings.dynamicTabs = (slideshowSettings.dynamictabs_settings.dynamicTabs == 1) ? true : false;
        slideshowSettings.dynamicTabsAlign = slideshowSettings.dynamictabs_settings.dynamicTabsAlign;
        slideshowSettings.dynamicTabsPosition = slideshowSettings.dynamictabs_settings.dynamicTabsPosition;
        slideshowSettings.panelTitleSelector = slideshowSettings.dynamictabs_settings.panelTitleSelector;

        slideshowSettings.dynamicArrows = (slideshowSettings.dynamicarrows_settings.dynamicArrows == 1) ? true : false;
        slideshowSettings.hoverArrows = (slideshowSettings.dynamicarrows_settings.hoverArrows == 1) ? true : false;

        slideshowSettings.autoSlide = (slideshowSettings.autoslide_settings.autoSlide == 1) ? true : false;
        slideshowSettings.autoSliderDirection = slideshowSettings.autoslide_settings.autoSliderDirection;
        slideshowSettings.autoSlideInterval = parseInt(slideshowSettings.autoslide_settings.autoSlideInterval);
        slideshowSettings.autoSlideControls = (slideshowSettings.autoslide_settings.autoSlideControls == 1) ? true : false;
        slideshowSettings.autoSlideStartText = slideshowSettings.autoslide_settings.autoSlideStartText;
        slideshowSettings.autoSlideStopText = slideshowSettings.autoslide_settings.autoSlideStopText;
        slideshowSettings.autoSlideStopWhenClicked = (slideshowSettings.autoslide_settings.autoSlideStopWhenClicked == 1) ? false : true;
        slideshowSettings.autoSlidePauseOnHover = (slideshowSettings.autoslide_settings.autoSlidePauseOnHover == 1) ? true : false;

        slideshowSettings.responsive = (slideshowSettings.responsive_settings.responsive == 1) ? true : false;
        slideshowSettings.mobileNavigation = (slideshowSettings.responsive_settings.mobileNavigation == 1) ? true : false;
        slideshowSettings.mobileNavDefaultText = slideshowSettings.responsive_settings.mobileNavDefaultText;
        slideshowSettings.mobileUIThreshold = parseInt(slideshowSettings.responsive_settings.mobileUIThreshold);
        slideshowSettings.hideArrowsWhenMobile = (slideshowSettings.responsive_settings.hideArrowsWhenMobile == 1) ? true : false;
        slideshowSettings.hideArrowsThreshold = parseInt(slideshowSettings.responsive_settings.hideArrowsThreshold);
        slideshowSettings.useCSSMaxWidth = parseInt(slideshowSettings.responsive_settings.useCSSMaxWidth);
        slideshowSettings.swipe = (slideshowSettings.responsive_settings.swipe == 1) ? true : false;

        slideshowSettings.targetId = '#' + $(fullId + " :first").attr('id');
        slideshowContainer = $(slideshowSettings.targetId);
//alert('fullId : ' + fullId);
//alert(JSON.stringify(slideshowContainer));
        // Check if liquidSlider has been loaded.
        if (!jQuery.isFunction(slideshowContainer.liquidSlider)) {
          return;
        }

// preloader at true do stop to load ? ...

        slideshowContainer.liquidSlider({

          autoHeight:slideshowSettings.autoHeight,
          autoHeightMin:slideshowSettings.autoHeightMin,
          autoHeightEaseDuration:slideshowSettings.autoHeightEaseDuration,

          autoSlideInterval:slideshowSettings.autoSlideInterval,
          autoSlideControls:slideshowSettings.autoSlideControls,
          autoSlide:slideshowSettings.autoSlide,
          autoSliderDirection:slideshowSettings.autoSliderDirection,
          autoSlideStartText:slideshowSettings.autoSlideStartText,
          autoSlideStopText:slideshowSettings.autoSlideStopText,
          forceAutoSlide:slideshowSettings.autoSlideStopWhenClicked,
          pauseOnHover:slideshowSettings.autoSlidePauseOnHover,

          dynamicTabs:slideshowSettings.dynamicTabs,
          dynamicTabsAlign:slideshowSettings.dynamicTabsAlign,
          dynamicTabsPosition:slideshowSettings.dynamicTabsPosition,
          panelTitleSelector:slideshowSettings.panelTitleSelector,

          dynamicArrows:slideshowSettings.dynamicArrows,
          hoverArrows:slideshowSettings.hoverArrows,

          responsive:slideshowSettings.responsive,
          mobileNavigation:slideshowSettings.mobileNavigation,
          mobileNavDefaultText:slideshowSettings.mobileNavDefaultText,
          mobileUIThreshold:slideshowSettings.mobileUIThreshold,
          hideArrowsWhenMobile:slideshowSettings.hideArrowsWhenMobile,
          hideArrowsThreshold:slideshowSettings.hideArrowsThreshold,
          useCSSMaxWidth:slideshowSettings.useCSSMaxWidth,
          swipe:slideshowSettings.swipe,

          hashLinking:false,
          crossLinks:false,
          preloader:false,
        });
      });
    }
  };
})(jQuery);
;
/*!
 *  Liquid Slider v2.0.12
 *  http://liquidslider.com
 *  GPL license
 */

// See https://github.com/KevinBatdorf/liquidslider for version updates

/*jslint bitwise: true, browser: true */
/*global $, jQuery */
/*jshint unused:false, curly:false */

// Utility for creating objects in older browsers
if (typeof Object.create !== 'function') {
  Object.create = function(obj) {
    "use strict";
    function F() {}
    F.prototype = obj;
    return new F();
  };
}
(function($, window, document, undefined) {
  "use strict";
  var Slider = {
    //initialize

    makeResponsive: function() {
      var self = this;
      // Adjust widths and add classes to make responsive
      $(self.sliderId + '-wrapper').addClass('ls-responsive').css({
        'max-width': $(self.sliderId + ' .panel:first-child').width(),
        'width': '100%'
      });
      // Update widths
      $(self.sliderId + ' .panel-container').css('width', 100 * self.panelCountTotal + self.pSign);
      $(self.sliderId + ' .panel').css('width', 100 / self.panelCountTotal + self.pSign);

      // Cache the padding for add/removing arrows
      if (self.options.hideArrowsWhenMobile) {
        self.leftWrapperPadding = $(self.sliderId + '-wrapper').css('padding-left');
        self.rightWrapperPadding = (self.$sliderWrap).css('padding-right');
      }
      // Set events and fire on browser resize
      self.responsiveEvents();
      $(window).bind('resize', function() {
        self.responsiveEvents();

        clearTimeout(self.resizingTimeout);
        self.resizingTimeout = setTimeout(function() {
          var height = (self.options.autoHeight) ? self.getHeight() : self.getHeighestPanel(self.nextPanel);
          self.adjustHeight(false, height);
        }, 500);
      });
    },

    responsiveEvents: function() {
      var self = this,
        mobileNavChangeOver = (self.options.hideArrowsThreshold ||
          self.options.mobileUIThreshold ||
          (self.totalNavWidth + 10));
      // Since we are resizing, let's simply test the width
      if ((self.$sliderId).outerWidth() < mobileNavChangeOver) {
        if (self.options.mobileNavigation) {
          (self.navigation).css('display', 'none');
          (self.dropdown).css('display', 'block');
          (self.dropdownSelect).css('display', 'block');
          // Update the navigation
          $(self.sliderId + '-nav-select').val(self.options.mobileNavDefaultText);
        }
        if (self.options.dynamicArrows) {
          if (self.options.hideArrowsWhenMobile) {
            (self.leftArrow).remove().length = 0;
            (self.rightArrow).remove().length = 0;
          } else if (!self.options.dynamicArrowsGraphical) {
            // If using text arrows, let's move them to the top
            (self.leftArrow).css('margin-' + self.options.dynamicTabsPosition, '0');
            (self.rightArrow).css('margin-' + self.options.dynamicTabsPosition, '0');
          }
        }
      } else {
        if (self.options.mobileNavigation) {
          (self.navigation).css('display', 'block');
          (self.dropdown).css('display', 'none');
          (self.dropdownSelect).css('display', 'none');
        }
        if (self.options.dynamicArrows) {
          if (self.options.hideArrowsWhenMobile &&
            (!(self.leftArrow).length || !(self.rightArrow).length)) {
            self.addArrows();
            self.registerArrows();
          } else if (!self.options.dynamicArrowsGraphical) {
            // Reposition the text arrows
            (self.leftArrow).css('margin-' +
              self.options.dynamicTabsPosition, (self.navigation).css('height'));
            (self.rightArrow).css('margin-' +
              self.options.dynamicTabsPosition, (self.navigation).css('height'));
          }
        }
      }
      // While resizing, set the width to 100%
      $(self.sliderId + '-wrapper').css('width', '100%');

      // Update when the select box changes
      if (self.options.mobileNavigation) {
        (self.dropdownSelect).change(function() {
          self.setNextPanel(parseInt($(this).val().split('tab')[1], 10) - 1);
        });
      }
    },

    addNavigation: function(navClass) {
      var self = this,
        dynamicTabsElm = '<' + self.options.navElementTag + ' class="ls-nav"><ul id="' +
          (self.$elem).attr('id') + '-nav-ul"></ul></' + self.options.navElementTag + '>';
      // Add basic frame
      if (self.options.dynamicTabsPosition === 'bottom') {
        (self.$sliderId).after(dynamicTabsElm);
      } else {
        (self.$sliderId).before(dynamicTabsElm);
      }

      // Add responsive navigation
      if (self.options.mobileNavigation) {
        var selectBoxDefault = (self.options.mobileNavDefaultText) ?
          '<option disabled="disabled" selected="selected">' +
          self.options.mobileNavDefaultText + '</option>' :
          null,
          dropDownList = '<div class="ls-select-box"><select id="' +
            (self.$elem).attr('id') + '-nav-select" name="navigation">' +
            selectBoxDefault + '</select></div>';
        // cache elements
        self.navigation = $(self.sliderId + '-nav-ul').before(dropDownList);
        self.dropdown = $(self.sliderId + '-wrapper .ls-select-box');
        self.dropdownSelect = $(self.sliderId + '-nav-select');

        $.each(
          (self.$elem).find(self.options.panelTitleSelector),
          function(n) {
            $((self.$sliderWrap)).find('.ls-select-box select')
              .append('<option value="tab' + (n + 1) + '">' +
              $(this).text() + '</option>');
          }
        );
      }
      // Add standard navigation
      $.each(
        (self.$elem).find(self.options.panelTitleSelector),
        function(n) {
          $((self.$sliderWrap)).find('.ls-nav ul').append('<li class="tab' +
            (n + 1) + '"><a class="' + ( navClass || '') + '" href="#' +
            (n + 1) + '">' + self.getNavInsides(this) + '</a></li>');
          if (!self.options.includeTitle) $(this).remove();
        }
      );
    },

    getNavInsides: function(input) {
      return (this.options.dynamicTabsHtml) ? $(input).html() : $(input).text();
    },

    alignNavigation: function() {
      var self = this,
        arrow = (self.options.dynamicArrowsGraphical) ? '-arrow' : '';
      // Set the alignment, adjusting for margins
      if (self.options.dynamicTabsAlign !== 'center') {
        if (!self.options.responsive) {
          $((self.$sliderWrap)).find('.ls-nav ul').css(
            'margin-' + self.options.dynamicTabsAlign,
            // Finds the width of the arrows and the margin
            $((self.$sliderWrap)).find(
              '.ls-nav-' +
              self.options.dynamicTabsAlign +
              arrow
            ).outerWidth(true) + parseInt((self.$sliderId)
              .css('margin-' + self.options.dynamicTabsAlign), 10)
          );
        }
        $((self.$sliderWrap)).find('.ls-nav ul').css('float', self.options.dynamicTabsAlign);
      }
      self.totalNavWidth = $((self.$sliderWrap)).find('.ls-nav ul').outerWidth(true);
      if (self.options.dynamicTabsAlign === 'center') {
        // Get total width of the navigation tabs and center it
        self.totalNavWidth = 0;
        $((self.$sliderWrap)).find('.ls-nav li a').each(function() {
          self.totalNavWidth += $(this).outerWidth(true);
        });
        $((self.$sliderWrap)).find('.ls-nav ul').css('width', self.totalNavWidth + 1);
      }
    },

    registerNav: function() {
      var self = this;
      (self.$sliderWrap).find('[class^=ls-nav] li').on('click', function() {
        self.setNextPanel(parseInt($(this).attr('class').split('tab')[1], 10) - 1);
        return false;
      });
    },

    addArrows: function(arrowClass) {
      var self = this,
        arrow = (self.options.dynamicArrowsGraphical) ? "-arrow " : ' ';
      (self.$sliderWrap).addClass("arrows");

      if (self.options.dynamicArrowsGraphical) {
        self.options.dynamicArrowLeftText = '';
        self.options.dynamicArrowRightText = '';
      }
      // Build the arrows
      (self.$sliderId).before('<div class="ls-nav-left' + arrow + (arrowClass || '') +
        '"><a href="#">' +
        self.options.dynamicArrowLeftText + '</a></div>');
      (self.$sliderId).after('<div class="ls-nav-right' + arrow + (arrowClass || '') +
        '"><a href="#">' +
        self.options.dynamicArrowRightText + '</a></div>');

      self.leftArrow = $(self.sliderId + '-wrapper [class^=ls-nav-left]')
        .css('visibility', "hidden").addClass('ls-hidden');
      self.rightArrow = $(self.sliderId + '-wrapper [class^=ls-nav-right]')
        .css('visibility', "hidden").addClass('ls-hidden');
      if (!self.options.hoverArrows) self.hideShowArrows(undefined, true, true, false);
    },

    hideShowArrows: function(speed, forceVisibility, showBoth, hideBoth) {
      var self = this,
        fadeOut = (typeof speed !== 'undefined') ? speed : self.options.fadeOutDuration,
        fadeIn = (typeof speed !== 'undefined') ? speed : self.options.fadeInDuration,
        visibility = forceVisibility ? "visible" : "hidden";

      if (!showBoth && (hideBoth || (self.sanatizeNumber(self.nextPanel) === 1))) {
        self.leftArrow.stop().fadeTo(fadeOut, 0, function() {
          $(this).css('visibility', visibility).addClass('ls-hidden');
        });
      } else if (showBoth || self.leftArrow.hasClass('ls-hidden')) {
        self.leftArrow.stop().css('visibility', "visible").fadeTo(fadeIn, 1).removeClass('ls-hidden');
      }
      if (!showBoth && (hideBoth || (self.sanatizeNumber(self.nextPanel) === self.panelCount))) {
        self.rightArrow.stop().fadeTo(fadeOut, 0, function() {
          $(this).css('visibility', visibility).addClass('ls-hidden');
        });
      } else if (showBoth || self.rightArrow.hasClass('ls-hidden')) {
        self.rightArrow.stop().css('visibility', "visible").fadeTo(fadeIn, 1).removeClass('ls-hidden');
      }
    },

    registerArrows: function() {
      var self = this;
      $((self.$sliderWrap).find('[class^=ls-nav-]')).on('click', function() {
        self.setNextPanel($(this).attr('class').split(' ')[0].split('-')[2]);
      });
    },

    registerCrossLinks: function() {
      var self = this;
      // Find cross links
      self.crosslinks = $('[data-liquidslider-ref*=' + (self.sliderId).split('#')[1] + ']');
      (self.crosslinks).on('click', function(e) {
        if (self.options.autoSlide === true)
          self.startAutoSlide(true);
        self.setNextPanel(self.getPanelNumber(($(this).attr('href').split('#')[1]), self.options.panelTitleSelector));
        e.preventDefault();
      });
      self.updateClass();
    },

    registerTouch: function() {
      var self = this,
      args = self.options.swipeArgs || {
        fallbackToMouseEvents: false,
        allowPageScroll: "vertical",
        swipe: function(e, dir) {
          if (dir === 'up' || dir === 'down')
            return false;
          // Reverse the swipe direction
          self.swipeDir = (dir === 'left') ? 'right' : 'left';
          self.setNextPanel(self.swipeDir);
        }};
      $(self.sliderId + ' .panel').swipe(args);
    },

    registerKeyboard: function() {
      var self = this;
      $(document).keydown(function(event) {
        var key = event.keyCode || event.which;
        if (event.target.type !== 'textarea' && event.target.type !== 'textbox') {
          // Off the autoSlider
          if (!self.options.forceAutoSlide)
            $(this).trigger('click');
          if (key === self.options.leftKey)
            self.setNextPanel('right');
          if (key === self.options.rightKey)
            self.setNextPanel('left');
          $.each(self.options.panelKeys, function(index, value) {
            if (key === value) {
              self.setNextPanel(index - 1);
            }
          });
        }
      });
    },

    autoSlide: function() {
      var self = this;
      // Can't set the autoSlide slower than the easing ;-)
      if (self.options.autoSlideInterval < self.options.slideEaseDuration) {
        self.options.autoSlideInterval =
          (self.options.slideEaseDuration > self.options.heightEaseDuration) ?
          self.options.slideEaseDuration : self.options.heightEaseDuration;
      }
      self.autoSlideTimeout = setTimeout(function() {
        // Slide left or right
        self.setNextPanel(self.options.autoSlideDirection);
        self.autoSlide();
      }, self.options.autoSlideInterval);
    },

    stopAutoSlide: function() {
      var self = this;
      self.options.autoSlide = false;
      clearTimeout(self.autoSlideTimeout);
    },

    startAutoSlide: function(reset) {
      var self = this;
      self.options.autoSlide = true;
      if (!reset) self.setNextPanel(self.options.autoSlideDirection);
      self.autoSlide(clearTimeout(self.autoSlideTimeout));
    },

    updateHashTags: function() {
      var self = this,
        filtered = (self.nextPanel === self.panelCount) ? 0 : self.nextPanel;
      window.location.hash = self.getFromPanel(self.options.hashTitleSelector, filtered);
    },

    adjustHeight: function(noAnimation, height, easing, duration) {
      var self = this;
      if (noAnimation || self.useCSS) {
        if (noAnimation) self.configureCSSTransitions('0', '0');
        (self.$sliderId).height(height);
        if (noAnimation) self.configureCSSTransitions();
        return;
      }
      (self.$sliderId).animate({
        'height': height + 'px'
      }, {
        easing: easing || self.options.heightEaseFunction,
        duration: duration || self.options.heightEaseDuration,
        queue: false
      });
    },

    getHeight: function(height) {
      var self = this;
      height = height || self.$panelClass.eq(self.sanatizeNumber(self.nextPanel) - 1).outerHeight(true);
      // If the height in the settings be higher, honor thy
      height = (height < self.options.minHeight) ? self.options.minHeight : height;
      return height;
    },

    addPreloader: function() {
      var self = this;
      $(self.sliderId + '-wrapper').append('<div class="ls-preloader"></div>');
    },

    removePreloader: function() {
      var self = this;
      $(self.sliderId + '-wrapper .ls-preloader').fadeTo('slow', 0, function() {
        $(this).remove();
      });
    },

    init: function(options, elem) {
      var self = this;
      // Cache the element
      self.elem = elem;
      self.$elem = $(elem);

      $('body').removeClass('no-js');

      // Cache the ID and class. This allows for multiple instances with any ID name supplied
      self.sliderId = '#' + (self.$elem).attr('id');
      self.$sliderId = $(self.sliderId);

      // Set the options
      self.options = $.extend({}, $.fn.liquidSlider.options, options);

      // Variable for the % sign if needed (responsive), otherwise px
      self.pSign = (self.options.responsive) ? '%' : 'px';

      if (self.options.responsive) {
        // jQuery or CSS3 ?
        self.determineAnimationType();
      } else {
        // Disable some stuff
        self.options.mobileNavigation = false;
        self.options.hideArrowsWhenMobile = false;
      }

      // If using animate.css, add the class here and disable other options.
      if (self.options.slideEaseFunction === "animate.css") {
        if (!self.useCSS) {
          self.options.slideEaseFunction = self.options.slideEaseFunctionFallback;
        } else {
          self.options.continuous = false;
          self.animateCSS = true;
        }
      }
      // Build the tabs and navigation
      self.build();

      // Register events
      self.events();
      // Fix width
      if (!self.options.responsive && self.options.dynamicArrows)
        self.$sliderWrap.width(self.$sliderId.outerWidth(true) +
          self.leftArrow.outerWidth(true) +
          self.rightArrow.outerWidth(true));

      self.loaded = true;

      $(window).bind("load", function() {
        self.options.preload.call(self);
      });
    },

    build: function() {
      var self = this,
        isAbsolute;
      // Wrap the entire slider unless manually there
      if ((self.$sliderId).parent().attr('class') !== 'ls-wrapper') {
        (self.$sliderId).wrap('<div id="' +
          (self.$elem).attr('id') +
          '-wrapper" class="ls-wrapper"></div>');
      }
      // Cache the wrapper
      self.$sliderWrap = $(self.sliderId + '-wrapper');

      if (self.options.preloader) self.addPreloader();

      // Add the .panel class to the individual panels
      $(self.sliderId).children().addClass((self.$elem).attr('id') + '-panel panel');
      self.panelClass = self.sliderId + ' .' + (self.$elem).attr('id') + '-panel:not(.clone)';
      self.$panelClass = $(self.panelClass);

      // Wrap all panels in a div, and wrap inner content in a div (not backwards compatible)
      (self.$panelClass).wrapAll('<div class="panel-container"></div>');
      (self.$panelClass).wrapInner('<div class="panel-wrapper"></div>');
      self.panelContainer = (self.$panelClass).parent();
      self.$panelContainer = self.panelContainer;

      // If using fade transition, add the class here and disable other options.
      if (self.options.slideEaseFunction === "fade") {
        (self.$panelClass).addClass('fade');
        self.options.continuous = false;
        self.fade = true;
      }

      // Build navigation tabs
      if (self.options.dynamicTabs)
        self.addNavigation();
      else
        self.options.mobileNavigation = false;

      // Build navigation arrows or disable features
      if (self.options.dynamicArrows) {
        self.addArrows();
      } else {
        self.options.hoverArrows = false;
        self.options.hideSideArrows = false;
        self.options.hideArrowsWhenMobile = false;
      }
      // Create a container width to allow for a smooth float right. Won't calculate arrows if absolute
      isAbsolute = ((self.$leftArrow) && (self.$leftArrow).css('position') === 'absolute') ? 0 : 1;

      // Set slider width
      self.totalSliderWidth = (self.$sliderId).outerWidth(true) +
        ($(self.$leftArrow).outerWidth(true)) * isAbsolute +
        ($(self.$rightArrow).outerWidth(true)) * isAbsolute;
      $((self.$sliderWrap)).css('width', self.totalSliderWidth);

      // Align navigation tabs
      if (self.options.dynamicTabs) self.alignNavigation();

      if (self.options.hideSideArrows) self.options.continuous = false;

      // Clone panels if continuous is enabled
      if (self.options.continuous) {
        (self.$panelContainer).prepend((self.$panelContainer).children().last().clone().addClass('clone'));
        (self.$panelContainer).append((self.$panelContainer).children().eq(1).clone().addClass('clone'));
      }
      var clonedCount = (self.options.continuous) ? 2 : 0;

      // Count the number of panels and get the combined width
      self.panelCount = $(self.panelClass).length;
      self.panelCountTotal = (self.fade) ? 1 : self.panelCount + clonedCount;
      self.panelWidth = $(self.panelClass).outerWidth();
      self.totalWidth = self.panelCountTotal * self.panelWidth;

      // Apply the width to the panel container
      $(self.sliderId + ' .panel-container').css('width', self.totalWidth);

      //How far should we slide?
      self.slideDistance = (self.options.responsive) ? 100 : $(self.sliderId).outerWidth();
      if (self.useCSS) {
        self.totalWidth = 100 * self.panelCountTotal;
        self.slideDistance = 100 / self.panelCountTotal;
      }
      // Make responsive
      if (self.options.responsive) self.makeResponsive();

      // Apply starting position
      self.prepareTransition(self.getFirstPanel(), true);

      // Update the class
      self.updateClass();
    },

    determineAnimationType: function() {
      var self = this,
        animationstring = 'animation',
        keyframeprefix = '',
        domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
        pfx = '',
        i = 0;
      // Decide whether or not to use CSS transitions or jQuery
      // https://developer.mozilla.org/en-US/docs/CSS/CSS_animations/Detecting_CSS_animation_support
      self.useCSS = false;
      if (self.elem.style.animationName) {
        self.useCSS = true;
      }
      if (self.useCSS === false) {
        for (i = 0; i < domPrefixes.length; i++) {
          if (self.elem.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            animationstring = pfx + 'Animation';
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            self.useCSS = true;
            break;
          }
        }
      }
      if (document.documentElement.clientWidth > self.options.useCSSMaxWidth) {
        self.useCSS = false;
      }
    },

    configureCSSTransitions: function(slide, height) {
      var self = this,
        slideTransition,
        heightTransition;
      self.easing = {
        // Penner equations
        easeOutCubic: 'cubic-bezier(.215,.61,.355,1)',
        easeInOutCubic: 'cubic-bezier(.645,.045,.355,1)',
        easeInCirc: 'cubic-bezier(.6,.04,.98,.335)',
        easeOutCirc: 'cubic-bezier(.075,.82,.165,1)',
        easeInOutCirc: 'cubic-bezier(.785,.135,.15,.86)',
        easeInExpo: 'cubic-bezier(.95,.05,.795,.035)',
        easeOutExpo: 'cubic-bezier(.19,1,.22,1)',
        easeInOutExpo: 'cubic-bezier(1,0,0,1)',
        easeInQuad: 'cubic-bezier(.55,.085,.68,.53)',
        easeOutQuad: 'cubic-bezier(.25,.46,.45,.94)',
        easeInOutQuad: 'cubic-bezier(.455,.03,.515,.955)',
        easeInQuart: 'cubic-bezier(.895,.03,.685,.22)',
        easeOutQuart: 'cubic-bezier(.165,.84,.44,1)',
        easeInOutQuart: 'cubic-bezier(.77,0,.175,1)',
        easeInQuint: 'cubic-bezier(.755,.05,.855,.06)',
        easeOutQuint: 'cubic-bezier(.23,1,.32,1)',
        easeInOutQuint: 'cubic-bezier(.86,0,.07,1)',
        easeInSine: 'cubic-bezier(.47,0,.745,.715)',
        easeOutSine: 'cubic-bezier(.39,.575,.565,1)',
        easeInOutSine: 'cubic-bezier(.445,.05,.55,.95)',
        easeInBack: 'cubic-bezier(.6,-.28,.735,.045)',
        easeOutBack: 'cubic-bezier(.175,.885,.32,1.275)',
        easeInOutBack: 'cubic-bezier(.68,-.55,.265,1.55)'
      };
      // Build a CSS class depending on the type of transition
      if (self.useCSS) {
        slideTransition = 'all ' + (slide || self.options.slideEaseDuration) + 'ms ' +
          self.easing[self.options.slideEaseFunction];
        heightTransition = 'all ' + (height || self.options.heightEaseDuration) + 'ms ' +
          self.easing[self.options.heightEaseFunction];
        // Build the width transition rules
        $(self.panelContainer).css({
          '-webkit-transition': slideTransition,
          '-moz-transition': slideTransition,
          '-ms-transition': slideTransition,
          '-o-transition': slideTransition,
          'transition': slideTransition
        });
        // Build the height transition rules
        if (self.options.autoHeight) {
          (self.$sliderId).css({
            '-webkit-transition': heightTransition,
            '-moz-transition': heightTransition,
            '-ms-transition': heightTransition,
            '-o-transition': heightTransition,
            'transition': heightTransition
          });
        }
      }
    },
    
    transitionFade: function() {
      var self = this;
      $(self.panelClass).eq(self.nextPanel)
        .fadeTo(self.options.fadeInDuration, 1.0).css('z-index', 1);
      $(self.panelClass).eq(self.prevPanel)
        .fadeTo(self.options.fadeOutDuration, 0).css('z-index', 0);
      self.callback(self.options.callback, true);
    },

    hover: function() {
      var self = this;

      (self.$sliderWrap).hover(
        function() {
          if (self.options.hoverArrows)
            self.hideShowArrows(self.options.fadeInDuration, true, true, false);

          if (self.options.pauseOnHover)
            clearTimeout(self.autoSlideTimeout);
        },
        function() {
          if (self.options.hoverArrows)
            self.hideShowArrows(self.options.fadeOutnDuration, true, false, true);

          if (self.options.pauseOnHover && self.options.autoSlide)
            self.startAutoSlide();
        }
      );
    },

    events: function() {
      var self = this;

      if (self.options.dynamicArrows) self.registerArrows();
      if (self.options.crossLinks) self.registerCrossLinks();
      if (self.options.dynamicTabs) self.registerNav();
      if (self.options.swipe) self.registerTouch();
      if (self.options.keyboardNavigation) self.registerKeyboard();

      // Click to stop autoSlider
      (self.$sliderWrap).find('*').on('click', function() {
        if (self.options.forceAutoSlide)
          self.startAutoSlide(true);
        else if (self.options.autoSlide)
          self.stopAutoSlide();
      });
      self.hover();
    },

    setNextPanel: function(direction) {
      var self = this;
      if (direction === self.nextPanel)
        return;
      self.prevPanel = self.nextPanel;
      if (self.loaded) {
        if (typeof direction === 'number') {
          self.nextPanel = direction;
        } else {
          // "left" = -1; "right" = 1;
          self.nextPanel += (~~(direction === 'right') || -1);
          // If not continuous, slide back at the last or first panel
          if (!self.options.continuous)
            self.nextPanel = (self.nextPanel < 0) ? self.panelCount - 1 : (self.nextPanel % self.panelCount);
        }
      if (self.fade || self.animateCSS)
        self.prepareTransition(self.nextPanel);
      else
        self.verifyPanel();
      }
    },

    getFirstPanel: function() {
      var self = this,
        output;
      // is there a hash tag?
      if (self.options.hashLinking) {
        output = self.getPanelNumber(window.location.hash, self.options.hashTitleSelector);
        // Default to panel 1 if mistyped
        if (typeof(output) !== 'number') {
          output = 0;
        }
      }
      return (output) ? output : self.options.firstPanelToLoad - 1;
    },

    getPanelNumber: function(input, searchTerm) {
      var self = this,
        title,
        output = input.replace('#', '').toLowerCase();
      // Return the num that matches the panel, or return whats given.
      (self.$panelClass).each(function(i) {
        title = self.convertRegex($(this).find(searchTerm).text());
        if (title === output) {
          output = i + 1;
        }
      });
      return (parseInt(output, 10) ? parseInt(output, 10) - 1 : output);
    },

    getFromPanel: function(searchTerm, panelNumber) {
      var self = this;
      // Return string that matches selector.
      return self.convertRegex(self.$panelClass.find(searchTerm).eq(panelNumber).text());
    },

    convertRegex: function(input) {
      return input
      .replace(/[^\w -]+/g,'')
      .replace(/ +/g,'-')
      .toLowerCase();
    },

    updateClass: function() {
      var self = this;
      if (self.options.dynamicTabs) {
        $((self.$sliderWrap)).find('.tab' + self.sanatizeNumber(self.nextPanel) + ':first a')
          .addClass('current')
          .parent().siblings().children().removeClass('current');
      }
      // Add current class to cross linked Tabs
      if (self.options.crossLinks && self.crosslinks) {
        (self.crosslinks).not(self.nextPanel).removeClass('currentCrossLink');
        (self.crosslinks).each(function() {
          if ($(this).attr('href') === ('#' +
            self.getFromPanel(self.options.panelTitleSelector, self.sanatizeNumber(self.nextPanel) - 1))) {
              $(this).addClass('currentCrossLink');
          }
       });
      }
      // Set current panel class
      self.$panelClass.eq(self.nextPanel)
          .addClass('currentPanel')
          .siblings().removeClass('currentPanel');
    },

    sanatizeNumber: function(panel) {
      var self = this;
      // spits out real numbers, 1-based
      if (panel >= self.panelCount) {
        return 1;
      } else if (panel <= -1) {
        return self.panelCount;
      } else {
        return panel + 1;
      }
    },

    finalize: function() {
      var self = this;
      // Adjust the height again
      var height = (self.options.autoHeight) ? self.getHeight() : self.getHeighestPanel(self.nextPanel);
      if (self.options.autoHeight)
        self.adjustHeight(true, height);
      if (self.options.autoSlide) self.autoSlide();
      if (self.options.preloader) self.removePreloader();
      self.onload();
    },

    callback: function(callbackFn, isFade) {
      var self = this;
      if (callbackFn && self.loaded) {
        if (self.useCSS && typeof isFade !== 'undefined') {
          $('.panel-container').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
            function(e) {
              callbackFn.call(self);
            });
        } else {
          setTimeout(function() {
            callbackFn.call(self);
          }, self.options.slideEaseDuration + 50);
        }
      }
    },

    onload: function() {
      var self = this;
      self.options.onload.call(self);
    },

    prepareTransition: function(nextPanel, noAnimation, noPretransition, noPosttransition) {
      var self = this;
      // Override panel
      self.nextPanel = nextPanel || 0;
      // Option to not update classes, etc
      if (!noPretransition) self.pretransition(self.options.pretransition);
      // stores some variables, then sends to pretransition hook
      self.noAnimation = noAnimation;
      self.noPosttransition = noPosttransition;
      if (!self.loaded)
        self.transition();
      else
        self.options.pretransition.call(self);
    },

    pretransition: function() {
      var self = this,
        marginLeft;
      if (self.options.hashLinking) self.updateHashTags();
      if (self.options.mobileNavigation) self.dropdownSelect.val('tab' + (self.nextPanel + 1));
      if (self.options.hideSideArrows) self.hideShowArrows();
      self.updateClass();
    },

    getTransitionMargin: function() {
      var self = this;
      return -(self.nextPanel * self.slideDistance) -
        (self.slideDistance * ~~(self.options.continuous));
    },

    transition: function() {
      var self = this,
          marginLeft = self.getTransitionMargin();

      if(self.animateCSS && self.loaded) {
        self.transitionOutAnimateCSS();
        return false;
      }

      if ((marginLeft + self.pSign) !== (self.panelContainer).css('margin-left') || (marginLeft !== -100)) {
        if (self.options.autoHeight && !self.animateCSS)
          self.adjustHeight(true, self.getHeight());
        // SLIDE!
        if (self.fade)
          self.transitionFade();
        else if (self.animateCSS)
          self.transitionInAnimateCSS(marginLeft);
        else if (self.useCSS)
          self.transitionCSS(marginLeft, self.noAnimation);
        else
          self.transitionjQuery(marginLeft, self.noAnimation);
      }
      if (!self.noPosttransition) self.callback(self.options.callback);
    },

    transitionOutAnimateCSS: function() {
      var self = this;
      $(self.panelClass).removeClass(self.options.animateIn + ' animated');
      $(self.panelClass).eq(self.prevPanel).addClass('animated ' + self.options.animateOut);
      self.callback(self.transitionInAnimateCSS, undefined);
    },

    transitionInAnimateCSS: function() {
      var self = this;
      if (self.options.autoHeight)
        self.adjustHeight(false, self.getHeight());
      self.transitionCSS(self.getTransitionMargin(), !self.loaded);
      $(self.panelClass).removeClass(self.options.animateOut + ' animated');
      $(self.panelClass).eq(self.nextPanel).addClass('animated ' + self.options.animateIn);
      self.callback(self.options.callback, undefined);
    },

    transitionCSS: function(marginLeft, noAnimation) {
      var self = this;
      if (noAnimation) self.configureCSSTransitions('0', '0');
      (self.panelContainer).css({
        '-webkit-transform': 'translate3d(' + marginLeft + self.pSign + ', 0, 0)',
        '-moz-transform': 'translate3d(' + marginLeft + self.pSign + ', 0, 0)',
        '-ms-transform': 'translate3d(' + marginLeft + self.pSign + ', 0, 0)',
        '-o-transform': 'translate3d(' + marginLeft + self.pSign + ', 0, 0)',
        'transform': 'translate3d(' + marginLeft + self.pSign + ', 0, 0)'
      });
      // Reset transitions
      if (noAnimation)
        self.callback(function() {
          self.configureCSSTransitions();
        });
      else
        self.configureCSSTransitions();
    },

    transitionjQuery: function(marginLeft, noAnimation) {
      var self = this;
      if (noAnimation) {
        (self.panelContainer).css('margin-left', marginLeft + self.pSign);
      } else {
        (self.panelContainer).animate({
          'margin-left': marginLeft + self.pSign
        }, {
          easing: self.options.slideEaseFunction,
          duration: self.options.slideEaseDuration,
          queue: false //,
          //complete: function () {

          //}
        });
      }
    },

    getHeighestPanel: function() {
      var self = this, height, heighest = 0;
      self.$panelClass.each(function() {
        height = $(this).outerHeight(true);
        heighest = (height > heighest) ? height : heighest;
      });
      if (!self.options.autoHeight) return heighest;
    },

    verifyPanel: function() {
      // Basically checks if we need to jump panels
      var self = this,
        clickable = false;

      // Continuous slide required careful clicking
      if (self.options.continuous) {
        // If they click beyond, run it through again.
        if (self.nextPanel > self.panelCount) {
          self.nextPanel = self.panelCount;
          self.setNextPanel(self.panelCount);
        } else if (self.nextPanel < -1) {
          self.nextPanel = -1;
          self.setNextPanel(-1);
        } else if ((!clickable) && ((self.nextPanel === self.panelCount) || (self.nextPanel === -1))) {
          // If on the edge, transport them across
          self.prepareTransition(self.nextPanel);
          self.updateClass();
          clearTimeout(cloneJumper);
          var cloneJumper = setTimeout(function() {
            // But wait first until all is rested
            if (self.nextPanel === self.panelCount) {
              self.prepareTransition(0, true, true, true);
            } else if (self.nextPanel === -1) {
              self.prepareTransition(self.panelCount - 1, true, true, true);
            }
          }, self.options.slideEaseDuration + 50);
        } else {
          clickable = true;
          self.prepareTransition(self.nextPanel);
        }
      } else {
        // Non-continuous just needs to stay in bounds
        if (self.nextPanel === self.panelCount) {
          self.nextPanel = 0;
        } else if (self.nextPanel === -1) {
          self.nextPanel = (self.panelCount - 1);
        }
        self.prepareTransition(self.nextPanel);
      }
    }
  };

  $.fn.liquidSlider = function(options) {
    return this.each(function() {
      var slider = Object.create(Slider);
      slider.init(options, this);
      $.data(this, 'liquidSlider', slider);
    });
  };

  $.fn.liquidSlider.options = {
    autoHeight: true,
    minHeight: 0,
    heightEaseDuration: 1500,
    heightEaseFunction: "easeInOutExpo",

    slideEaseDuration: 1500,
    slideEaseFunction: "easeInOutExpo",
    slideEaseFunctionFallback: "easeInOutExpo",
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    continuous: true,
    fadeInDuration: 500,
    fadeOutDuration: 500,

    autoSlide: false,
    autoSlideDirection: 'right',
    autoSlideInterval: 6000,
    forceAutoSlide: false,
    pauseOnHover: false,

    dynamicArrows: true,
    dynamicArrowsGraphical: true,
    dynamicArrowLeftText: "&#171; left",
    dynamicArrowRightText: "right &#187;",
    hideSideArrows: false,
    hideSideArrowsDuration: 750,
    hoverArrows: true,
    hoverArrowDuration: 250,

    dynamicTabs: true,
    dynamicTabsHtml: true,
    includeTitle: true,
    panelTitleSelector: ".title",
    dynamicTabsAlign: "left",
    dynamicTabsPosition: "top",
    navElementTag: "div",

    firstPanelToLoad: 1,
    crossLinks: false,
    hashLinking: false,
    hashTitleSelector: ".title",

    keyboardNavigation: false,
    leftKey: 39,
    rightKey: 37,
    panelKeys: {
      1: 49,
      2: 50,
      3: 51,
      4: 52
    },

    responsive: true,
    mobileNavigation: true,
    mobileNavDefaultText: 'Menu',
    mobileUIThreshold: 0,
    hideArrowsWhenMobile: true,
    hideArrowsThreshold: 0,
    useCSSMaxWidth: 2200,

    preload: function() {
      this.finalize();
    },
    onload: function() {},
    pretransition: function() {
      this.transition();
    },
    callback: function() {},

    preloader: false,
    swipe: true,
    swipeArgs: undefined
  };

})(jQuery, window, document);;
/*!
* jQuery Cycle2; version: 2.0.2 build: 20140114
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
(function(e){"use strict";function t(e){return(e||"").toLowerCase()}var i="2.0.2";e.fn.cycle=function(i){var n;return 0!==this.length||e.isReady?this.each(function(){var n,s,o,c,r=e(this),a=e.fn.cycle.log;if(!r.data("cycle.opts")){(r.data("cycle-log")===!1||i&&i.log===!1||s&&s.log===!1)&&(a=e.noop),a("--c2 init--"),n=r.data();for(var l in n)n.hasOwnProperty(l)&&/^cycle[A-Z]+/.test(l)&&(c=n[l],o=l.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),a(o+":",c,"("+typeof c+")"),n[o]=c);s=e.extend({},e.fn.cycle.defaults,n,i||{}),s.timeoutId=0,s.paused=s.paused||!1,s.container=r,s._maxZ=s.maxZ,s.API=e.extend({_container:r},e.fn.cycle.API),s.API.log=a,s.API.trigger=function(e,t){return s.container.trigger(e,t),s.API},r.data("cycle.opts",s),r.data("cycle.API",s.API),s.API.trigger("cycle-bootstrap",[s,s.API]),s.API.addInitialSlides(),s.API.preInitSlideshow(),s.slides.length&&s.API.initSlideshow()}}):(n={s:this.selector,c:this.context},e.fn.cycle.log("requeuing slideshow (dom not ready)"),e(function(){e(n.s,n.c).cycle(i)}),this)},e.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var t=this.opts(),i=t.slides;t.slideCount=0,t.slides=e(),i=i.jquery?i:t.container.find(i),t.random&&i.sort(function(){return Math.random()-.5}),t.API.add(i)},preInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-pre-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.preInit)&&i.preInit(t),t._preInitialized=!0},postInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-post-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.postInit)&&i.postInit(t)},initSlideshow:function(){var t,i=this.opts(),n=i.container;i.API.calcFirstSlide(),"static"==i.container.css("position")&&i.container.css("position","relative"),e(i.slides[i.currSlide]).css("opacity",1).show(),i.API.stackSlides(i.slides[i.currSlide],i.slides[i.nextSlide],!i.reverse),i.pauseOnHover&&(i.pauseOnHover!==!0&&(n=e(i.pauseOnHover)),n.hover(function(){i.API.pause(!0)},function(){i.API.resume(!0)})),i.timeout&&(t=i.API.getSlideOpts(i.currSlide),i.API.queueTransition(t,t.timeout+i.delay)),i._initialized=!0,i.API.updateView(!0),i.API.trigger("cycle-initialized",[i]),i.API.postInitSlideshow()},pause:function(t){var i=this.opts(),n=i.API.getSlideOpts(),s=i.hoverPaused||i.paused;t?i.hoverPaused=!0:i.paused=!0,s||(i.container.addClass("cycle-paused"),i.API.trigger("cycle-paused",[i]).log("cycle-paused"),n.timeout&&(clearTimeout(i.timeoutId),i.timeoutId=0,i._remainingTimeout-=e.now()-i._lastQueue,(0>i._remainingTimeout||isNaN(i._remainingTimeout))&&(i._remainingTimeout=void 0)))},resume:function(e){var t=this.opts(),i=!t.hoverPaused&&!t.paused;e?t.hoverPaused=!1:t.paused=!1,i||(t.container.removeClass("cycle-paused"),0===t.slides.filter(":animated").length&&t.API.queueTransition(t.API.getSlideOpts(),t._remainingTimeout),t.API.trigger("cycle-resumed",[t,t._remainingTimeout]).log("cycle-resumed"))},add:function(t,i){var n,s=this.opts(),o=s.slideCount,c=!1;"string"==e.type(t)&&(t=e.trim(t)),e(t).each(function(){var t,n=e(this);i?s.container.prepend(n):s.container.append(n),s.slideCount++,t=s.API.buildSlideOpts(n),s.slides=i?e(n).add(s.slides):s.slides.add(n),s.API.initSlide(t,n,--s._maxZ),n.data("cycle.opts",t),s.API.trigger("cycle-slide-added",[s,t,n])}),s.API.updateView(!0),c=s._preInitialized&&2>o&&s.slideCount>=1,c&&(s._initialized?s.timeout&&(n=s.slides.length,s.nextSlide=s.reverse?n-1:1,s.timeoutId||s.API.queueTransition(s)):s.API.initSlideshow())},calcFirstSlide:function(){var e,t=this.opts();e=parseInt(t.startingSlide||0,10),(e>=t.slides.length||0>e)&&(e=0),t.currSlide=e,t.reverse?(t.nextSlide=e-1,0>t.nextSlide&&(t.nextSlide=t.slides.length-1)):(t.nextSlide=e+1,t.nextSlide==t.slides.length&&(t.nextSlide=0))},calcNextSlide:function(){var e,t=this.opts();t.reverse?(e=0>t.nextSlide-1,t.nextSlide=e?t.slideCount-1:t.nextSlide-1,t.currSlide=e?0:t.nextSlide+1):(e=t.nextSlide+1==t.slides.length,t.nextSlide=e?0:t.nextSlide+1,t.currSlide=e?t.slides.length-1:t.nextSlide-1)},calcTx:function(t,i){var n,s=t;return i&&s.manualFx&&(n=e.fn.cycle.transitions[s.manualFx]),n||(n=e.fn.cycle.transitions[s.fx]),n||(n=e.fn.cycle.transitions.fade,s.API.log('Transition "'+s.fx+'" not found.  Using fade.')),n},prepareTx:function(e,t){var i,n,s,o,c,r=this.opts();return 2>r.slideCount?(r.timeoutId=0,void 0):(!e||r.busy&&!r.manualTrump||(r.API.stopTransition(),r.busy=!1,clearTimeout(r.timeoutId),r.timeoutId=0),r.busy||(0!==r.timeoutId||e)&&(n=r.slides[r.currSlide],s=r.slides[r.nextSlide],o=r.API.getSlideOpts(r.nextSlide),c=r.API.calcTx(o,e),r._tx=c,e&&void 0!==o.manualSpeed&&(o.speed=o.manualSpeed),r.nextSlide!=r.currSlide&&(e||!r.paused&&!r.hoverPaused&&r.timeout)?(r.API.trigger("cycle-before",[o,n,s,t]),c.before&&c.before(o,n,s,t),i=function(){r.busy=!1,r.container.data("cycle.opts")&&(c.after&&c.after(o,n,s,t),r.API.trigger("cycle-after",[o,n,s,t]),r.API.queueTransition(o),r.API.updateView(!0))},r.busy=!0,c.transition?c.transition(o,n,s,t,i):r.API.doTransition(o,n,s,t,i),r.API.calcNextSlide(),r.API.updateView()):r.API.queueTransition(o)),void 0)},doTransition:function(t,i,n,s,o){var c=t,r=e(i),a=e(n),l=function(){a.animate(c.animIn||{opacity:1},c.speed,c.easeIn||c.easing,o)};a.css(c.cssBefore||{}),r.animate(c.animOut||{},c.speed,c.easeOut||c.easing,function(){r.css(c.cssAfter||{}),c.sync||l()}),c.sync&&l()},queueTransition:function(t,i){var n=this.opts(),s=void 0!==i?i:t.timeout;return 0===n.nextSlide&&0===--n.loop?(n.API.log("terminating; loop=0"),n.timeout=0,s?setTimeout(function(){n.API.trigger("cycle-finished",[n])},s):n.API.trigger("cycle-finished",[n]),n.nextSlide=n.currSlide,void 0):(s&&(n._lastQueue=e.now(),void 0===i&&(n._remainingTimeout=t.timeout),n.paused||n.hoverPaused||(n.timeoutId=setTimeout(function(){n.API.prepareTx(!1,!n.reverse)},s))),void 0)},stopTransition:function(){var e=this.opts();e.slides.filter(":animated").length&&(e.slides.stop(!1,!0),e.API.trigger("cycle-transition-stopped",[e])),e._tx&&e._tx.stopTransition&&e._tx.stopTransition(e)},advanceSlide:function(e){var t=this.opts();return clearTimeout(t.timeoutId),t.timeoutId=0,t.nextSlide=t.currSlide+e,0>t.nextSlide?t.nextSlide=t.slides.length-1:t.nextSlide>=t.slides.length&&(t.nextSlide=0),t.API.prepareTx(!0,e>=0),!1},buildSlideOpts:function(i){var n,s,o=this.opts(),c=i.data()||{};for(var r in c)c.hasOwnProperty(r)&&/^cycle[A-Z]+/.test(r)&&(n=c[r],s=r.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),o.API.log("["+(o.slideCount-1)+"]",s+":",n,"("+typeof n+")"),c[s]=n);c=e.extend({},e.fn.cycle.defaults,o,c),c.slideNum=o.slideCount;try{delete c.API,delete c.slideCount,delete c.currSlide,delete c.nextSlide,delete c.slides}catch(a){}return c},getSlideOpts:function(t){var i=this.opts();void 0===t&&(t=i.currSlide);var n=i.slides[t],s=e(n).data("cycle.opts");return e.extend({},i,s)},initSlide:function(t,i,n){var s=this.opts();i.css(t.slideCss||{}),n>0&&i.css("zIndex",n),isNaN(t.speed)&&(t.speed=e.fx.speeds[t.speed]||e.fx.speeds._default),t.sync||(t.speed=t.speed/2),i.addClass(s.slideClass)},updateView:function(e,t){var i=this.opts();if(i._initialized){var n=i.API.getSlideOpts(),s=i.slides[i.currSlide];!e&&t!==!0&&(i.API.trigger("cycle-update-view-before",[i,n,s]),0>i.updateView)||(i.slideActiveClass&&i.slides.removeClass(i.slideActiveClass).eq(i.currSlide).addClass(i.slideActiveClass),e&&i.hideNonActive&&i.slides.filter(":not(."+i.slideActiveClass+")").hide(),0===i.updateView&&setTimeout(function(){i.API.trigger("cycle-update-view",[i,n,s,e])},n.speed/(i.sync?2:1)),0!==i.updateView&&i.API.trigger("cycle-update-view",[i,n,s,e]),e&&i.API.trigger("cycle-update-view-after",[i,n,s]))}},getComponent:function(t){var i=this.opts(),n=i[t];return"string"==typeof n?/^\s*[\>|\+|~]/.test(n)?i.container.find(n):e(n):n.jquery?n:e(n)},stackSlides:function(t,i,n){var s=this.opts();t||(t=s.slides[s.currSlide],i=s.slides[s.nextSlide],n=!s.reverse),e(t).css("zIndex",s.maxZ);var o,c=s.maxZ-2,r=s.slideCount;if(n){for(o=s.currSlide+1;r>o;o++)e(s.slides[o]).css("zIndex",c--);for(o=0;s.currSlide>o;o++)e(s.slides[o]).css("zIndex",c--)}else{for(o=s.currSlide-1;o>=0;o--)e(s.slides[o]).css("zIndex",c--);for(o=r-1;o>s.currSlide;o--)e(s.slides[o]).css("zIndex",c--)}e(i).css("zIndex",s.maxZ-1)},getSlideIndex:function(e){return this.opts().slides.index(e)}},e.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},e.fn.cycle.version=function(){return"Cycle2: "+i},e.fn.cycle.transitions={custom:{},none:{before:function(e,t,i,n){e.API.stackSlides(i,t,n),e.cssBefore={opacity:1,display:"block"}}},fade:{before:function(t,i,n,s){var o=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,s),t.cssBefore=e.extend(o,{opacity:0,display:"block"}),t.animIn={opacity:1},t.animOut={opacity:0}}},fadeout:{before:function(t,i,n,s){var o=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,s),t.cssBefore=e.extend(o,{opacity:1,display:"block"}),t.animOut={opacity:0}}},scrollHorz:{before:function(e,t,i,n){e.API.stackSlides(t,i,n);var s=e.container.css("overflow","hidden").width();e.cssBefore={left:n?s:-s,top:0,opacity:1,display:"block"},e.cssAfter={zIndex:e._maxZ-2,left:0},e.animIn={left:0},e.animOut={left:n?-s:s}}}},e.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},e(document).ready(function(){e(e.fn.cycle.defaults.autoSelector).cycle()})})(jQuery),/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
function(e){"use strict";function t(t,n){var s,o,c,r=n.autoHeight;if("container"==r)o=e(n.slides[n.currSlide]).outerHeight(),n.container.height(o);else if(n._autoHeightRatio)n.container.height(n.container.width()/n._autoHeightRatio);else if("calc"===r||"number"==e.type(r)&&r>=0){if(c="calc"===r?i(t,n):r>=n.slides.length?0:r,c==n._sentinelIndex)return;n._sentinelIndex=c,n._sentinel&&n._sentinel.remove(),s=e(n.slides[c].cloneNode(!0)),s.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),s.css({position:"static",visibility:"hidden",display:"block"}).prependTo(n.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),s.find("*").css("visibility","hidden"),n._sentinel=s}}function i(t,i){var n=0,s=-1;return i.slides.each(function(t){var i=e(this).height();i>s&&(s=i,n=t)}),n}function n(t,i,n,s){var o=e(s).outerHeight();i.container.animate({height:o},i.autoHeightSpeed,i.autoHeightEasing)}function s(i,o){o._autoHeightOnResize&&(e(window).off("resize orientationchange",o._autoHeightOnResize),o._autoHeightOnResize=null),o.container.off("cycle-slide-added cycle-slide-removed",t),o.container.off("cycle-destroyed",s),o.container.off("cycle-before",n),o._sentinel&&(o._sentinel.remove(),o._sentinel=null)}e.extend(e.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null}),e(document).on("cycle-initialized",function(i,o){function c(){t(i,o)}var r,a=o.autoHeight,l=e.type(a),d=null;("string"===l||"number"===l)&&(o.container.on("cycle-slide-added cycle-slide-removed",t),o.container.on("cycle-destroyed",s),"container"==a?o.container.on("cycle-before",n):"string"===l&&/\d+\:\d+/.test(a)&&(r=a.match(/(\d+)\:(\d+)/),r=r[1]/r[2],o._autoHeightRatio=r),"number"!==l&&(o._autoHeightOnResize=function(){clearTimeout(d),d=setTimeout(c,50)},e(window).on("resize orientationchange",o._autoHeightOnResize)),setTimeout(c,30))})}(jQuery),/*! caption plugin for Cycle2;  version: 20130306 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),e(document).on("cycle-update-view",function(t,i,n,s){"caption"===i.captionModule&&e.each(["caption","overlay"],function(){var e=this,t=n[e+"Template"],o=i.API.getComponent(e);o.length&&t?(o.html(i.API.tmpl(t,n,i,s)),o.show()):o.hide()})}),e(document).on("cycle-destroyed",function(t,i){var n;e.each(["caption","overlay"],function(){var e=this,t=i[e+"Template"];i[e]&&t&&(n=i.API.getComponent("caption"),n.empty())})})}(jQuery),/*! command plugin for Cycle2;  version: 20130707 */
function(e){"use strict";var t=e.fn.cycle;e.fn.cycle=function(i){var n,s,o,c=e.makeArray(arguments);return"number"==e.type(i)?this.cycle("goto",i):"string"==e.type(i)?this.each(function(){var r;return n=i,o=e(this).data("cycle.opts"),void 0===o?(t.log('slideshow must be initialized before sending commands; "'+n+'" ignored'),void 0):(n="goto"==n?"jump":n,s=o.API[n],e.isFunction(s)?(r=e.makeArray(c),r.shift(),s.apply(o.API,r)):(t.log("unknown command: ",n),void 0))}):t.apply(this,arguments)},e.extend(e.fn.cycle,t),e.extend(t.API,{next:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?-1:1;e.allowWrap===!1&&e.currSlide+t>=e.slideCount||(e.API.advanceSlide(t),e.API.trigger("cycle-next",[e]).log("cycle-next"))}},prev:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?1:-1;e.allowWrap===!1&&0>e.currSlide+t||(e.API.advanceSlide(t),e.API.trigger("cycle-prev",[e]).log("cycle-prev"))}},destroy:function(){this.stop();var t=this.opts(),i=e.isFunction(e._data)?e._data:e.noop;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stop(),t.API.trigger("cycle-destroyed",[t]).log("cycle-destroyed"),t.container.removeData(),i(t.container[0],"parsedAttrs",!1),t.retainStylesOnDestroy||(t.container.removeAttr("style"),t.slides.removeAttr("style"),t.slides.removeClass(t.slideActiveClass)),t.slides.each(function(){e(this).removeData(),i(this,"parsedAttrs",!1)})},jump:function(e){var t,i=this.opts();if(!i.busy||i.manualTrump){var n=parseInt(e,10);if(isNaN(n)||0>n||n>=i.slides.length)return i.API.log("goto: invalid slide index: "+n),void 0;if(n==i.currSlide)return i.API.log("goto: skipping, already on slide",n),void 0;i.nextSlide=n,clearTimeout(i.timeoutId),i.timeoutId=0,i.API.log("goto: ",n," (zero-index)"),t=i.currSlide<i.nextSlide,i.API.prepareTx(!0,t)}},stop:function(){var t=this.opts(),i=t.container;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stopTransition(),t.pauseOnHover&&(t.pauseOnHover!==!0&&(i=e(t.pauseOnHover)),i.off("mouseenter mouseleave")),t.API.trigger("cycle-stopped",[t]).log("cycle-stopped")},reinit:function(){var e=this.opts();e.API.destroy(),e.container.cycle()},remove:function(t){for(var i,n,s=this.opts(),o=[],c=1,r=0;s.slides.length>r;r++)i=s.slides[r],r==t?n=i:(o.push(i),e(i).data("cycle.opts").slideNum=c,c++);n&&(s.slides=e(o),s.slideCount--,e(n).remove(),t==s.currSlide?s.API.advanceSlide(1):s.currSlide>t?s.currSlide--:s.currSlide++,s.API.trigger("cycle-slide-removed",[s,t,n]).log("cycle-slide-removed"),s.API.updateView())}}),e(document).on("click.cycle","[data-cycle-cmd]",function(t){t.preventDefault();var i=e(this),n=i.data("cycle-cmd"),s=i.data("cycle-context")||".cycle-slideshow";e(s).cycle(n,i.data("cycle-arg"))})}(jQuery),/*! hash plugin for Cycle2;  version: 20130905 */
function(e){"use strict";function t(t,i){var n;return t._hashFence?(t._hashFence=!1,void 0):(n=window.location.hash.substring(1),t.slides.each(function(s){if(e(this).data("cycle-hash")==n){if(i===!0)t.startingSlide=s;else{var o=s>t.currSlide;t.nextSlide=s,t.API.prepareTx(!0,o)}return!1}}),void 0)}e(document).on("cycle-pre-initialize",function(i,n){t(n,!0),n._onHashChange=function(){t(n,!1)},e(window).on("hashchange",n._onHashChange)}),e(document).on("cycle-update-view",function(e,t,i){i.hash&&"#"+i.hash!=window.location.hash&&(t._hashFence=!0,window.location.hash=i.hash)}),e(document).on("cycle-destroyed",function(t,i){i._onHashChange&&e(window).off("hashchange",i._onHashChange)})}(jQuery),/*! loader plugin for Cycle2;  version: 20131121 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{loader:!1}),e(document).on("cycle-bootstrap",function(t,i){function n(t,n){function o(t){var o;"wait"==i.loader?(r.push(t),0===l&&(r.sort(c),s.apply(i.API,[r,n]),i.container.removeClass("cycle-loading"))):(o=e(i.slides[i.currSlide]),s.apply(i.API,[t,n]),o.show(),i.container.removeClass("cycle-loading"))}function c(e,t){return e.data("index")-t.data("index")}var r=[];if("string"==e.type(t))t=e.trim(t);else if("array"===e.type(t))for(var a=0;t.length>a;a++)t[a]=e(t[a])[0];t=e(t);var l=t.length;l&&(t.hide().appendTo("body").each(function(t){function c(){0===--a&&(--l,o(d))}var a=0,d=e(this),u=d.is("img")?d:d.find("img");return d.data("index",t),u=u.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),u.length?(a=u.length,u.each(function(){this.complete?c():e(this).load(function(){c()}).on("error",function(){0===--a&&(i.API.log("slide skipped; img not loaded:",this.src),0===--l&&"wait"==i.loader&&s.apply(i.API,[r,n]))})}),void 0):(--l,r.push(d),void 0)}),l&&i.container.addClass("cycle-loading"))}var s;i.loader&&(s=i.API.add,i.API.add=n)})}(jQuery),/*! pager plugin for Cycle2;  version: 20130525 */
function(e){"use strict";function t(t,i,n){var s,o=t.API.getComponent("pager");o.each(function(){var o=e(this);if(i.pagerTemplate){var c=t.API.tmpl(i.pagerTemplate,i,t,n[0]);s=e(c).appendTo(o)}else s=o.children().eq(t.slideCount-1);s.on(t.pagerEvent,function(e){e.preventDefault(),t.API.page(o,e.currentTarget)})})}function i(e,t){var i=this.opts();if(!i.busy||i.manualTrump){var n=e.children().index(t),s=n,o=s>i.currSlide;i.currSlide!=s&&(i.nextSlide=s,i.API.prepareTx(!0,o),i.API.trigger("cycle-pager-activated",[i,e,t]))}}e.extend(e.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerTemplate:"<span>&bull;</span>"}),e(document).on("cycle-bootstrap",function(e,i,n){n.buildPagerLink=t}),e(document).on("cycle-slide-added",function(e,t,n,s){t.pager&&(t.API.buildPagerLink(t,n,s),t.API.page=i)}),e(document).on("cycle-slide-removed",function(t,i,n){if(i.pager){var s=i.API.getComponent("pager");s.each(function(){var t=e(this);e(t.children()[n]).remove()})}}),e(document).on("cycle-update-view",function(t,i){var n;i.pager&&(n=i.API.getComponent("pager"),n.each(function(){e(this).children().removeClass(i.pagerActiveClass).eq(i.currSlide).addClass(i.pagerActiveClass)}))}),e(document).on("cycle-destroyed",function(e,t){var i=t.API.getComponent("pager");i&&(i.children().off(t.pagerEvent),t.pagerTemplate&&i.empty())})}(jQuery),/*! prevnext plugin for Cycle2;  version: 20130709 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),e(document).on("cycle-initialized",function(e,t){if(t.API.getComponent("next").on(t.nextEvent,function(e){e.preventDefault(),t.API.next()}),t.API.getComponent("prev").on(t.prevEvent,function(e){e.preventDefault(),t.API.prev()}),t.swipe){var i=t.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",n=t.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";t.container.on(i,function(){t.API.next()}),t.container.on(n,function(){t.API.prev()})}}),e(document).on("cycle-update-view",function(e,t){if(!t.allowWrap){var i=t.disabledClass,n=t.API.getComponent("next"),s=t.API.getComponent("prev"),o=t._prevBoundry||0,c=void 0!==t._nextBoundry?t._nextBoundry:t.slideCount-1;t.currSlide==c?n.addClass(i).prop("disabled",!0):n.removeClass(i).prop("disabled",!1),t.currSlide===o?s.addClass(i).prop("disabled",!0):s.removeClass(i).prop("disabled",!1)}}),e(document).on("cycle-destroyed",function(e,t){t.API.getComponent("prev").off(t.nextEvent),t.API.getComponent("next").off(t.prevEvent),t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),/*! progressive loader plugin for Cycle2;  version: 20130315 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{progressive:!1}),e(document).on("cycle-pre-initialize",function(t,i){if(i.progressive){var n,s,o=i.API,c=o.next,r=o.prev,a=o.prepareTx,l=e.type(i.progressive);if("array"==l)n=i.progressive;else if(e.isFunction(i.progressive))n=i.progressive(i);else if("string"==l){if(s=e(i.progressive),n=e.trim(s.html()),!n)return;if(/^(\[)/.test(n))try{n=e.parseJSON(n)}catch(d){return o.log("error parsing progressive slides",d),void 0}else n=n.split(RegExp(s.data("cycle-split")||"\n")),n[n.length-1]||n.pop()}a&&(o.prepareTx=function(e,t){var s,o;return e||0===n.length?(a.apply(i.API,[e,t]),void 0):(t&&i.currSlide==i.slideCount-1?(o=n[0],n=n.slice(1),i.container.one("cycle-slide-added",function(e,t){setTimeout(function(){t.API.advanceSlide(1)},50)}),i.API.add(o)):t||0!==i.currSlide?a.apply(i.API,[e,t]):(s=n.length-1,o=n[s],n=n.slice(0,s),i.container.one("cycle-slide-added",function(e,t){setTimeout(function(){t.currSlide=1,t.API.advanceSlide(-1)},50)}),i.API.add(o,!0)),void 0)}),c&&(o.next=function(){var e=this.opts();if(n.length&&e.currSlide==e.slideCount-1){var t=n[0];n=n.slice(1),e.container.one("cycle-slide-added",function(e,t){c.apply(t.API),t.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(t)}else c.apply(e.API)}),r&&(o.prev=function(){var e=this.opts();if(n.length&&0===e.currSlide){var t=n.length-1,i=n[t];n=n.slice(0,t),e.container.one("cycle-slide-added",function(e,t){t.currSlide=1,t.API.advanceSlide(-1),t.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(i,!0)}else r.apply(e.API)})}})}(jQuery),/*! tmpl plugin for Cycle2;  version: 20121227 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),e.extend(e.fn.cycle.API,{tmpl:function(t,i){var n=RegExp(i.tmplRegex||e.fn.cycle.defaults.tmplRegex,"g"),s=e.makeArray(arguments);return s.shift(),t.replace(n,function(t,i){var n,o,c,r,a=i.split(".");for(n=0;s.length>n;n++)if(c=s[n]){if(a.length>1)for(r=c,o=0;a.length>o;o++)c=r,r=r[a[o]]||i;else r=c[i];if(e.isFunction(r))return r.apply(c,s);if(void 0!==r&&null!==r&&r!=i)return r}return i})}})}(jQuery);
//@ sourceMappingURL=jquery.cycle2.js.map;
registerCrossLinks:function(){var f=this;f.crosslinks=d("[data-liquidslider-ref*="+(f.sliderId).split("#")[1]+"]");(f.crosslinks).on("click",function(g){if(f.options.autoSlide===true){f.startAutoSlide(true)}f.setNextPanel(f.getPanelNumber((d(this).attr("href").split("#")[1]),f.options.panelTitleSelector));g.preventDefault()});f.updateClass()},;
init:function(g,h){var f=this;f.elem=h;f.$elem=d(h);d("body").removeClass("no-js");f.sliderId="#"+(f.$elem).attr("id");f.$sliderId=d(f.sliderId);f.options=d.extend({},d.fn.liquidSlider.options,g);f.pSign=(f.options.responsive)?"%":"px";if(f.options.responsive){f.determineAnimationType()}else{f.options.mobileNavigation=false;f.options.hideArrowsWhenMobile=false}if(f.options.slideEaseFunction==="animate.css"){if(!f.useCSS){f.options.slideEaseFunction=f.options.slideEaseFunctionFallback}else{f.options.continuous=false;f.animateCSS=true}}f.build();f.events();if(!f.options.responsive&&f.options.dynamicArrows){f.$sliderWrap.width(f.$sliderId.outerWidth(true)+f.leftArrow.outerWidth(true)+f.rightArrow.outerWidth(true))}f.loaded=true;d(c).bind("load",function(){f.options.preload.call(f)})},build:function(){var f=this,h;if((f.$sliderId).parent().attr("class")!=="ls-wrapper"){(f.$sliderId).wrap('<div id="'+(f.$elem).attr("id")+'-wrapper" class="ls-wrapper"></div>')}f.$sliderWrap=d(f.sliderId+"-wrapper");if(f.options.preloader){f.addPreloader()}d(f.sliderId).children().addClass((f.$elem).attr("id")+"-panel panel");f.panelClass=f.sliderId+" ."+(f.$elem).attr("id")+"-panel:not(.clone)";f.$panelClass=d(f.panelClass);(f.$panelClass).wrapAll('<div class="panel-container"></div>');(f.$panelClass).wrapInner('<div class="panel-wrapper"></div>');f.panelContainer=(f.$panelClass).parent();f.$panelContainer=f.panelContainer;if(f.options.slideEaseFunction==="fade"){(f.$panelClass).addClass("fade");f.options.continuous=false;f.fade=true}if(f.options.dynamicTabs){f.addNavigation()}else{f.options.mobileNavigation=false}if(f.options.dynamicArrows){f.addArrows()}else{f.options.hoverArrows=false;f.options.hideSideArrows=false;f.options.hideArrowsWhenMobile=false}h=((f.$leftArrow)&&(f.$leftArrow).css("position")==="absolute")?0:1;f.totalSliderWidth=(f.$sliderId).outerWidth(true)+(d(f.$leftArrow).outerWidth(true))*h+(d(f.$rightArrow).outerWidth(true))*h;d((f.$sliderWrap)).css("width",f.totalSliderWidth);if(f.options.dynamicTabs){f.alignNavigation()}if(f.options.hideSideArrows){f.options.continuous=false}if(f.options.continuous){(f.$panelContainer).prepend((f.$panelContainer).children().last().clone().addClass("clone"));(f.$panelContainer).append((f.$panelContainer).children().eq(1).clone().addClass("clone"))}var g=(f.options.continuous)?2:0;f.panelCount=d(f.panelClass).length;f.panelCountTotal=(f.fade)?1:f.panelCount+g;f.panelWidth=d(f.panelClass).outerWidth();f.totalWidth=f.panelCountTotal*f.panelWidth;d(f.sliderId+" .panel-container").css("width",f.totalWidth);f.slideDistance=(f.options.responsive)?100:d(f.sliderId).outerWidth();if(f.useCSS){f.totalWidth=100*f.panelCountTotal;f.slideDistance=100/f.panelCountTotal}if(f.options.responsive){f.makeResponsive()}f.prepareTransition(f.getFirstPanel(),true);f.updateClass()},determineAnimationType:function(){var f=this,l="animation",j="",h="Webkit Moz O ms Khtml".split(" "),k="",g=0;f.useCSS=false;if(f.elem.style.animationName){f.useCSS=true}if(f.useCSS===false){for(g=0;g<h.length;g++){if(f.elem.style[h[g]+"AnimationName"]!==e){k=h[g];l=k+"Animation";j="-"+k.toLowerCase()+"-";f.useCSS=true;break}}}if(a.documentElement.clientWidth>f.options.useCSSMaxWidth){f.useCSS=false}},configureCSSTransitions:function(g,f){var h=this,i,j;h.easing={easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175,.885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};if(h.useCSS){i="all "+(g||h.options.slideEaseDuration)+"ms "+h.easing[h.options.slideEaseFunction];j="all "+(f||h.options.heightEaseDuration)+"ms "+h.easing[h.options.heightEaseFunction];d(h.panelContainer).css({"-webkit-transition":i,"-moz-transition":i,"-ms-transition":i,"-o-transition":i,transition:i});if(h.options.autoHeight){(h.$sliderId).css({"-webkit-transition":j,"-moz-transition":j,"-ms-transition":j,"-o-transition":j,transition:j})}}},transitionFade:function(){var f=this;d(f.panelClass).eq(f.nextPanel).fadeTo(f.options.fadeInDuration,1).css("z-index",1);d(f.panelClass).eq(f.prevPanel).fadeTo(f.options.fadeOutDuration,0).css("z-index",0);f.callback(f.options.callback,true)},hover:function(){var f=this;(f.$sliderWrap).hover(function(){if(f.options.hoverArrows){f.hideShowArrows(f.options.fadeInDuration,true,true,false)}if(f.options.pauseOnHover){clearTimeout(f.autoSlideTimeout)}},function(){if(f.options.hoverArrows){f.hideShowArrows(f.options.fadeOutnDuration,true,false,true)}if(f.options.pauseOnHover&&f.options.autoSlide){f.startAutoSlide()}})},events:function(){var f=this;if(f.options.dynamicArrows){f.registerArrows()}if(f.options.crossLinks){f.registerCrossLinks()}if(f.options.dynamicTabs){f.registerNav()}if(f.options.swipe){f.registerTouch()}if(f.options.keyboardNavigation){f.registerKeyboard()}(f.$sliderWrap).find("*").on("click",function(){if(f.options.forceAutoSlide){f.startAutoSlide(true)}else{if(f.options.autoSlide){f.stopAutoSlide()}}});f.hover()},setNextPanel:function(g){var f=this;if(g===f.nextPanel){return}f.prevPanel=f.nextPanel;if(f.loaded){if(typeof g==="number"){f.nextPanel=g}else{f.nextPanel+=(~~(g==="right")||-1);if(!f.options.continuous){f.nextPanel=(f.nextPanel<0)?f.panelCount-1:(f.nextPanel%f.panelCount)}}if(f.fade||f.animateCSS){f.prepareTransition(f.nextPanel)}else{f.verifyPanel()}}},getFirstPanel:function(){var g=this,f;if(g.options.hashLinking){f=g.getPanelNumber(c.location.hash,g.options.hashTitleSelector);if(typeof(f)!=="number"){f=0}}return(f)?f:g.options.firstPanelToLoad-1},getPanelNumber:function(i,h){var g=this,j,f=i.replace("#","").toLowerCase();(g.$panelClass).each(function(k){j=g.convertRegex(d(this).find(h).text());if(j===f){f=k+1}});return(parseInt(f,10)?parseInt(f,10)-1:f)},getFromPanel:function(g,h){var f=this;return f.convertRegex(f.$panelClass.find(g).eq(h).text())},convertRegex:function(f){return f.replace(/[^\w -]+/g,"").replace(/ +/g,"-").toLowerCase()},updateClass:function(){var f=this;if(f.options.dynamicTabs){d((f.$sliderWrap)).find(".tab"+f.sanatizeNumber(f.nextPanel)+":first a").addClass("current").parent().siblings().children().removeClass("current")}if(f.options.crossLinks&&f.crosslinks){(f.crosslinks).not(f.nextPanel).removeClass("currentCrossLink");(f.crosslinks).each(function(){if(d(this).attr("href")===("#"+f.getFromPanel(f.options.panelTitleSelector,f.sanatizeNumber(f.nextPanel)-1))){d(this).addClass("currentCrossLink")}})}f.$panelClass.eq(f.nextPanel).addClass("currentPanel").siblings().removeClass("currentPanel")},sanatizeNumber:function(f){var g=this;if(f>=g.panelCount){return 1}else{if(f<=-1){return g.panelCount}else{return f+1}}},finalize:function(){var g=this;var f=(g.options.autoHeight)?g.getHeight():g.getHeighestPanel(g.nextPanel);if(g.options.autoHeight){g.adjustHeight(true,f)}if(g.options.autoSlide){g.autoSlide()}if(g.options.preloader){g.removePreloader()}g.onload()},callback:function(g,h){var f=this;if(g&&f.loaded){if(f.useCSS&&typeof h!=="undefined"){d(".panel-container").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(i){g.call(f)})}else{setTimeout(function(){g.call(f)},f.options.slideEaseDuration+50)}}},onload:function(){var f=this;f.options.onload.call(f)},prepareTransition:function(j,h,g,i){var f=this;f.nextPanel=j||0;if(!g){f.pretransition(f.options.pretransition)}f.noAnimation=h;f.noPosttransition=i;if(!f.loaded){f.transition()}else{f.options.pretransition.call(f)}},pretransition:function(){var f=this,g;if(f.options.hashLinking){f.updateHashTags()}if(f.options.mobileNavigation){f.dropdownSelect.val("tab"+(f.nextPanel+1))}if(f.options.hideSideArrows){f.hideShowArrows()}f.updateClass()},getTransitionMargin:function(){var f=this;return -(f.nextPanel*f.slideDistance)-(f.slideDistance*~~(f.options.continuous))},transition:function(){var f=this,g=f.getTransitionMargin();if(f.animateCSS&&f.loaded){f.transitionOutAnimateCSS();return false}if((g+f.pSign)!==(f.panelContainer).css("margin-left")||(g!==-100)){if(f.options.autoHeight&&!f.animateCSS){f.adjustHeight(true,f.getHeight())}if(f.fade){f.transitionFade()}else{if(f.animateCSS){f.transitionInAnimateCSS(g)}else{if(f.useCSS){f.transitionCSS(g,f.noAnimation)}else{f.transitionjQuery(g,f.noAnimation)}}}}if(!f.noPosttransition){f.callback(f.options.callback)}},transitionOutAnimateCSS:function(){var f=this;d(f.panelClass).removeClass(f.options.animateIn+" animated");d(f.panelClass).eq(f.prevPanel).addClass("animated "+f.options.animateOut);f.callback(f.transitionInAnimateCSS,e)},transitionInAnimateCSS:function(){var f=this;if(f.options.autoHeight){f.adjustHeight(false,f.getHeight())}f.transitionCSS(f.getTransitionMargin(),!f.loaded);d(f.panelClass).removeClass(f.options.animateOut+" animated");d(f.panelClass).eq(f.nextPanel).addClass("animated "+f.options.animateIn);f.callback(f.options.callback,e)},transitionCSS:function(h,g){var f=this;if(g){f.configureCSSTransitions("0","0")}(f.panelContainer).css({"-webkit-transform":"translate3d("+h+f.pSign+", 0, 0)","-moz-transform":"translate3d("+h+f.pSign+", 0, 0)","-ms-transform":"translate3d("+h+f.pSign+", 0, 0)","-o-transform":"translate3d("+h+f.pSign+", 0, 0)",transform:"translate3d("+h+f.pSign+", 0, 0)"});if(g){f.callback(function(){f.configureCSSTransitions()})}else{f.configureCSSTransitions()}},transitionjQuery:function(h,g){var f=this;if(g){(f.panelContainer).css("margin-left",h+f.pSign)}else{(f.panelContainer).animate({"margin-left":h+f.pSign},{easing:f.options.slideEaseFunction,duration:f.options.slideEaseDuration,queue:false})}},getHeighestPanel:function(){var g=this,f,h=0;g.$panelClass.each(function(){f=d(this).outerHeight(true);h=(f>h)?f:h});if(!g.options.autoHeight){return h}},verifyPanel:function(){var g=this,f=false;if(g.options.continuous){if(g.nextPanel>g.panelCount){g.nextPanel=g.panelCount;g.setNextPanel(g.panelCount)}else{if(g.nextPanel<-1){g.nextPanel=-1;g.setNextPanel(-1)}else{if((!f)&&((g.nextPanel===g.panelCount)||(g.nextPanel===-1))){g.prepareTransition(g.nextPanel);g.updateClass();clearTimeout(h);var h=setTimeout(function(){if(g.nextPanel===g.panelCount){g.prepareTransition(0,true,true,true)}else{if(g.nextPanel===-1){g.prepareTransition(g.panelCount-1,true,true,true)}}},g.options.slideEaseDuration+50)}else{f=true;g.prepareTransition(g.nextPanel)}}}}else{if(g.nextPanel===g.panelCount){g.nextPanel=0}else{if(g.nextPanel===-1){g.nextPanel=(g.panelCount-1)}}g.prepareTransition(g.nextPanel)}}};d.fn.liquidSlider=function(f){return this.each(function(){var g=Object.create(b);g.init(f,this);d.data(this,"liquidSlider",g)})};d.fn.liquidSlider.options={autoHeight:false,minHeight:0,heightEaseDuration:1500,heightEaseFunction:"easeInOutExpo",slideEaseDuration:1500,slideEaseFunction:"easeInOutExpo",slideEaseFunctionFallback:"easeInOutExpo",animateIn:"bounceInRight",animateOut:"bounceOutRight",continuous:true,fadeInDuration:500,fadeOutDuration:500,autoSlide:false,autoSlideDirection:"right",autoSlideInterval:6000,forceAutoSlide:false,pauseOnHover:false,dynamicArrows:false,dynamicArrowsGraphical:true,dynamicArrowLeftText:"&#171; left",dynamicArrowRightText:"right &#187;",hideSideArrows:false,hideSideArrowsDuration:750,hoverArrows:false,hoverArrowDuration:250,dynamicTabs:false,dynamicTabsHtml:true,includeTitle:true,panelTitleSelector:".title",dynamicTabsAlign:"left",dynamicTabsPosition:"top",navElementTag:"div",firstPanelToLoad:1,crossLinks:false,hashLinking:false,hashTitleSelector:".title",keyboardNavigation:false,leftKey:39,rightKey:37,panelKeys:{1:49,2:50,3:51,4:52},responsive:false,mobileNavigation:false,mobileNavDefaultText:"Menu",mobileUIThreshold:0,hideArrowsWhenMobile:false,hideArrowsThreshold:0,useCSSMaxWidth:2200,preload:function(){this.finalize()},onload:function(){},pretransition:function(){this.transition()},callback:function(){},preloader:false,swipe:false,swipeArgs:e}})(jQuery,window,document);;
updateHashTags:function(){var f=this,g=(f.nextPanel===f.panelCount)?0:f.nextPanel;c.location.hash=f.getFromPanel(f.options.hashTitleSelector,g)},;
// TouchSwipe v1.6.4
// https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false)}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){return J[a7].distance}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}})(jQuery);;
autoSlide:function(){var f=this;if(f.options.autoSlideInterval<f.options.slideEaseDuration){f.options.autoSlideInterval=(f.options.slideEaseDuration>f.options.heightEaseDuration)?f.options.slideEaseDuration:f.options.heightEaseDuration}f.autoSlideTimeout=setTimeout(function(){f.setNextPanel(f.options.autoSlideDirection);f.autoSlide()},f.options.autoSlideInterval)},stopAutoSlide:function(){var f=this;f.options.autoSlide=false;clearTimeout(f.autoSlideTimeout)},startAutoSlide:function(g){var f=this;f.options.autoSlide=true;if(!g){f.setNextPanel(f.options.autoSlideDirection)}f.autoSlide(clearTimeout(f.autoSlideTimeout))},;
adjustHeight:function(h,f,j,i){var g=this;if(h||g.useCSS){if(h){g.configureCSSTransitions("0","0")}(g.$sliderId).height(f);if(h){g.configureCSSTransitions()}return}(g.$sliderId).animate({height:f+"px"},{easing:j||g.options.heightEaseFunction,duration:i||g.options.heightEaseDuration,queue:false})},getHeight:function(f){var g=this;f=f||g.$panelClass.eq(g.sanatizeNumber(g.nextPanel)-1).outerHeight(true);f=(f<g.options.minHeight)?g.options.minHeight:f;return f},;
addArrows:function(g){var f=this,h=(f.options.dynamicArrowsGraphical)?"-arrow ":" ";(f.$sliderWrap).addClass("arrows");if(f.options.dynamicArrowsGraphical){f.options.dynamicArrowLeftText="";f.options.dynamicArrowRightText=""}(f.$sliderId).before('<div class="ls-nav-left'+h+(g||"")+'"><a href="#">'+f.options.dynamicArrowLeftText+"</a></div>");(f.$sliderId).after('<div class="ls-nav-right'+h+(g||"")+'"><a href="#">'+f.options.dynamicArrowRightText+"</a></div>");f.leftArrow=d(f.sliderId+"-wrapper [class^=ls-nav-left]").css("visibility","hidden").addClass("ls-hidden");f.rightArrow=d(f.sliderId+"-wrapper [class^=ls-nav-right]").css("visibility","hidden").addClass("ls-hidden");if(!f.options.hoverArrows){f.hideShowArrows(e,true,true,false)}},hideShowArrows:function(k,h,m,l){var i=this,j=(typeof k!=="undefined")?k:i.options.fadeOutDuration,f=(typeof k!=="undefined")?k:i.options.fadeInDuration,g=h?"visible":"hidden";if(!m&&(l||(i.sanatizeNumber(i.nextPanel)===1))){i.leftArrow.stop().fadeTo(j,0,function(){d(this).css("visibility",g).addClass("ls-hidden")})}else{if(m||i.leftArrow.hasClass("ls-hidden")){i.leftArrow.stop().css("visibility","visible").fadeTo(f,1).removeClass("ls-hidden")}}if(!m&&(l||(i.sanatizeNumber(i.nextPanel)===i.panelCount))){i.rightArrow.stop().fadeTo(j,0,function(){d(this).css("visibility",g).addClass("ls-hidden")})}else{if(m||i.rightArrow.hasClass("ls-hidden")){i.rightArrow.stop().css("visibility","visible").fadeTo(f,1).removeClass("ls-hidden")}}},registerArrows:function(){var f=this;d((f.$sliderWrap).find("[class^=ls-nav-]")).on("click",function(){f.setNextPanel(d(this).attr("class").split(" ")[0].split("-")[2])})},;
addNavigation:function(i){var h=this,f="<"+h.options.navElementTag+' class="ls-nav"><ul id="'+(h.$elem).attr("id")+'-nav-ul"></ul></'+h.options.navElementTag+">";if(h.options.dynamicTabsPosition==="bottom"){(h.$sliderId).after(f)}else{(h.$sliderId).before(f)}if(h.options.mobileNavigation){var j=(h.options.mobileNavDefaultText)?'<option disabled="disabled" selected="selected">'+h.options.mobileNavDefaultText+"</option>":null,g='<div class="ls-select-box"><select id="'+(h.$elem).attr("id")+'-nav-select" name="navigation">'+j+"</select></div>";h.navigation=d(h.sliderId+"-nav-ul").before(g);h.dropdown=d(h.sliderId+"-wrapper .ls-select-box");h.dropdownSelect=d(h.sliderId+"-nav-select");d.each((h.$elem).find(h.options.panelTitleSelector),function(k){d((h.$sliderWrap)).find(".ls-select-box select").append('<option value="tab'+(k+1)+'">'+d(this).text()+"</option>")})}d.each((h.$elem).find(h.options.panelTitleSelector),function(k){d((h.$sliderWrap)).find(".ls-nav ul").append('<li class="tab'+(k+1)+'"><a class="'+(i||"")+'" href="#'+(k+1)+'">'+h.getNavInsides(this)+"</a></li>");if(!h.options.includeTitle){d(this).remove()}})},getNavInsides:function(f){return(this.options.dynamicTabsHtml)?d(f).html():d(f).text()},alignNavigation:function(){var f=this,g=(f.options.dynamicArrowsGraphical)?"-arrow":"";if(f.options.dynamicTabsAlign!=="center"){if(!f.options.responsive){d((f.$sliderWrap)).find(".ls-nav ul").css("margin-"+f.options.dynamicTabsAlign,d((f.$sliderWrap)).find(".ls-nav-"+f.options.dynamicTabsAlign+g).outerWidth(true)+parseInt((f.$sliderId).css("margin-"+f.options.dynamicTabsAlign),10))}d((f.$sliderWrap)).find(".ls-nav ul").css("float",f.options.dynamicTabsAlign)}f.totalNavWidth=d((f.$sliderWrap)).find(".ls-nav ul").outerWidth(true);if(f.options.dynamicTabsAlign==="center"){f.totalNavWidth=0;d((f.$sliderWrap)).find(".ls-nav li a").each(function(){f.totalNavWidth+=d(this).outerWidth(true)});d((f.$sliderWrap)).find(".ls-nav ul").css("width",f.totalNavWidth+1)}},registerNav:function(){var f=this;(f.$sliderWrap).find("[class^=ls-nav] li").on("click",function(){f.setNextPanel(parseInt(d(this).attr("class").split("tab")[1],10)-1);return false})},;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
registerTouch:function(){var f=this,g=f.options.swipeArgs||{fallbackToMouseEvents:false,allowPageScroll:"vertical",swipe:function(i,h){if(h==="up"||h==="down"){return false}f.swipeDir=(h==="left")?"right":"left";f.setNextPanel(f.swipeDir)}};d(f.sliderId+" .panel").swipe(g)},;
addPreloader:function(){var f=this;d(f.sliderId+"-wrapper").append('<div class="ls-preloader"></div>')},removePreloader:function(){var f=this;d(f.sliderId+"-wrapper .ls-preloader").fadeTo("slow",0,function(){d(this).remove()})},;
makeResponsive:function(){var f=this;d(f.sliderId+"-wrapper").addClass("ls-responsive").css({"max-width":d(f.sliderId+" .panel:first-child").width(),width:"100%"});d(f.sliderId+" .panel-container").css("width",100*f.panelCountTotal+f.pSign);d(f.sliderId+" .panel").css("width",100/f.panelCountTotal+f.pSign);if(f.options.hideArrowsWhenMobile){f.leftWrapperPadding=d(f.sliderId+"-wrapper").css("padding-left");f.rightWrapperPadding=(f.$sliderWrap).css("padding-right")}f.responsiveEvents();d(c).bind("resize",function(){f.responsiveEvents();clearTimeout(f.resizingTimeout);f.resizingTimeout=setTimeout(function(){var g=(f.options.autoHeight)?f.getHeight():f.getHeighestPanel(f.nextPanel);f.adjustHeight(false,g)},500)})},responsiveEvents:function(){var g=this,f=(g.options.hideArrowsThreshold||g.options.mobileUIThreshold||(g.totalNavWidth+10));if((g.$sliderId).outerWidth()<f){if(g.options.mobileNavigation){(g.navigation).css("display","none");(g.dropdown).css("display","block");(g.dropdownSelect).css("display","block");d(g.sliderId+"-nav-select").val(g.options.mobileNavDefaultText)}if(g.options.dynamicArrows){if(g.options.hideArrowsWhenMobile){(g.leftArrow).remove().length=0;(g.rightArrow).remove().length=0}else{if(!g.options.dynamicArrowsGraphical){(g.leftArrow).css("margin-"+g.options.dynamicTabsPosition,"0");(g.rightArrow).css("margin-"+g.options.dynamicTabsPosition,"0")}}}}else{if(g.options.mobileNavigation){(g.navigation).css("display","block");(g.dropdown).css("display","none");(g.dropdownSelect).css("display","none")}if(g.options.dynamicArrows){if(g.options.hideArrowsWhenMobile&&(!(g.leftArrow).length||!(g.rightArrow).length)){g.addArrows();g.registerArrows()}else{if(!g.options.dynamicArrowsGraphical){(g.leftArrow).css("margin-"+g.options.dynamicTabsPosition,(g.navigation).css("height"));(g.rightArrow).css("margin-"+g.options.dynamicTabsPosition,(g.navigation).css("height"))}}}}d(g.sliderId+"-wrapper").css("width","100%");if(g.options.mobileNavigation){(g.dropdownSelect).change(function(){g.setNextPanel(parseInt(d(this).val().split("tab")[1],10)-1)})}},;
registerKeyboard:function(){var f=this;d(a).keydown(function(h){var g=h.keyCode||h.which;if(h.target.type!=="textarea"&&h.target.type!=="textbox"){if(!f.options.forceAutoSlide){d(this).trigger("click")}if(g===f.options.leftKey){f.setNextPanel("right")}if(g===f.options.rightKey){f.setNextPanel("left")}d.each(f.options.panelKeys,function(i,j){if(g===j){f.setNextPanel(i-1)}})}})},;
/*!
 *  Liquid Slider v2.0.8
 *  http://liquidslider.com
 *  GPL license
 */
;if(typeof Object.create!=="function"){Object.create=function(b){function a(){}a.prototype=b;return new a()}}(function(d,c,a,e){var b={;
/*!
 *  Liquid Slider v2.0.12
 *  http://liquidslider.com
 *  GPL license
 */
;if(typeof Object.create!=="function"){Object.create=function(b){function a(){}a.prototype=b;return new a()}}(function(d,c,a,e){var b={makeResponsive:function(){var f=this;d(f.sliderId+"-wrapper").addClass("ls-responsive").css({"max-width":d(f.sliderId+" .panel:first-child").width(),width:"100%"});d(f.sliderId+" .panel-container").css("width",100*f.panelCountTotal+f.pSign);d(f.sliderId+" .panel").css("width",100/f.panelCountTotal+f.pSign);if(f.options.hideArrowsWhenMobile){f.leftWrapperPadding=d(f.sliderId+"-wrapper").css("padding-left");f.rightWrapperPadding=(f.$sliderWrap).css("padding-right")}f.responsiveEvents();d(c).bind("resize",function(){f.responsiveEvents();clearTimeout(f.resizingTimeout);f.resizingTimeout=setTimeout(function(){var g=(f.options.autoHeight)?f.getHeight():f.getHeighestPanel(f.nextPanel);f.adjustHeight(false,g)},500)})},responsiveEvents:function(){var g=this,f=(g.options.hideArrowsThreshold||g.options.mobileUIThreshold||(g.totalNavWidth+10));if((g.$sliderId).outerWidth()<f){if(g.options.mobileNavigation){(g.navigation).css("display","none");(g.dropdown).css("display","block");(g.dropdownSelect).css("display","block");d(g.sliderId+"-nav-select").val(g.options.mobileNavDefaultText)}if(g.options.dynamicArrows){if(g.options.hideArrowsWhenMobile){(g.leftArrow).remove().length=0;(g.rightArrow).remove().length=0}else{if(!g.options.dynamicArrowsGraphical){(g.leftArrow).css("margin-"+g.options.dynamicTabsPosition,"0");(g.rightArrow).css("margin-"+g.options.dynamicTabsPosition,"0")}}}}else{if(g.options.mobileNavigation){(g.navigation).css("display","block");(g.dropdown).css("display","none");(g.dropdownSelect).css("display","none")}if(g.options.dynamicArrows){if(g.options.hideArrowsWhenMobile&&(!(g.leftArrow).length||!(g.rightArrow).length)){g.addArrows();g.registerArrows()}else{if(!g.options.dynamicArrowsGraphical){(g.leftArrow).css("margin-"+g.options.dynamicTabsPosition,(g.navigation).css("height"));(g.rightArrow).css("margin-"+g.options.dynamicTabsPosition,(g.navigation).css("height"))}}}}d(g.sliderId+"-wrapper").css("width","100%");if(g.options.mobileNavigation){(g.dropdownSelect).change(function(){g.setNextPanel(parseInt(d(this).val().split("tab")[1],10)-1)})}},addNavigation:function(i){var h=this,f="<"+h.options.navElementTag+' class="ls-nav"><ul id="'+(h.$elem).attr("id")+'-nav-ul"></ul></'+h.options.navElementTag+">";if(h.options.dynamicTabsPosition==="bottom"){(h.$sliderId).after(f)}else{(h.$sliderId).before(f)}if(h.options.mobileNavigation){var j=(h.options.mobileNavDefaultText)?'<option disabled="disabled" selected="selected">'+h.options.mobileNavDefaultText+"</option>":null,g='<div class="ls-select-box"><select id="'+(h.$elem).attr("id")+'-nav-select" name="navigation">'+j+"</select></div>";h.navigation=d(h.sliderId+"-nav-ul").before(g);h.dropdown=d(h.sliderId+"-wrapper .ls-select-box");h.dropdownSelect=d(h.sliderId+"-nav-select");d.each((h.$elem).find(h.options.panelTitleSelector),function(k){d((h.$sliderWrap)).find(".ls-select-box select").append('<option value="tab'+(k+1)+'">'+d(this).text()+"</option>")})}d.each((h.$elem).find(h.options.panelTitleSelector),function(k){d((h.$sliderWrap)).find(".ls-nav ul").append('<li class="tab'+(k+1)+'"><a class="'+(i||"")+'" href="#'+(k+1)+'">'+h.getNavInsides(this)+"</a></li>");if(!h.options.includeTitle){d(this).remove()}})},getNavInsides:function(f){return(this.options.dynamicTabsHtml)?d(f).html():d(f).text()},alignNavigation:function(){var f=this,g=(f.options.dynamicArrowsGraphical)?"-arrow":"";if(f.options.dynamicTabsAlign!=="center"){if(!f.options.responsive){d((f.$sliderWrap)).find(".ls-nav ul").css("margin-"+f.options.dynamicTabsAlign,d((f.$sliderWrap)).find(".ls-nav-"+f.options.dynamicTabsAlign+g).outerWidth(true)+parseInt((f.$sliderId).css("margin-"+f.options.dynamicTabsAlign),10))}d((f.$sliderWrap)).find(".ls-nav ul").css("float",f.options.dynamicTabsAlign)}f.totalNavWidth=d((f.$sliderWrap)).find(".ls-nav ul").outerWidth(true);if(f.options.dynamicTabsAlign==="center"){f.totalNavWidth=0;d((f.$sliderWrap)).find(".ls-nav li a").each(function(){f.totalNavWidth+=d(this).outerWidth(true)});d((f.$sliderWrap)).find(".ls-nav ul").css("width",f.totalNavWidth+1)}},registerNav:function(){var f=this;(f.$sliderWrap).find("[class^=ls-nav] li").on("click",function(){f.setNextPanel(parseInt(d(this).attr("class").split("tab")[1],10)-1);return false})},addArrows:function(g){var f=this,h=(f.options.dynamicArrowsGraphical)?"-arrow ":" ";(f.$sliderWrap).addClass("arrows");if(f.options.dynamicArrowsGraphical){f.options.dynamicArrowLeftText="";f.options.dynamicArrowRightText=""}(f.$sliderId).before('<div class="ls-nav-left'+h+(g||"")+'"><a href="#">'+f.options.dynamicArrowLeftText+"</a></div>");(f.$sliderId).after('<div class="ls-nav-right'+h+(g||"")+'"><a href="#">'+f.options.dynamicArrowRightText+"</a></div>");f.leftArrow=d(f.sliderId+"-wrapper [class^=ls-nav-left]").css("visibility","hidden").addClass("ls-hidden");f.rightArrow=d(f.sliderId+"-wrapper [class^=ls-nav-right]").css("visibility","hidden").addClass("ls-hidden");if(!f.options.hoverArrows){f.hideShowArrows(e,true,true,false)}},hideShowArrows:function(k,h,m,l){var i=this,j=(typeof k!=="undefined")?k:i.options.fadeOutDuration,f=(typeof k!=="undefined")?k:i.options.fadeInDuration,g=h?"visible":"hidden";if(!m&&(l||(i.sanatizeNumber(i.nextPanel)===1))){i.leftArrow.stop().fadeTo(j,0,function(){d(this).css("visibility",g).addClass("ls-hidden")})}else{if(m||i.leftArrow.hasClass("ls-hidden")){i.leftArrow.stop().css("visibility","visible").fadeTo(f,1).removeClass("ls-hidden")}}if(!m&&(l||(i.sanatizeNumber(i.nextPanel)===i.panelCount))){i.rightArrow.stop().fadeTo(j,0,function(){d(this).css("visibility",g).addClass("ls-hidden")})}else{if(m||i.rightArrow.hasClass("ls-hidden")){i.rightArrow.stop().css("visibility","visible").fadeTo(f,1).removeClass("ls-hidden")}}},registerArrows:function(){var f=this;d((f.$sliderWrap).find("[class^=ls-nav-]")).on("click",function(){f.setNextPanel(d(this).attr("class").split(" ")[0].split("-")[2])})},registerCrossLinks:function(){var f=this;f.crosslinks=d("[data-liquidslider-ref*="+(f.sliderId).split("#")[1]+"]");(f.crosslinks).on("click",function(g){if(f.options.autoSlide===true){f.startAutoSlide(true)}f.setNextPanel(f.getPanelNumber((d(this).attr("href").split("#")[1]),f.options.panelTitleSelector));g.preventDefault()});f.updateClass()},registerTouch:function(){var f=this,g=f.options.swipeArgs||{fallbackToMouseEvents:false,allowPageScroll:"vertical",swipe:function(i,h){if(h==="up"||h==="down"){return false}f.swipeDir=(h==="left")?"right":"left";f.setNextPanel(f.swipeDir)}};d(f.sliderId+" .panel").swipe(g)},registerKeyboard:function(){var f=this;d(a).keydown(function(h){var g=h.keyCode||h.which;if(h.target.type!=="textarea"&&h.target.type!=="textbox"){if(!f.options.forceAutoSlide){d(this).trigger("click")}if(g===f.options.leftKey){f.setNextPanel("right")}if(g===f.options.rightKey){f.setNextPanel("left")}d.each(f.options.panelKeys,function(i,j){if(g===j){f.setNextPanel(i-1)}})}})},autoSlide:function(){var f=this;if(f.options.autoSlideInterval<f.options.slideEaseDuration){f.options.autoSlideInterval=(f.options.slideEaseDuration>f.options.heightEaseDuration)?f.options.slideEaseDuration:f.options.heightEaseDuration}f.autoSlideTimeout=setTimeout(function(){f.setNextPanel(f.options.autoSlideDirection);f.autoSlide()},f.options.autoSlideInterval)},stopAutoSlide:function(){var f=this;f.options.autoSlide=false;clearTimeout(f.autoSlideTimeout)},startAutoSlide:function(g){var f=this;f.options.autoSlide=true;if(!g){f.setNextPanel(f.options.autoSlideDirection)}f.autoSlide(clearTimeout(f.autoSlideTimeout))},updateHashTags:function(){var f=this,g=(f.nextPanel===f.panelCount)?0:f.nextPanel;c.location.hash=f.getFromPanel(f.options.hashTitleSelector,g)},adjustHeight:function(h,f,j,i){var g=this;if(h||g.useCSS){if(h){g.configureCSSTransitions("0","0")}(g.$sliderId).height(f);if(h){g.configureCSSTransitions()}return}(g.$sliderId).animate({height:f+"px"},{easing:j||g.options.heightEaseFunction,duration:i||g.options.heightEaseDuration,queue:false})},getHeight:function(f){var g=this;f=f||g.$panelClass.eq(g.sanatizeNumber(g.nextPanel)-1).outerHeight(true);f=(f<g.options.minHeight)?g.options.minHeight:f;return f},addPreloader:function(){var f=this;d(f.sliderId+"-wrapper").append('<div class="ls-preloader"></div>')},removePreloader:function(){var f=this;d(f.sliderId+"-wrapper .ls-preloader").fadeTo("slow",0,function(){d(this).remove()})},init:function(g,h){var f=this;f.elem=h;f.$elem=d(h);d("body").removeClass("no-js");f.sliderId="#"+(f.$elem).attr("id");f.$sliderId=d(f.sliderId);f.options=d.extend({},d.fn.liquidSlider.options,g);f.pSign=(f.options.responsive)?"%":"px";if(f.options.responsive){f.determineAnimationType()}else{f.options.mobileNavigation=false;f.options.hideArrowsWhenMobile=false}if(f.options.slideEaseFunction==="animate.css"){if(!f.useCSS){f.options.slideEaseFunction=f.options.slideEaseFunctionFallback}else{f.options.continuous=false;f.animateCSS=true}}f.build();f.events();if(!f.options.responsive&&f.options.dynamicArrows){f.$sliderWrap.width(f.$sliderId.outerWidth(true)+f.leftArrow.outerWidth(true)+f.rightArrow.outerWidth(true))}f.loaded=true;d(c).bind("load",function(){f.options.preload.call(f)})},build:function(){var f=this,h;if((f.$sliderId).parent().attr("class")!=="ls-wrapper"){(f.$sliderId).wrap('<div id="'+(f.$elem).attr("id")+'-wrapper" class="ls-wrapper"></div>')}f.$sliderWrap=d(f.sliderId+"-wrapper");if(f.options.preloader){f.addPreloader()}d(f.sliderId).children().addClass((f.$elem).attr("id")+"-panel panel");f.panelClass=f.sliderId+" ."+(f.$elem).attr("id")+"-panel:not(.clone)";f.$panelClass=d(f.panelClass);(f.$panelClass).wrapAll('<div class="panel-container"></div>');(f.$panelClass).wrapInner('<div class="panel-wrapper"></div>');f.panelContainer=(f.$panelClass).parent();f.$panelContainer=f.panelContainer;if(f.options.slideEaseFunction==="fade"){(f.$panelClass).addClass("fade");f.options.continuous=false;f.fade=true}if(f.options.dynamicTabs){f.addNavigation()}else{f.options.mobileNavigation=false}if(f.options.dynamicArrows){f.addArrows()}else{f.options.hoverArrows=false;f.options.hideSideArrows=false;f.options.hideArrowsWhenMobile=false}h=((f.$leftArrow)&&(f.$leftArrow).css("position")==="absolute")?0:1;f.totalSliderWidth=(f.$sliderId).outerWidth(true)+(d(f.$leftArrow).outerWidth(true))*h+(d(f.$rightArrow).outerWidth(true))*h;d((f.$sliderWrap)).css("width",f.totalSliderWidth);if(f.options.dynamicTabs){f.alignNavigation()}if(f.options.hideSideArrows){f.options.continuous=false}if(f.options.continuous){(f.$panelContainer).prepend((f.$panelContainer).children().last().clone().addClass("clone"));(f.$panelContainer).append((f.$panelContainer).children().eq(1).clone().addClass("clone"))}var g=(f.options.continuous)?2:0;f.panelCount=d(f.panelClass).length;f.panelCountTotal=(f.fade)?1:f.panelCount+g;f.panelWidth=d(f.panelClass).outerWidth();f.totalWidth=f.panelCountTotal*f.panelWidth;d(f.sliderId+" .panel-container").css("width",f.totalWidth);f.slideDistance=(f.options.responsive)?100:d(f.sliderId).outerWidth();if(f.useCSS){f.totalWidth=100*f.panelCountTotal;f.slideDistance=100/f.panelCountTotal}if(f.options.responsive){f.makeResponsive()}f.prepareTransition(f.getFirstPanel(),true);f.updateClass()},determineAnimationType:function(){var f=this,l="animation",j="",h="Webkit Moz O ms Khtml".split(" "),k="",g=0;f.useCSS=false;if(f.elem.style.animationName){f.useCSS=true}if(f.useCSS===false){for(g=0;g<h.length;g++){if(f.elem.style[h[g]+"AnimationName"]!==e){k=h[g];l=k+"Animation";j="-"+k.toLowerCase()+"-";f.useCSS=true;break}}}if(a.documentElement.clientWidth>f.options.useCSSMaxWidth){f.useCSS=false}},configureCSSTransitions:function(g,f){var h=this,i,j;h.easing={easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175,.885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};if(h.useCSS){i="all "+(g||h.options.slideEaseDuration)+"ms "+h.easing[h.options.slideEaseFunction];j="all "+(f||h.options.heightEaseDuration)+"ms "+h.easing[h.options.heightEaseFunction];d(h.panelContainer).css({"-webkit-transition":i,"-moz-transition":i,"-ms-transition":i,"-o-transition":i,transition:i});if(h.options.autoHeight){(h.$sliderId).css({"-webkit-transition":j,"-moz-transition":j,"-ms-transition":j,"-o-transition":j,transition:j})}}},transitionFade:function(){var f=this;d(f.panelClass).eq(f.nextPanel).fadeTo(f.options.fadeInDuration,1).css("z-index",1);d(f.panelClass).eq(f.prevPanel).fadeTo(f.options.fadeOutDuration,0).css("z-index",0);f.callback(f.options.callback,true)},hover:function(){var f=this;(f.$sliderWrap).hover(function(){if(f.options.hoverArrows){f.hideShowArrows(f.options.fadeInDuration,true,true,false)}if(f.options.pauseOnHover){clearTimeout(f.autoSlideTimeout)}},function(){if(f.options.hoverArrows){f.hideShowArrows(f.options.fadeOutnDuration,true,false,true)}if(f.options.pauseOnHover&&f.options.autoSlide){f.startAutoSlide()}})},events:function(){var f=this;if(f.options.dynamicArrows){f.registerArrows()}if(f.options.crossLinks){f.registerCrossLinks()}if(f.options.dynamicTabs){f.registerNav()}if(f.options.swipe){f.registerTouch()}if(f.options.keyboardNavigation){f.registerKeyboard()}(f.$sliderWrap).find("*").on("click",function(){if(f.options.forceAutoSlide){f.startAutoSlide(true)}else{if(f.options.autoSlide){f.stopAutoSlide()}}});f.hover()},setNextPanel:function(g){var f=this;if(g===f.nextPanel){return}f.prevPanel=f.nextPanel;if(f.loaded){if(typeof g==="number"){f.nextPanel=g}else{f.nextPanel+=(~~(g==="right")||-1);if(!f.options.continuous){f.nextPanel=(f.nextPanel<0)?f.panelCount-1:(f.nextPanel%f.panelCount)}}if(f.fade||f.animateCSS){f.prepareTransition(f.nextPanel)}else{f.verifyPanel()}}},getFirstPanel:function(){var g=this,f;if(g.options.hashLinking){f=g.getPanelNumber(c.location.hash,g.options.hashTitleSelector);if(typeof(f)!=="number"){f=0}}return(f)?f:g.options.firstPanelToLoad-1},getPanelNumber:function(i,h){var g=this,j,f=i.replace("#","").toLowerCase();(g.$panelClass).each(function(k){j=g.convertRegex(d(this).find(h).text());if(j===f){f=k+1}});return(parseInt(f,10)?parseInt(f,10)-1:f)},getFromPanel:function(g,h){var f=this;return f.convertRegex(f.$panelClass.find(g).eq(h).text())},convertRegex:function(f){return f.replace(/[^\w -]+/g,"").replace(/ +/g,"-").toLowerCase()},updateClass:function(){var f=this;if(f.options.dynamicTabs){d((f.$sliderWrap)).find(".tab"+f.sanatizeNumber(f.nextPanel)+":first a").addClass("current").parent().siblings().children().removeClass("current")}if(f.options.crossLinks&&f.crosslinks){(f.crosslinks).not(f.nextPanel).removeClass("currentCrossLink");(f.crosslinks).each(function(){if(d(this).attr("href")===("#"+f.getFromPanel(f.options.panelTitleSelector,f.sanatizeNumber(f.nextPanel)-1))){d(this).addClass("currentCrossLink")}})}f.$panelClass.eq(f.nextPanel).addClass("currentPanel").siblings().removeClass("currentPanel")},sanatizeNumber:function(f){var g=this;if(f>=g.panelCount){return 1}else{if(f<=-1){return g.panelCount}else{return f+1}}},finalize:function(){var g=this;var f=(g.options.autoHeight)?g.getHeight():g.getHeighestPanel(g.nextPanel);if(g.options.autoHeight){g.adjustHeight(true,f)}if(g.options.autoSlide){g.autoSlide()}if(g.options.preloader){g.removePreloader()}g.onload()},callback:function(g,h){var f=this;if(g&&f.loaded){if(f.useCSS&&typeof h!=="undefined"){d(".panel-container").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(i){g.call(f)})}else{setTimeout(function(){g.call(f)},f.options.slideEaseDuration+50)}}},onload:function(){var f=this;f.options.onload.call(f)},prepareTransition:function(j,h,g,i){var f=this;f.nextPanel=j||0;if(!g){f.pretransition(f.options.pretransition)}f.noAnimation=h;f.noPosttransition=i;if(!f.loaded){f.transition()}else{f.options.pretransition.call(f)}},pretransition:function(){var f=this,g;if(f.options.hashLinking){f.updateHashTags()}if(f.options.mobileNavigation){f.dropdownSelect.val("tab"+(f.nextPanel+1))}if(f.options.hideSideArrows){f.hideShowArrows()}f.updateClass()},getTransitionMargin:function(){var f=this;return -(f.nextPanel*f.slideDistance)-(f.slideDistance*~~(f.options.continuous))},transition:function(){var f=this,g=f.getTransitionMargin();if(f.animateCSS&&f.loaded){f.transitionOutAnimateCSS();return false}if((g+f.pSign)!==(f.panelContainer).css("margin-left")||(g!==-100)){if(f.options.autoHeight&&!f.animateCSS){f.adjustHeight(true,f.getHeight())}if(f.fade){f.transitionFade()}else{if(f.animateCSS){f.transitionInAnimateCSS(g)}else{if(f.useCSS){f.transitionCSS(g,f.noAnimation)}else{f.transitionjQuery(g,f.noAnimation)}}}}if(!f.noPosttransition){f.callback(f.options.callback)}},transitionOutAnimateCSS:function(){var f=this;d(f.panelClass).removeClass(f.options.animateIn+" animated");d(f.panelClass).eq(f.prevPanel).addClass("animated "+f.options.animateOut);f.callback(f.transitionInAnimateCSS,e)},transitionInAnimateCSS:function(){var f=this;if(f.options.autoHeight){f.adjustHeight(false,f.getHeight())}f.transitionCSS(f.getTransitionMargin(),!f.loaded);d(f.panelClass).removeClass(f.options.animateOut+" animated");d(f.panelClass).eq(f.nextPanel).addClass("animated "+f.options.animateIn);f.callback(f.options.callback,e)},transitionCSS:function(h,g){var f=this;if(g){f.configureCSSTransitions("0","0")}(f.panelContainer).css({"-webkit-transform":"translate3d("+h+f.pSign+", 0, 0)","-moz-transform":"translate3d("+h+f.pSign+", 0, 0)","-ms-transform":"translate3d("+h+f.pSign+", 0, 0)","-o-transform":"translate3d("+h+f.pSign+", 0, 0)",transform:"translate3d("+h+f.pSign+", 0, 0)"});if(g){f.callback(function(){f.configureCSSTransitions()})}else{f.configureCSSTransitions()}},transitionjQuery:function(h,g){var f=this;if(g){(f.panelContainer).css("margin-left",h+f.pSign)}else{(f.panelContainer).animate({"margin-left":h+f.pSign},{easing:f.options.slideEaseFunction,duration:f.options.slideEaseDuration,queue:false})}},getHeighestPanel:function(){var g=this,f,h=0;g.$panelClass.each(function(){f=d(this).outerHeight(true);h=(f>h)?f:h});if(!g.options.autoHeight){return h}},verifyPanel:function(){var g=this,f=false;if(g.options.continuous){if(g.nextPanel>g.panelCount){g.nextPanel=g.panelCount;g.setNextPanel(g.panelCount)}else{if(g.nextPanel<-1){g.nextPanel=-1;g.setNextPanel(-1)}else{if((!f)&&((g.nextPanel===g.panelCount)||(g.nextPanel===-1))){g.prepareTransition(g.nextPanel);g.updateClass();clearTimeout(h);var h=setTimeout(function(){if(g.nextPanel===g.panelCount){g.prepareTransition(0,true,true,true)}else{if(g.nextPanel===-1){g.prepareTransition(g.panelCount-1,true,true,true)}}},g.options.slideEaseDuration+50)}else{f=true;g.prepareTransition(g.nextPanel)}}}}else{if(g.nextPanel===g.panelCount){g.nextPanel=0}else{if(g.nextPanel===-1){g.nextPanel=(g.panelCount-1)}}g.prepareTransition(g.nextPanel)}}};d.fn.liquidSlider=function(f){return this.each(function(){var g=Object.create(b);g.init(f,this);d.data(this,"liquidSlider",g)})};d.fn.liquidSlider.options={autoHeight:true,minHeight:0,heightEaseDuration:1500,heightEaseFunction:"easeInOutExpo",slideEaseDuration:1500,slideEaseFunction:"easeInOutExpo",slideEaseFunctionFallback:"easeInOutExpo",animateIn:"bounceInRight",animateOut:"bounceOutRight",continuous:true,fadeInDuration:500,fadeOutDuration:500,autoSlide:false,autoSlideDirection:"right",autoSlideInterval:6000,forceAutoSlide:false,pauseOnHover:false,dynamicArrows:true,dynamicArrowsGraphical:true,dynamicArrowLeftText:"&#171; left",dynamicArrowRightText:"right &#187;",hideSideArrows:false,hideSideArrowsDuration:750,hoverArrows:true,hoverArrowDuration:250,dynamicTabs:true,dynamicTabsHtml:true,includeTitle:true,panelTitleSelector:".title",dynamicTabsAlign:"left",dynamicTabsPosition:"top",navElementTag:"div",firstPanelToLoad:1,crossLinks:false,hashLinking:false,hashTitleSelector:".title",keyboardNavigation:false,leftKey:39,rightKey:37,panelKeys:{1:49,2:50,3:51,4:52},responsive:true,mobileNavigation:true,mobileNavDefaultText:"Menu",mobileUIThreshold:0,hideArrowsWhenMobile:true,hideArrowsThreshold:0,useCSSMaxWidth:2200,preload:function(){this.finalize()},onload:function(){},pretransition:function(){this.transition()},callback:function(){},preloader:false,swipe:true,swipeArgs:e}})(jQuery,window,document);;
