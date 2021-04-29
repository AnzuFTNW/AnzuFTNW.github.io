# [User Badges Plugin - Version 2.0.0](https://anzuftnw.github.io/anilist-css/plugins/user-badges/main.css)
This plugin allows you to add little badges next to the name of everyone posting on your page or<br>
only next to the names of certain people you can choose!<br>

## Features
- Customizable badges next to usernames of your choice

## How To Install This Plugin
1. Put this line `@import url("https://anzuftnw.github.io/anilist-css/plugins/user-badges/main.css");` on top of your custom css.
2. Then copy the following code somewhere below it and configure it to your liking.
```css
/* SETTINGS */
:root {
    /* User Badges */
    --ub-all-users: unset;
    --ub-<username>: "<badge-name>"; 
}

/* CODE */
/* Badges */
.header > a[href="/user/<username>/"].name:after{content: var(--ub-<username>);}
```
Alternatively, if you want full control, just copy parts or the whole content of [`main.css`](https://anzuftnw.github.io/anilist-css/plugins/user-badges/main.css) into your custom css.

## How To Configure This Plugin
The configuration of this plugin is a bit more advanced compared to my other plugins.
First of all it dosn't work out of the box, you need to set up atleast one user-badge.
- `--ub-all-users: unset;`
  - Adds a user-badge for everyone
  - Replace `unset` with `"<text>"` and `<text>` with what ever you want
- `--ub-<username>: "<badge-name>";`
  - Adds a user-badge for a single person
  - Replace `--ub-<username>` with for example `--ub-anzu` if you want to give the user named Anzu a user-badge
  - Replace `"<badge-name>"` with for example `"Baka"` to give him a user-badge that reads `Baka`
  - So a completed variable would look like this: `--ub-anzu: "Baka";`
  - You can also use Emojis in the text field
- `.header > a[href="/user/<username>/"].name:after{content: var(--ub-<username>);}`
  - Is also needed to add a user badge for a single person
  - Replace `<username>`, like above, with the name of the user who you want to give an user-badge
  - For example: `.header > a[href="/user/Anzu/"].name:after {content: var(--ub-anzu);}` 
  - Make sure to check your capitalization and dont forget the `/` at the end of the link

## Changelog
- 2021/01/05 - Version 2.0.0
  - completely rewritten
- 2021/04/27 - Version 1.2.0
  - removed data tags
- 2021/01/17 - Version 1.1.0
  - changed a few badges
- 2021/01/05 - Version 1.0.0
  - initial release

## Known Bugs
- Incompatible with the [`user-badges`]() plugin (mainly the donator badge)
