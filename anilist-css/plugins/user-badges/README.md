# [User Badges Plugin - Version 2.0.0](https://anzuftnw.github.io/anilist-css/plugins/user-badges/main.css)
This plugin allows you to add little badges next to the name of everyone posting on your page or<br>
only next to the names of certain people you can choose!

## Features
- Customizable badges next to usernames of your choice
- You are also able to add them infront of usernames instead

## How To Install This Plugin
1. Put this line `@import url("https://anzuftnw.github.io/anilist-css/plugins/user-badges/main.css");` on top of your custom css.
2. Then copy the following code somewhere below it and configure it to your liking.
```css
/* SETTINGS */
:root {
    /* Custom Profile Color */
    --cpc-color: 61,180,242;
    --cpc-color-dim: 141,178,219;

    /* Custom Profile Avatar */
    --cpa-replace: unset;
    --cpa-url: none;
    --cpa-zoom: 100%;
    --cpa-position: 50% 100%;

    /* Custom Profile Badge */
    --cpb-toggle: none;
    --cpb-text: "Badge";

    /* Custom Donator Badge */
    --cdb-toggle: none;
    --cdb-text: "Donator";
    --cdb-rainbow: default;
}
```
Alternatively, if you want full control, just copy parts or the whole content of [`main.css`](https://anzuftnw.github.io/anilist-css/plugins/user-badges/main.css) into your custom css.

## How To Configure This Plugin
To configure this plugin just edit the settings you copied above.<br>
Here is a list to show you what each variables does and how to use it:
- `--cpc-color: x,x,x;`
  - Changes parts your accent color
  - Replace `x,x,x` with your RGB color code
- `--cpc-color-dim: x,x,x;`
  - Changes parts of your accent color
  - Replace `x,x,x` with your RGB color code
- `--cpa-replace: unset;`
  - Enables or disables the usage of an animated profile avatar
  - Replace `unset` with a size of atleast `230px` to hide your current profile picture
- `--cpa-url: unset;`
  - Defines your new avatar
  - Replace `unset` with `url("<link>")` and `<link>` with a link to your new avatar
  - Your link needs to end with a file type like `.png`, `.jpg` or `.gif` for example
  - Make sure to hide your current avatar with `--cpa-replace: 230px;`
- `--cpa-zoom: 100%;`
  - Zooms in or out of your new avatar
  - Increase the number to zoom in or decrease it to zoom out
- `--cpa-position: 50% 100%;`
  - Changes the position of your new avatar
  - Increase or decrease the first number to move your avatar to the left or to the right
  - Increase or decrease the second number to move your avatar further to the top or to lower it
  - Increasing the numbers above `100%` has no effect.
- `--cpb-toggle: none;`
  - Enables or disables your profile badge
  - Replace `none` with for example `inherit` to display the badge
- `--cpb-text: "Badge";`
  - Replaces the text inside the profile badge
  - Just replace `"Badge"` with whatever you want but make sure to keep the `""`
- `--cdb-toggle: none;`
  - Enables or disables your donator badge
  - Replace `none` with for example `inherit` to display the badge
- `--cdb-text: "Donator";;`
  - Replaces the text inside the donator badge
  - Just replace `"Donator"` with whatever you want but make sure to keep the `""`
- `--cdb-rainbow: default;`
  - Enables or disables rainbow color
  - Replace `default` with `rainbow` if you want a rainbow badge

## Changelog
- 2021/04/29 - Version 1.0.0
  - initial release

## Known Bugs
- Incompatible with the [`user-badges`]() plugin (mainly the donator badge)
- Donator badge text color is white and not gray (should only be white with rainbow mode)
