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

## Attributes

* `menu`: If set to `none`, the menu will not appear. This will hide the menu button, the navigation slot, search slot, and eyebrow slot on both mobile and desktop versions. 
* `source`: The UTM source set for the header going back to the Illinois web site. Defaults to *Illinois_App*. 

## Site Name

For a single page site, the site name can be an `h1` or a `div` as required:

```html
<ilw-header slot="header">
  <div slot="site-name">Single-Page Website</div>
</ilw-header>
```
On sites with more than one page, the site name should link to the site homepage. If you use an `h1` for the site name for accessiblity, it should contain the link.

```html
<ilw-header slot="header">
  <a slot="site-name" href="/">Website with Multiple Pages</a>
</ilw-header>
```

```html
<ilw-header slot="header">
  <h1 slot="site-name"><a href="/">Website with Multiple Pages</a></h1>
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
  <ilw-header-menu slot="navigation">
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/academics">Academics</a></li>
      <li><a href="/research">Research</a></li>
      <li><a href="/alumni">Alumni</a></li>
    </ul>
  </ilw-header-menu>
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

- The form or div element must contain the search role
- The form or div element must contain the search slot
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

## Form login and logout

Either the links slot or the search slot may contain login information for applications. If this is the case, you can use the following format

- A `<div>` or `<form>` with an appropriate aria-label attribute
- An optional `<span>` that has a the user that is logged in
- An `<a>` or `<button>` that goes to the application's login or logout area. This may be a submit form.
- If this is a form, you may include additional hidden form elements

# Dark Mode

The Illinois Toolkit supports an optional Dark Mode control in the `ilw-header` web component.

Dark Mode is **opt-in**. Applications must explicitly enable the Dark Mode checkbox.

Dark Mode supports both the user's system/browser color preference and an explicit 
user preference selected through the Dark Mode checkbox. The system/browser preference 
is detected using the CSS prefers-color-scheme media feature.

## Enabling Dark Mode

Add the `dark-mode-visible` attribute to the `ilw-header` component:

```html
<ilw-header dark-mode-visible></ilw-header>
```

The corresponding TypeScript property is:

```ts
@property({ type: Boolean })
darkModeVisible = false;
```

The default value is `false`, so existing applications will not display the Dark Mode checkbox unless they explicitly enable it.

### Property

| Property          | Type      | Default | Description                                                           |
| ----------------- | --------- | ------- | --------------------------------------------------------------------- |
| `darkModeVisible` | `boolean` | `false` | Controls whether the Dark Mode checkbox is displayed in `ilw-header`. |

The Lit property:

```ts
darkModeVisible
```

maps to the HTML attribute:

```html
dark-mode-visible
```

Because this is a Boolean property, the following enables it:

```html
<ilw-header dark-mode-visible></ilw-header>
```

The following leaves it disabled:

```html
<ilw-header></ilw-header>
```

## How Dark Mode Works

Dark Mode has two sources of theme preference:

* **System/browser preference** using prefers-color-scheme
* **Explicit user preference** using the Dark Mode checkbox

The system preference is used when the user has not made an explicit Dark Mode selection.

Once the user selects a preference using the Dark Mode checkbox, that preference is saved and takes precedence over the system preference.

### Preference priority

| Saved Preference | System Preference | Result |
| ---------------- | ----------------- | ------ |
| No cookie        | Light             | Light  |
| No cookie        | Dark              | Dark   |
| `true`           | Light             | Dark   |
| `true`           | Dark              | Dark   |
| `false`          | Light             | Light  |
| `false`          | Dark              | Light  |

This is detected with:

```css
@media (prefers-color-scheme: dark) {
    /* Dark Mode colors */
}
```

The corresponding light preference can be detected with:

```css
@media (prefers-color-scheme: light) {
    /* Light Mode colors */
}
```
The application does not need to use JavaScript to detect the system preference for CSS-based Dark Mode styling.

## Explicit User Preference

When the user interacts with the Dark Mode checkbox in `ilw-header`, the selected preference is saved in the `ilw-dark-mode` cookie.

The cookie contains either:

```text
ilw-dark-mode=true
```

or:

```text
ilw-dark-mode=false
```

The saved preference takes precedence over the system/browser preference.

For example, if the user's operating system is configured for Dark Mode but the user has explicitly selected Light Mode in the Illinois Toolkit checkbox, Light Mode remains active.

## Theme Attribute

An explicit user preference is represented on the `<html>` element using the `data-theme` attribute.

Dark Mode:

```html
<html data-theme="dark">
```

Light Mode:

```html
<html data-theme="light">
```

When there is no saved user preference, the application does not need to set `data-theme`. This allows the CSS `prefers-color-scheme` media query to determine the default appearance.

## `ilw-header`

When `darkModeVisible` is enabled, `ilw-header`:

1. Displays the Dark Mode checkbox.
2. Checks for a saved `ilw-dark-mode` preference.
3. Applies the saved preference when one exists.
4. Updates the `ilw-dark-mode` cookie when the user changes the checkbox.
5. Updates the explicit `data-theme` attribute when the user makes a selection.
6. Dispatches the `ilw-dark-mode-changed` event.

If there is no saved preference, `ilw-header` does not need to override the system preference.

Example:

```html
<ilw-header dark-mode-visible></ilw-header>
```

## `ilw-page`

`ilw-page` provides the page-level Dark Mode CSS.

The CSS supports both system preference and explicit theme selection.

### System Preference

```css
@media (prefers-color-scheme: dark) {
    :root {
        --ilw-color--background: #191919;
        --ilw-color--text: #f4f4f4;
    }
}
```

### Explicit Dark Mode

```css
[data-theme="dark"] {
    --ilw-color--background: #191919;
    --ilw-color--text: #f4f4f4;
}
```

### Explicit Light Mode

```css
[data-theme="light"] {
    --ilw-color--background: var(--ilw-color--white--background);
    --ilw-color--text: var(--ilw-color--white--text);
}
```

Explicit `data-theme` values override the system preference.

## Color Variables

Dark Mode uses the Illinois Toolkit's semantic color variables.

Examples include:

* `--ilw-color--background`
* `--ilw-color--text`
* `--ilw-color--border`
* `--ilw-color--link`
* `--ilw-color--heading`
* `--ilw-color--control`
* `--ilw-color--table-background`

Dark Mode layers on top of the Toolkit's existing semantic color system rather than replacing the existing blue, orange, gray, and gradient themes.

## Custom Event

When the user changes the Dark Mode checkbox, `ilw-header` dispatches:

```text
ilw-dark-mode-changed
```

Applications or components that need to respond to a Dark Mode change can listen for this event.

The event allows `ilw-header` and `ilw-page` to remain loosely coupled.

## Cookie

The Dark Mode preference is stored in:

```text
ilw-dark-mode
```

Possible values are:

```text
true
false
```

The cookie represents an **explicit user preference**.

If the cookie does not exist, the system/browser preference can determine the default theme through `prefers-color-scheme`.

## Application Setup

An application using the Dark Mode checkbox should:

### 1. Enable the checkbox

```html
<ilw-header dark-mode-visible></ilw-header>
```

### 2. Include the Dark Mode CSS

The Dark Mode CSS is maintained with `ilw-page`.

### 3. Allow the system preference to provide the default

When there is no saved preference, CSS uses:

```css
@media (prefers-color-scheme: dark)
```

to detect the user's system/browser preference.

### 4. Allow `ilw-header` to manage explicit user preferences

The header manages:

* The Dark Mode checkbox
* The `ilw-dark-mode` cookie
* The explicit `data-theme` value
* The `ilw-dark-mode-changed` event

## Example

```html
<ilw-page>
    <ilw-header dark-mode-visible></ilw-header>

    <main>
        <h1>Example Page</h1>
        <p>This page supports Dark Mode.</p>
    </main>
