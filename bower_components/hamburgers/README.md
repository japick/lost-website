# Hamburgers

Hamburgers is a collection of tasty CSS-animated hamburger icons. Also included is the source as a [Sass](#sass) library. It’s modular and customizable, so cook up your own hamburger.

![](http://i.imgur.com/Ph0ndte.gif)

## Usage

1. [Download](https://github.com/jonsuh/hamburgers/blob/master/dist/hamburgers.css) and include the CSS in the `<head>` of your site:

  ```html
  <link href="dist/hamburgers.css" rel="stylesheet">
  ```

2. Add the base hamburger markup:

  ```html
  <div class="hamburger">
    <div class="hamburger-box">
      <div class="hamburger-inner"></div>
    </div>
  </div>
  ```

3. Append the class name of the type of hamburger you’re craving:

  ```html
  <div class="hamburger hamburger--collapse">
    <div class="hamburger-box">
      <div class="hamburger-inner"></div>
    </div>
  </div>
  ```

  Here’s the list of hamburger-type classes you can choose from:

  ```
  hamburger--arrow
  hamburger--arrow-r
  hamburger--arrowalt
  hamburger--arrowalt-r
  hamburger--boring
  hamburger--collapse
  hamburger--collapse-r
  hamburger--elastic
  hamburger--elastic-r
  hamburger--emphatic
  hamburger--emphatic-r
  hamburger--slider
  hamburger--slider-r
  hamburger--spin
  hamburger--spin-r
  hamburger--squeeze
  hamburger--vortex
  hamburger--vortex-r
  ```

  Note: `-r` classes are reverse variants (e.g. `hamburger--spin` spins clockwise whereas `hamburger--spin-r` spins counterclockwise.

4. Trigger the active state by appending class name `is-active`:

  ```html
  <div class="hamburger hamburger--collapse is-active">
    <div class="hamburger-box">
      <div class="hamburger-inner"></div>
    </div>
  </div>
  ```

  Since the class name would have to be toggled via JavaScript and implementation would differ based on the context of how you plan on using the hamburger, I’m going to leave the rest up to you.

## Sass

I’ve also included `.scss` source files if you use Sass as your CSS precompiler. It’s customizable and modular.

1. [Download](https://github.com/jonsuh/hamburgers/archive/master.zip) and unzip the source files.
2. Copy the files from the `_sass/hamburgers` directory into your project.
3. Import the `hamburgers.scss` file in your Sass manifest file:

  ```scss
  @import "path/to/hamburgers";
  ```

4. Customize your hamburger and/or remove any types you don’t want in `hamburgers.scss`.
5. Compile your Sass*, and voila!

\* Be sure to run the CSS through [Autoprefixer](https://github.com/postcss/autoprefixer) since the Sass doesn’t account for vendor prefixes.

### Customization

Here is the full list of default settings (found in `_sass/hamburgers/hamburgers.scss`);

```scss
$hamburger-padding-x                       : 15px !default;
$hamburger-padding-y                       : 15px !default;
$hamburger-layer-width                     : 40px !default;
$hamburger-layer-height                    : 4px !default;
$hamburger-layer-spacing                   : 6px !default;
$hamburger-layer-color                     : #000 !default;
$hamburger-layer-border-radius             : 4px !default;
$hamburger-hover-opacity                   : 0.7 !default;
$hamburger-hover-transition-duration       : 0.15s !default;
$hamburger-hover-transition-timing-function: linear !default;

// To use CSS filters as the hover effect instead of opacity,
// set $hamburger-hover-use-filter as true and
// change the value of $hamburger-hover-filter accordingly.
$hamburger-hover-use-filter: false !default;
$hamburger-hover-filter    : opacity(50%) !default;
```

To override any default settings, you can change the value(s) within `hamburgers.scss`, but I recommend you declare your new settings separately:

```scss
@import "path/to/hamburgers";

$hamburgers-padding-x: 20px;
$hamburgers-padding-y: 15px;
```

You can also create a separate file (e.g. `hamburgers-settings.scss`) with those declarations, then import it along with Hamburgers:

```scss
@import "path/to/hamburgers";
@import "hamburgers-settings"
```

#### `ems` or `rems`

Wanna work with `ems` or `rems` instead of `px`? Just change all the `px` values to the unit of your choice. Note: Be consistent (all `px` or all `ems`), otherwise it may break—the math behind the customization will fail if it attempts to perform operations with values of different units.

### Not satisfied?

Dig into `_base.scss` or `types/` and customize to your heart’s content. Fair warning: It‘s pretty delicate and may break, especially if you tweak the animations themselves.

## Accessibility

Hamburger menu icons can be useful in the right context, but they’re not the most accessible. A label can help make it more obvious that it toggles a menu.

```html
<div class="hamburger hamburger--collapse">
  <div class="hamburger-box">
    <div class="hamburger-inner"></div>
  </div>
  <span class="hamburger-label">Menu</span>
</div>
```

ARIA will help make it accessible to people with disabilities.

```html
<div class="hamburger hamburger--elastic"
     aria-label="Menu" role="button" aria-controls="navigation">
  <div class="hamburger-box">
    <div class="hamburger-inner"></div>
  </div>
</div>
<nav id="navigation">
  <!--navigation goes here-->
</nav>
```

Here are [some](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) [resources](https://webaccessibility.withgoogle.com/course) on [web](http://a11yproject.com/) [accessibility](http://www.html5accessibility.com/) and [ARIA](https://w3c.github.io/aria-in-html/).

## Browser Support

Animations use CSS3 3D transforms (`translate3d` whenever possible for GPU acceleration), which is supported by most browsers (not supported by IE9 and older and Opera Mini). For browser support, check [caniuse.com](http://caniuse.com/#search=translate3d).
