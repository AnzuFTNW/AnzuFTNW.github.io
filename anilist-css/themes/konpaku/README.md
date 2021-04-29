# [Konpaku Theme - Version 2.0.0](https://anzuftnw.github.io/anilist-css/themes/konpaku/main.css)
 A clean rewrite of my very first AniList theme.<br>

## How To Install This Theme
1. Put this line `@import url("https://anzuftnw.github.io/anilist-css/themes/konpaku/main.css");` on top of your custom css.
2. Then copy the following code somewhere below it and configure it to your liking.

```css
:root, .body, .site-theme-dark, .site-theme-contrast {
    /* settings */
    --konpaku-navbar-height: 46px;
    --konpaku-border-size: 4px;
    --konpaku-shadow: 0 0 36px rgba(0, 0, 0, 0.5);
    --konpaku-content-width: 925px;
    --konpaku-scrollbar-width: 7px;
    --konpaku-color-gray: 106, 99, 104;
    --konpaku-color-pink: 255, 164, 181;
    --konpaku-color-green: 124, 173, 156;
    --konpaku-color-hair: 210, 208, 226;
    --konpaku-background-image: url("https://i.imgur.com/3dXf8eK.gif");
    --konpaku-render-image: url("https://s8.gifyu.com/images/konpaku-gif-tt7c99b3c72790f9d8.gif");
    --konpaku-logo-image: url("https://i.imgur.com/Qc21ypw.png");
    
    /* color overwrite */
    --color-background: var(--konpaku-color-hair);
    --color-foreground: var(--konpaku-color-hair);
    --color-text: var(--konpaku-color-gray);
    --color-text-light: var(--konpaku-color-gray);
    --color-text-lighter: var(--konpaku-color-gray);
    --color-text-bright: var(--konpaku-color-gray);
    --color-blue: var(--konpaku-color-green);
    --color-blue-dim: var(--konpaku-color-gray);
    --color-green: var(--konpaku-color-green);
    --color-background-100: var(--konpaku-color-hair);
    --color-background-200: var(--konpaku-color-hair);
    --color-gray-100: var(--konpaku-color-hair);
    --color-gray-600: var(--konpaku-color-gray);
    --color-gray-700: var(--konpaku-color-gray);
    --color-gray-800: var(--konpaku-color-green);
    --color-gray-900: var(--konpaku-color-green);
}
```

Alternatively, if you want full control, just copy parts or the whole content of [`main.css`](https://anzuftnw.github.io/anilist-css/themes/konpaku/main.css) into your custom css.


## How To Configure This Plugin
/

## Changelog
- 2021/04/27 - Version 2.0.0
  - 2.0 release
  - rewritten from sratch
  - integrated dropdown menus
  - removed all data tags
  - added and fixed a lot of minor things
  - added a few settings for easier theme customization
  - fixed a fucking typo in file name, finally after all this time.. [kopaku -> konpaku]

- 2020/11/07 - Version 1.4.0
  - final version

- 2020/10/22 - Version 1.3.0
  - fixed light and contrast mode
  - changed konpaku gif to resize itself depending on the users resolution (hopefully)
  - fixed forum comments section
  - fixed a variable in the color section

- 2020/10/17 - Version 1.2.0
  - fixed hoh filters and buttons under the social tab

- 2020/10/14 - Version 1.1.0
  - markdown video border added
  - increased border size from 2px to 4px
  - adapted logo and social avatar size to bigger borders

- 2020/10/13 - Version 1.0.0
  - initial release 

## Known Bugs
/

---
### [<- Back](https://anzuftnw.github.io/anilist-css/themes/)  
