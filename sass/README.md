#Gratis and LibSass



## Barebones Sass Structure
The barebones CSS structure provided in this starterkit uses many of the ideas
discussed in Jonathan [Snook's SMACSS](http://smacss.com) and is intended to
provide a starting point for building modular, scalable CSS using Sass and
Drupal.

Multiple Sass partials are used to help organise the styles, these are combined
by including them in styles.scss which is compiled into styles.css in the css/
directory.

All styles are included in order of specificity, this means that as you go down
the document each section builds upon and inherits sensibly from the previous
ones. This results in less undoing of styles, less specificity problems and
all-round better architected and lighter stylesheets.

The file and directory structure contained in this folder looks something like
this:

### Top level files
These files are the main entry points for the Sass compiler and shouldn't
directly contain any CSS code, instead they only serves to combine the Sass
contained in the partials (see below) through @import directives.

#### gratis.styles.scss
This file aggregates all the components into a single file.

#### gratis.color-palettes.scss
This file contains the color styles sass loops.

#### gratis.normalize.scss
This file provides a CSS reset/normalize generated based on the legacy
variables.

#### gratis.hacks.scss
This file may be used to provide temporary hot-fixes for style issues that
you plan to properly implement as components at a later point in time or simply
don't have a proper solution for yet.

#### variables
This is where you place your Sass variables.

#### abstractions
This is where you place your functions, mixins and extends.

#### partials
This is where you place all your basic, raw HTML element styling.