</ilw-page>
```

### User Has No Saved Preference

If the user has no `ilw-dark-mode` cookie, the page follows the system/browser preference.

System set to Light:

```text
Light Mode
```

System set to Dark:

```text
Dark Mode
```

### User Explicitly Selects Dark Mode

The user checks the Dark Mode checkbox.

The application saves:

```text
ilw-dark-mode=true
```

and applies:

```html
<html data-theme="dark">
```

### User Explicitly Selects Light Mode

The user unchecks the Dark Mode checkbox.

The application saves:

```text
ilw-dark-mode=false
```

and applies:

```html
<html data-theme="light">
```

The explicit selection remains in effect even if the system/browser preference changes.

## Backward Compatibility

Dark Mode is disabled by default:

```ts
darkModeVisible = false;
```

Existing applications using `ilw-header` without the `dark-mode-visible` attribute will continue to behave as before.

Applications that want to provide the Dark Mode checkbox can enable it with:

```html
<ilw-header dark-mode-visible></ilw-header>
```

## Testing

Dark Mode should be tested using combinations of system preference and saved user preference.

### No Cookie + System Light

Expected:

```text
Light Mode
```

### No Cookie + System Dark

Expected:

```text
Dark Mode
```

### Cookie = `true` + System Light

Expected:

```text
Dark Mode
```

The explicit user preference overrides the system preference.

### Cookie = `false` + System Dark

Expected:

```text
Light Mode
```

The explicit user preference overrides the system preference.

### User Checks Dark Mode

Expected:

```text
ilw-dark-mode=true
data-theme="dark"
```

### User Unchecks Dark Mode

Expected:

```text
ilw-dark-mode=false
data-theme="light"
```

## Summary

| Component    | Responsibility                                        |
| ------------ | ----------------------------------------------------- |
| `ilw-header` | Displays the optional Dark Mode checkbox              |
| `ilw-header` | Manages explicit user preference                      |
| `ilw-header` | Stores preference in `ilw-dark-mode`                  |
| `ilw-header` | Sets explicit `data-theme`                            |
| `ilw-header` | Dispatches `ilw-dark-mode-changed`                    |
| `ilw-page`   | Provides Dark Mode CSS                                |
| CSS          | Detects system preference with `prefers-color-scheme` |
| Application  | Enables the checkbox with `dark-mode-visible`         |

To enable the Dark Mode checkbox:

```html
<ilw-header dark-mode-visible></ilw-header>
```

When no explicit user preference exists, the system/browser preference is used. When the user makes an explicit selection, that preference takes precedence and is persisted through the `ilw-dark-mode` cookie.

