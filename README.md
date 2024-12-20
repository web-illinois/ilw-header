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

For a single page site, the site name can be an `h1` or a `div` as required:

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
## Parent unit

If the website represents a department within another unit, the parent unit `slot` can be used to link to an additional website for the parent unit:

```html
<ilw-header slot="header">
  <a slot="parent-unit" href="http://parent.example.com/">Parent Unit</a>
  <a slot="site-name" href="/">Website with Parent Unit</a>
</ilw-header>
```
## Navigation

The main navigation is a multi-level list of links that should not change within the site.

```html
<ilw-header slot="header">
  <il-main-nav slot="navigation">
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/academics">Academics</a></li>
      <li><a href="/research">Research</a></li>
      <li><a href="/alumni">Alumni</a></li>
    </ul>
  </il-main-nav>
</ilw-header>
```
For information, see the full documentation for the [ilw-header-menu](https://github.com/web-illinois/ilw-header-menu).

## Search

A simple search form can be added to the header via the search `slot`.

```html
<ilw-header slot="header">
  <form method="get" action="/search" slot="search" role="search">
    <input type="search" name="query" aria-labelledby="search-button">
    <button type="submit" id="search-button">Search</button>
  </form>
</ilw-header>
```
The following aspects of the markup are required:

- The form element must contain the search role
- The form element must contain the search slot
- The input type must be search
- The input must use the submit button for its accessible label.
- The submit button must contain an id linking it to the input.

A customized search form might include additional hidden inputs:

```html
<ilw-header slot="header">
  <form method="post" action="/search.php" slot="search" role="search">
    <input type="hidden" name="api-key" value="67890">
    <input type="search" name="q" aria-labelledby="search-button">
    <button type="submit" id="search-button" name="search" value="1">Search</button>
  </form>
</ilw-header>
```
### External References

[The Magnifying-Glass Icon in Search Design: Pros and Cons](https://www.nngroup.com/articles/magnifying-glass-icon/), Neilsen Norman Group, February 23, 2014

[Using aria-labelledby](https://www.w3.org/WAI/tutorials/forms/labels/#using-aria-labelledby)

## Links

The top-right section can be used for utility navigation:

```html
<ilw-header slot="header">
  <nav slot="links" aria-label="Utility">
    <ul>
      <li><a href="/apply">Apply</a></li>
      <li><a href="/visit">Visit</a></li>
      <li><a href="/donate">Donate</a></li>
    </ul>
  </nav>
</ilw-header>
```
- Link labels must be short. One-word labels are prefered.
- Limit links to 3 or fewer.
- Only one level of links is allowed. Additional levels of lists may not be displayed.
- The nav element must have an accessible name (e.g. "Utility").
