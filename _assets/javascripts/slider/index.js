//= require_self
//= require_tree .

// Provides slider-based functionality.
//
//     <div ideum-slider id="foo">
//       <article ideum-slide>
//         This is a slide
//       </article>
//       <article ideum-slide>
//         <h1>This is also a slide</h1>
//         <p>It can contain arbitrary HTML</p>
//       </article>
//     </div>
//
// will produce
//
//     <section id="foo" class="slider">
//       <div class="slides">
//         <article class="slide">
//           This is a slide
//         </article>
//         <article class="slide">
//           <h1>This is also a slide</h1>
//           <p>It can contain arbitrary HTML</p>
//         </article>
//       </section>
//
//       <button class="previous">&larr;</button>
//       <button class="next">&rarr;</button>
//    </ideum-slider>
(function () {
  'use strict';

  var App = angular.module('ideum.slider', [
  ]);

})();

