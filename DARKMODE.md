# Dark Mode Implementation Guide

This guide explains how an application can enable Dark Mode using the Illinois Toolkit.

## 1. Add Dark Mode CSS

Include the Illinois Toolkit Dark Mode CSS in the application.

The CSS should support both system preference and explicit theme selection:

```css
@media (prefers-color-scheme: dark) {
    /* Dark Mode styles */
}

[data-theme="dark"] {
    /* Dark Mode styles */
}

[data-theme="light"] {
    /* Light Mode styles */
}
```

## 2. Enable the Dark Mode Checkbox

Add the `dark-mode-visible` attribute to `ilw-header`:

```html
<ilw-header dark-mode-visible></ilw-header>
```

The checkbox is hidden by default, so applications must explicitly enable it.

## 3. System/Browser Preference

If the user has **not selected a Dark Mode preference**, the application follows the browser/OS setting.

```css
@media (prefers-color-scheme: dark) {
    /* Dark Mode */
}
```

For example:

| System Setting | No Cookie | Result |
| -------------- | --------- | ------ |
| Light          | No        | Light  |
| Dark           | No        | Dark   |

## 4. User Preference

When the user changes the Dark Mode checkbox, the preference is saved in the `ilw-dark-mode` cookie.

| Cookie                | Result     |
| --------------------- | ---------- |
| `ilw-dark-mode=true`  | Dark Mode  |
| `ilw-dark-mode=false` | Light Mode |

The user's saved preference takes priority over the system preference.

For example:

* System = Dark + cookie = `false` → **Light**
* System = Light + cookie = `true` → **Dark**

## 5. Theme Attribute

When the user makes an explicit selection, the application uses the `data-theme` attribute on `<html>`.

Dark Mode:

```html
<html data-theme="dark">
```

Light Mode:

```html
<html data-theme="light">
```

If there is no saved preference, `data-theme` does not need to be set. The `prefers-color-scheme` CSS determines the theme.

## 6. Use Toolkit Color Variables

Dark Mode should use the Illinois Toolkit semantic color variables, such as:

```css
--ilw-color--background
--ilw-color--text
--ilw-color--border
--ilw-color--link
--ilw-color--heading
--ilw-color--control
--ilw-color--table-background
```

Example:

```css
[data-theme="dark"] {
    --ilw-color--background: #191919;
    --ilw-color--text: #f4f4f4;
}
```

## 7. Application Example

```html
<ilw-page>
    <ilw-header dark-mode-visible></ilw-header>

    <main>
        <h1>My Application</h1>
        <p>This application supports Dark Mode.</p>
    </main>
</ilw-page>
```

## 8. Test Dark Mode

Test these scenarios:

* [ ] No cookie + System Light → Light
* [ ] No cookie + System Dark → Dark
* [ ] Cookie `true` + System Light → Dark
* [ ] Cookie `false` + System Dark → Light
* [ ] Check checkbox → Dark Mode
* [ ] Uncheck checkbox → Light Mode
* [ ] Refresh page → Preference is retained

### Verify in Browser

Check system preference:

```js
window.matchMedia('(prefers-color-scheme: dark)').matches
```

Check cookie:

```js
document.cookie
```

Check explicit theme:

```js
document.documentElement.getAttribute('data-theme')
```

## Summary

The Dark Mode priority is:

```text
User preference
      ↓
ilw-dark-mode cookie
      ↓
System/browser preference
      ↓
prefers-color-scheme
```

**If the user has not made a choice, follow the system preference.
If the user has made a choice, follow the saved preference.**
