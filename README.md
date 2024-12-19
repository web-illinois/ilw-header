# ilw-header

Links: **[ilw-header in Builder](https://builder3.toolkit.illinois.edu/component/ilw-header/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The standard campus header should appear at the top of every page of a campus website.
The header is placed in the header slot of the ilw-page component.

The header contains five content slots:

- The site name identifies the site. For multipage sites, this may also link to the front page of the site.
- The parent unit identifies the campus unit which manages the site or contains the unit represented by the site. This should link to the site for the parent unit.
- The navigation slot contains the main navigation component for the site.
- The search slot contains a basic search engine.
- The eyebrow slot contains links which are displayed in the top-right corner of the header.

## Site Name

For a single page site, the site name can be an h1 or a div as required:

```html
<ilw-header slot="header">
  <div slot="site-name">Single-Page Website</div>
</ilw-header>
```
On sites with more than one page, the site name should link to the site homepage:

```html
<ilw-header slot="header">
  <a slot="site-name" href="/">Website with Multiple Pages</a>
</ilw-header>
```

## Accessibility Notes and Use

Consider accessibility, both for building the component and for its use:

- Is there sufficient color contrast?
- Can the component be fully understood without colors?
- Does the component need alt text or ARIA roles?
- Can the component be navigated with a keyboard? Is the tab order correct?
- Are focusable elements interactive, and interactive elements focusable?
- Are form fields, figures, fieldsets and other interactive elements labelled?

## External References
