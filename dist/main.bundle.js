webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#bg {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/cloud_bg.jpg") + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: 0 0; }\n\n#bg-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, transparent 80%, transparent 80%, rgba(0, 0, 0, 0.6) 100%) repeat;\n  z-index: 1; }\n\n#particles {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2 !important;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: appear 1.4s ease 0s normal forwards 1 running;\n          animation: appear 1.4s ease 0s normal forwards 1 running;\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n#fullpage-content-container {\n  z-index: 3; }\n\n@-webkit-keyframes appear {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes appear {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\ni {\n  border: solid rgba(255, 255, 255, 0.8);\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 30px;\n  cursor: pointer; }\n\ni:hover {\n  border: solid white;\n  border-width: 0 3px 3px 0; }\n\n.right {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  position: absolute;\n  top: 50%;\n  right: 10%; }\n\n.left {\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n  position: absolute;\n  top: 50%;\n  left: 10%; }\n\n#nav-menu {\n  width: 200px;\n  height: auto;\n  position: fixed;\n  right: 0;\n  left: 0;\n  opacity: 0;\n  margin: 0 auto;\n  text-align: center;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  transition: all .5s ease-in-out 0s; }\n\n#nav-menu.open {\n  z-index: 550;\n  opacity: 1; }\n\n#nav-menu ul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n#nav-menu ul li {\n  margin: -40px 0 0;\n  opacity: 0;\n  text-align: center;\n  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s; }\n\n#nav-menu.open ul li {\n  margin-top: 20px;\n  opacity: 1; }\n\n#nav-menu ul li a {\n  color: #f5f5f5;\n  padding: 20px 0;\n  width: 100%;\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: 'Oswald', sans-serif; }\n\n#nav-menu a::before,\n#nav-menu a::after,\n#nav-menu a > span::before,\n#nav-menu a > span::after {\n  position: absolute;\n  content: '';\n  transition: -webkit-transform 0.4s cubic-bezier(0.88, 0.26, 0.23, 0.91);\n  transition: transform 0.4s cubic-bezier(0.88, 0.26, 0.23, 0.91);\n  transition: transform 0.4s cubic-bezier(0.88, 0.26, 0.23, 0.91), -webkit-transform 0.4s cubic-bezier(0.88, 0.26, 0.23, 0.91); }\n\n#nav-menu a::before, #nav-menu a::after {\n  right: 0;\n  bottom: 0;\n  background: #f9f2f4; }\n\n#nav-menu a::before {\n  width: 100%;\n  height: 1px;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n\n#nav-menu a::after {\n  width: 1px;\n  height: 100%;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%); }\n\n#nav-menu a > span {\n  display: block; }\n\n#nav-menu a > span::before, #nav-menu a > span::after {\n  left: 0;\n  top: 0;\n  background: #f5f5f5; }\n\n#nav-menu a > span::before {\n  width: 100%;\n  height: 1px;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%); }\n\n#nav-menu a > span::after {\n  width: 1px;\n  height: 100%;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%); }\n\n#nav-menu a:hover::before,\n#nav-menu a:hover::after,\n#nav-menu a:hover > span::before,\n#nav-menu a:hover > span::after {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0); }\n\n#nav-toggle {\n  cursor: pointer;\n  padding: 15px;\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: -10em;\n  background: #fff;\n  transition: all .3s ease-in-out 0s; }\n\n#nav-toggle.visible {\n  right: 0; }\n\n#nav-toggle span, #nav-toggle span::before {\n  background: #000;\n  display: block;\n  width: 20px;\n  height: 1px;\n  transition: -webkit-transform .3s ease-in-out 0s;\n  transition: transform .3s ease-in-out 0s;\n  transition: transform .3s ease-in-out 0s, -webkit-transform .3s ease-in-out 0s; }\n\n#nav-toggle span {\n  position: relative;\n  margin: 10px 0;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n#nav-toggle span::before {\n  position: absolute;\n  content: '';\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n#nav-toggle.open {\n  background: #FC3941; }\n\n#nav-toggle.open span::before {\n  background: #fff; }\n\n#nav-toggle.open span, #nav-toggle.open span::before {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg); }\n\n#nav-mask {\n  position: fixed;\n  background: rgba(2, 2, 2, 0.9);\n  width: 100%;\n  height: 0;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: 500;\n  transition: all .3s ease-in-out .1s; }\n\n#nav-mask.open {\n  opacity: 1;\n  height: 100%; }\n\n.videoWrapper {\n  position: relative;\n  padding-bottom: 56.25%;\n  /* 16:9 */\n  padding-top: 25px;\n  height: 0; }\n\n.videoWrapper iframe {\n  position: absolute;\n  right: 0;\n  left: 0;\n  width: 90%;\n  height: 90%;\n  margin: auto; }\n\n.iframe-responsive-resume {\n  border: 0; }\n  @media all and (max-width: 767px) {\n    .iframe-responsive-resume {\n      width: 80vw;\n      height: 60vh; } }\n  @media all and (min-width: 768px) {\n    .iframe-responsive-resume {\n      width: 80vw;\n      height: 90vh; } }\n\n.dropshadow {\n  -webkit-filter: drop-shadow(5px 5px 5px #222);\n  filter: drop-shadow(5px 5px 5px #222); }\n\n.imgCenter {\n  display: block;\n  margin: auto; }\n\n.section-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .section-flex section {\n    z-index: 4;\n    padding-left: 33%;\n    padding-right: 33%; }\n\n#hello-page article {\n  opacity: 0; }\n\n#hello-page article:first-child {\n  -webkit-transform: translate(0, -15px);\n          transform: translate(0, -15px); }\n\n#hello-page article:nth-child(2),\n#hello-page article:nth-child(3) {\n  -webkit-transform: translate(0, 15px);\n          transform: translate(0, 15px); }\n\n#hello-page article.viewable {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n  opacity: 1; }\n\n#hello-page article:first-child.viewable {\n  transition: all .4s ease-in-out 0s; }\n\n#hello-page article:nth-child(2).viewable {\n  transition: all .5s ease-in-out 0s; }\n\n#hello-page article:nth-child(3).viewable {\n  transition: all .5s ease-in-out .3s; }\n\n#work-page article {\n  opacity: 0; }\n\n#work-page article:first-child {\n  -webkit-transform: translate(0, -15px);\n          transform: translate(0, -15px); }\n\n#work-page article:nth-child(2) {\n  -webkit-transform: translate(0, -15px);\n          transform: translate(0, -15px); }\n\n#work-page article:nth-child(3) {\n  -webkit-transform: translate(10px, 0);\n          transform: translate(10px, 0); }\n\n#work-page article:nth-child(4) {\n  -webkit-transform: translate(0, 10px);\n          transform: translate(0, 10px); }\n\n#work-page article.viewable {\n  opacity: 1;\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0); }\n\n#work-page article.viewable:first-child {\n  transition: all .4s ease-in-out 0s; }\n\n#work-page article:nth-child(2),\n#work-page article:nth-child(3),\n#work-page article:nth-child(4) {\n  transition: all .5s ease-in-out .3s; }\n\n#folio-page article {\n  opacity: 0; }\n\n#folio-page article:first-child {\n  -webkit-transform: translate(0, -15px);\n          transform: translate(0, -15px); }\n\n#folio-page article.viewable {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n  opacity: 1; }\n\n#folio-page article:first-child.viewable {\n  transition: all .4s ease-in-out 0s; }\n\n#folio-page article:nth-child(2).viewable,\n#folio-page article:nth-child(3).viewable {\n  transition: all .5s ease-in-out .3s; }\n\n#contact-page article {\n  opacity: 0; }\n\n#contact-page article:first-child {\n  -webkit-transform: translate(0, -15px);\n          transform: translate(0, -15px); }\n\n#contact-page article:nth-child(2) {\n  -webkit-transform: translate(0, 10px);\n          transform: translate(0, 10px); }\n\n#contact-page article:nth-child(3) {\n  -webkit-transform: translate(10px, 0);\n          transform: translate(10px, 0); }\n\n#contact-page article.viewable {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n  opacity: 1; }\n\n#contact-page article:first-child.viewable {\n  transition: all .4s ease-in-out 0s; }\n\n#contact-page article:nth-child(2).viewable,\n#contact-page article:nth-child(3).viewable {\n  transition: all .5s ease-in-out .3s; }\n\n#contact-page .social {\n  text-align: center; }\n\n#contact-page article a::after {\n  width: 0; }\n\n#contact-page .social a:hover {\n  color: inherit; }\n\n@media all and (max-width: 767px) {\n  .section-flex section {\n    padding-left: 5%;\n    padding-right: 5%; }\n\n  article h2 {\n    font-size: 20px; }\n\n  article h4 {\n    font-size: 15px;\n    line-height: 21px; }\n\n  #nav-toggle {\n    padding: 5px; }\n\n  #nav-toggle span, #nav-toggle span::before {\n    width: 14px; }\n\n  #nav-toggle span {\n    margin: 7px 0; }\n\n  #fp-nav {\n    display: none; }\n\n  #hello-page article p .line-through::after {\n    height: 5px;\n    top: calc(50% - 2px); } }\n@media all and (min-width: 768px) and (max-width: 991px) {\n  .section-flex section {\n    padding-left: 10%;\n    padding-right: 10%; }\n\n  article h2 {\n    font-size: 25px; }\n\n  article h4 {\n    font-size: 18px; }\n\n  #nav-toggle {\n    padding: 8px; }\n\n  #nav-toggle span, #nav-toggle span::before {\n    width: 18px; }\n\n  #nav-toggle span {\n    margin: 9px 0; }\n\n  #fp-nav {\n    display: none; }\n\n  #hello-page article p .line-through::after {\n    height: 6px;\n    top: calc(50% - 2px); } }\n@media all and (min-width: 992px) and (max-width: 1199px) {\n  .section-flex section {\n    padding-left: 20%;\n    padding-right: 20%; }\n\n  article p {\n    font-size: 20px; }\n\n  #nav-toggle {\n    padding: 10px; }\n\n  #nav-toggle span, #nav-toggle span::before {\n    width: 20px; }\n\n  #nav-toggle span {\n    margin: 10px 0; }\n\n  #hello-page article p .line-through::after {\n    height: 7px;\n    top: calc(50% - 2px); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Background-->\n<div id=\"bg\"></div>\n<div id=\"bg-mask\"></div>\n\n<a href=\"https://github.com/that1guy\" target=\"_blank\"><img style=\"position: absolute; top: 0; left: 0; border: 0; z-index: 5;\" src=\"https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png\"></a>\n\n<!--Navigation-->\n<nav>\n  <div id=\"nav-menu\" [className]=\"nav.open\">\n    <ul>\n      <li data-menuanchor=\"hello\" class=\"active\">\n        <a href=\"#hello\" (click)=\"nav_open();\"><span>hello</span></a>\n      </li>\n      <li data-menuanchor=\"work\" class=\"\">\n        <a href=\"#work\" (click)=\"nav_open();\"><span>work</span></a>\n      </li>\n      <li data-menuanchor=\"resume\" class=\"\">\n        <a href=\"#resume\" (click)=\"nav_open();\"><span>résumé</span></a>\n      </li>\n      <li data-menuanchor=\"folio\" class=\"\">\n        <a href=\"#folio\" (click)=\"nav_open();\"><span>folio</span></a>\n      </li>\n      <li data-menuanchor=\"contact\" class=\"\">\n        <a href=\"#contact\" (click)=\"nav_open();\"><span>contact</span></a>\n      </li>\n    </ul>\n  </div>\n  <div id=\"nav-mask\" [className]=\"nav.open\"></div>\n  <a id=\"nav-toggle\" class=\"visible\" (click)=\"nav_open();\"><span></span></a>\n</nav>\n\n\n<!--Particles.js-->\n<div id=\"particles\">\n  <particles [style]=\"particles.style\" [width]=\"particles.width\" [height]=\"particles.height\" [params]=\"particles.params\"></particles>\n</div>\n\n\n<!--Fullpage.js-->\n<div id=\"fullpage-content-container\" mnFullpage\n     [mnFullpageNavigation]=\"true\"\n     [mnFullpageAfterLoad]=\"after_load\"\n     [mnFullpageKeyboardScrolling]=\"true\"\n     [mnFullpageSlidesNavigation]=\"true\"\n     [mnFullpageControlArrows]=\"false\"\n     mnFullpageSlidesNavPosition=\"bottom\">\n\n\n  <!--Landing page-->\n  <div class=\"section fp-section fp-table\" data-anchor=\"hello\">\n    <div id=\"hello-page\" class=\"fp-tableCell section-flex\">\n\n      <section>\n        <article [className]=\"visible.hello\">\n          <h6>\n            Hello_\n          </h6>\n        </article>\n\n        <article [className]=\"visible.hello\">\n          <h2>\n            My name is Brad Davis, I'm a Technical Product Manager, Startup Founder and Front-end Javascript developer.  My passion is working with teams of developers, designers, and subject matter experts to create products that streamline complex industries.\n          </h2>\n        </article>\n\n        <article [className]=\"visible.hello\">\n          <h4>\n            I live in Portland, Oregon and have fun working at <a href=\"https://boxmls.com\" target=\"_blank\">BoxMLS.com</a> where I have the pleasure of building innovative technology for the real estate industry.  You can download my <a href=\"#resume\">résumé</a> if you'd like to.\n          </h4>\n        </article>\n\n      </section>\n\n    </div>\n  </div>\n\n\n\n\n  <!--Work Page-->\n  <div class=\"section fp-section fp-table\" data-anchor=\"work\">\n    <div id=\"work-page\" class=\"fp-tableCell section-flex\">\n\n      <section>\n        <article [className]=\"visible.work\">\n          <h6>\n            Work_\n          </h6>\n        </article>\n\n        <article [className]=\"visible.work\">\n          <h2>\n            During my 14 years in Silicon Valley I've become a master of many things, including team & product management, full-stack JavaScript development, product vision, feature prioritization, go-to-market strategies, fundraising, digital marketing, UI/UX, customer success and so much more.\n          </h2>\n        </article>\n\n        <article [className]=\"visible.work\">\n          <h4>\n            My career started right out of high school as an IT Admin, then an \"Apple Genius\", then a Google Apps Deployment Engineer, then Google Apps Solutions Architect & consultant, and finally a two-time startup founder and Technical Product Manager.\n          </h4>\n        </article>\n\n        <!--<button (click)=\"fullpageService.moveSectionUp();\">Move section up</button>-->\n      </section>\n\n    </div>\n  </div>\n\n\n  <!--Embedded Résumé page-->\n  <div class=\"section fp-section fp-table\" data-anchor=\"resume\">\n    <div id=\"resume-page\" class=\"fp-tableCell section-flex\">\n\n      <section>\n        <article [className]=\"visible.resume\">\n          <h6>\n            Résumé_\n          </h6>\n        </article>\n\n        <article [className]=\"visible.resume\">\n          <div class=\"dropshadow\">\n            <iframe src=\"https://drive.google.com/file/d/1Va5BNrBaGH-SqxhtyAeS4-JufhIk8dbL/preview\" class=\"iframe-responsive-resume\" scrolling=\"no\"></iframe>\n          </div>\n        </article>\n\n      </section>\n\n    </div>\n  </div>\n\n\n  <!--Portfoio Page-->\n  <div class=\"section fp-section\" data-anchor=\"folio\">\n    <div id=\"folio-page\" class=\"fp-tableCell section-flex\">\n\n      <section style=\"!important; padding-left:20%; padding-right:20%; height:100%\">\n\n\n\n        <!--<article [className]=\"visible.folio\">-->\n          <!--<h6>-->\n            <!--Porfolio_-->\n          <!--</h6>-->\n        <!--</article>-->\n\n        <i (click)=\"fullpageService.moveSlideLeft();\" class=\"arrow left\"></i>\n        <i (click)=\"fullpageService.moveSlideRight();\" class=\"arrow right\"></i>\n\n        <div class=\"slide\">\n          <article [className]=\"visible.folio\">\n            <h6>\n              Porfolio_BoxMLS\n            </h6>\n          </article>\n          <article [className]=\"visible.folio\">\n            <h4 style=\"padding-left: 5%; padding-right:5%;\">If Zillow built the MLS, you'd get <a href=\"https://boxmls.com\" target=\"_blank\">BoxMLS</a>.  Our platform is branded and sold to MLSs and Brokerages across the nation.  It's a lot.  <a href=\"https://boxmls.com\" target=\"_blank\">BoxMLS</a> is a successful and growing startup that myself and the team are very proud of. </h4>\n          </article>\n          <div class=\"videoWrapper dropshadow\">\n            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/5LupZpxJCiE?rel=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n          </div>\n        </div>\n\n\n\n\n        <div class=\"slide\">\n          <article [className]=\"visible.folio\">\n            <h6>\n              Porfolio_HashtagSell\n            </h6>\n          </article>\n          <article [className]=\"visible.folio\">\n            <h4 style=\"padding-left: 5%; padding-right:5%;\">Imagine if you could sell anything by typing one sentence (like a tweet).  Then imagine a well-reviewed buyer purchasing your item instantly with easy shipping - this was HashtagSell, and it was my first startup.  For a few reasons, HashtagSell didn't take off, but I learned a lot.  I still think about HashtagSell everyday.</h4>\n          </article>\n          <div class=\"videoWrapper dropshadow\">\n            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/ApoaMEMvkKw?rel=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n          </div>\n        </div>\n\n\n\n\n        <div class=\"slide\">\n          <article [className]=\"visible.folio\">\n            <h6>\n              Porfolio_ClusterBox\n            </h6>\n          </article>\n          <article [className]=\"visible.folio\">\n            <h4 style=\"padding-left: 5%; padding-right:5%;\">ClusterBox is my side-project that I've been building since before the iPhone.  Basically ClusterBox replaces my need for DirectTV, Hulu, Netflix or iTunes.  ClusterBox works with my Apple TV, browsers, mobile devices, Amazon Alexa, and even my car.  My side-projects are what keep me up-to-pace with the latest technologies.</h4>\n          </article>\n          <div class=\"videoWrapper dropshadow\">\n            <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ASAJTkGnwOA?rel=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n          </div>\n        </div>\n\n      </section>\n\n    </div>\n  </div>\n\n\n\n\n  <!--Contact Page-->\n  <div class=\"section fp-section fp-table\" data-anchor=\"contact\">\n    <div id=\"contact-page\" class=\"fp-tableCell section-flex\">\n\n      <section>\n        <article [className]=\"visible.contact\">\n          <h6>\n            Contact_\n          </h6>\n        </article>\n\n        <article [className]=\"visible.contact\">\n          <h2>\n            In case you have a project you'd like me to get involved in, or a job opportunity you think I'd be a good fit for - Drop me a line.\n            I'm usually working Monday - Friday.  So just send me a good ol' fashioned e-mail.\n          </h2>\n        </article>\n\n        <article [className]=\"visible.contact\">\n          <h4>\n            <a href=\"https://www.linkedin.com/in/bradrobertdavis/\" target=\"_blank\">LinkedIn</a>\n          </h4>\n        </article>\n\n        <article [className]=\"visible.contact\">\n          <h4>\n            <a href=\"mailto:hello@imbrad.com\" target=\"_top\">e-mail: hello@imbrad.com</a>\n          </h4>\n        </article>\n      </section>\n\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_fullpage__ = __webpack_require__("../../../../ngx-fullpage/ngx-fullpage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_fullpage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngx_fullpage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(fullpageService) {
        var _this = this;
        this.fullpageService = fullpageService;
        this.title = 'ImBrad.com';
        // Particle.js Settings
        this.particles = {
            style: {
                'position': 'fixed',
                'width': '100%',
                'height': '100%',
                'z-index': 2,
                'top': 0,
                'left': 0,
                'right': 0,
                'bottom': 0,
            },
            params: {
                interactivity: {
                    detect_on: "window",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "grab"
                        },
                        onclick: {
                            enable: false,
                            mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 0.8,
                            speed: 2
                        },
                        repulse: {
                            distance: 200
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: false,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#ffffff"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                        }
                    },
                    size: {
                        value: 2,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 6,
                            size_min: 0.5,
                            sync: false
                        }
                    },
                    opacity: {
                        value: 1,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#fff",
                        opacity: 1,
                        width: 0.3
                    },
                    move: {
                        enable: true,
                        speed: 1.3,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "bounce",
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                retina_detect: true
            },
            width: 100,
            height: 100
        };
        //Fullpage.js section binding.
        this.visible = {
            hello: null,
            work: null,
            resume: null,
            folio: null,
            contact: null
        };
        //Called after fullpage.js completes transition
        //Toggles viewable class to correct html elements to reveal text with animation.
        this.after_load = function (anchorLink, index) {
            for (var key in _this.visible) {
                _this.visible[key] = null;
            }
            _this.visible[anchorLink] = "viewable";
        };
        //Navigation menu binding
        this.nav = {
            open: null
        };
        //Toggles navigation object binding to show/hide navigation
        this.nav_open = function () {
            if (_this.nav.open === "open") {
                _this.nav.open = null;
            }
            else {
                _this.nav.open = "open";
            }
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ngx_fullpage__["MnFullpageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ngx_fullpage__["MnFullpageService"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_fullpage__ = __webpack_require__("../../../../ngx-fullpage/ngx-fullpage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_fullpage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_fullpage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_particle__ = __webpack_require__("../../../../angular-particle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_fullpage__["MnFullpageModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_angular_particle__["a" /* ParticlesModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/assets/images/cloud_bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cloud_bg.0c4b0e1cd3416fd4c2e0.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map