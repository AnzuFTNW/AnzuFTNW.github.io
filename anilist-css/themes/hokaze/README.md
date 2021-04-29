# [Hokaze Theme - Version 1.5.2](https://anzuftnw.github.io/anilist-css/themes/hokaze/main.css)
My current AniList theme.<br>

## How To Install This Theme
1. Put this line `@import url("https://anzuftnw.github.io/anilist-css/themes/hokaze/main.css");` on top of your custom css.
2. Then copy the following code somewhere below it and configure it to your liking.
```css
/* Settings */
:root, .site-theme-dark, .site-theme-contrast {
  /* General Settings */
  --hokaze-br: 10px; /* Global Border Radius */
  --hokaze-pv: 30px; /* Vertical Content Padding */
  --hokaze-ph: 30px; /* Horizontal Content Padding */
  --hokaze-bt: 0.3;  /* Content Background Transparency*/
  --hokaze-nr: 30px; /* Navbar Border Radius */
  --hokaze-nl: 80%;  /* Navbar Length */
  --hokaze-sb: 4px;  /* Scrollbar Width */
  --hokaze-vo: 0.7;  /* Opacity For Various Elements */
  --hokaze-vs: 0.975;  /* Scale For Various Elements */
  --hokaze-vb: 2px;  /* Various Avatar Border Thickness */
  --hokaze-sr: 4px;  /* Social Page Border Thickness */
  --hokaze-fr: 30px; /* Footer Border Radius */
  --hokaze-fl: 85%;  /* Footer Length */
  --hokaze-bl: 4px;  /* Background 'Window' Blur Amount */
  --hokaze-rs: 1.025; /* Scaling For Load More Button And Activity Input */
  --hokaze-gs: var(--color-blue);    /* Stats Wrap Gradient Start Color */
  --hokaze-ge: var(--color-blue-dim);    /* Stats Wrap Gradient End Color */
  --hokaze-vt: all 0.5s ease-in-out; /* Transition For Various Elements */
  --hokaze-li: initial; /* Anilist Logo Source */ 
  --hokaze-lb: 0px;     /* Anilist Logo Border Thickness */
  --hokaze-lr: 0px;     /* Anilist Logo Border Radius */
  --hokaze-ls: 1.2;     /* Anilist Logo Hover Scaling */
  --hokaze-bs: rgba(0, 0, 0, 0.07) 0px 1px 2px, /* Box Shadow */
               rgba(0, 0, 0, 0.07) 0px 2px 4px,
               rgba(0, 0, 0, 0.07) 0px 4px 8px,
               rgba(0, 0, 0, 0.07) 0px 8px 16px;
  --hokaze-ns: rgba(0, 0, 0, 0.07) 0px 1px 2px, /* Box Shadow For Navbar */
               rgba(0, 0, 0, 0.07) 0px 2px 4px;
  
  /* Avatar Settings */
  --hokaze-as: 100px;   /* Avatar Size: One Value = Square, Two Values = Rectangle */
  --hokaze-ap: 50% 20%; /* Inner Avatar Position */
  --hokaze-ai: 150%;
  --hokaze-ab: 5px;   /* Avatar Border Thickness */
  --hokaze-ar: 255px;  /* Avatar Border Radius */
  --hokaze-at: all 1s ease-in-out; /* Avatar Hover Transition */
  --hokaze-av: url("https://i.imgur.com/w6WVzJH.png"); /* Avatar Picture Link */
  --hokaze-ah: 1.1; /* Avatar Hover Scale */
  
  /* Quick Maths - !DON'T TOUCH! */
  --hokaze-brt: var(--hokaze-br) var(--hokaze-br) 0 0;
  --hokaze-brb: 0 0 var(--hokaze-br) var(--hokaze-br);
  --hokaze-bra: var(--hokaze-br) var(--hokaze-br) var(--hokaze-br) var(--hokaze-br);
  --hokaze-pdh: var(--hokaze-pv) var(--hokaze-ph);
  --hokaze-maw: calc(1520px - 2 * ( 100px - var(--hokaze-ph)));
  --hokaze-abs: var(--hokaze-ab) solid rgb(var(--color-foreground));
  --hokaze-nbr: 0 0 var(--hokaze-nr) var(--hokaze-nr);
  --hokaze-nbl: calc((100% - var(--hokaze-nl)) / 2);
  --hokaze-fbr: var(--hokaze-fr) var(--hokaze-fr) 0 0;
  --hokaze-fbl: calc((100% - var(--hokaze-fl)) / 2);
  --hokaze-bch: calc(330px - 75px);
  --hokaze-bcc: calc(var(--hokaze-bch) / 2);
  --hokaze-bctc: calc(var(--hokaze-bcc) - 36px / 2 );
  --hokaze-vab: var(--hokaze-vb) solid rgb(var(--color-background));  
  --hokaze-sab: var(--hokaze-sr) solid rgb(var(--color-background));
  --hokaze-lob: var(--hokaze-lb) solid rgb(var(--color-blue));
}

/* Light Theme
:root {
    --color-background:             217,219,227;
    --color-foreground:             230,232,240;
    --color-foreground-grey:        225,227,235;
    --color-foreground-grey-dark:   217,219,227;
    --color-text:                   91,87,84;
    --color-text-light:             106,102,99;
    --color-text-lighter:           121,117,114;
    --color-text-bright:            226, 233, 229;
    --color-blue:                   169, 126, 73;
    --color-blue-dim:               191,180,164;
    --color-green:                  169, 126, 73;

}

Dark Theme
.site-theme-dark {
    --color-background:             15, 23, 25;
    --color-foreground:             28, 36, 38;
    --color-foreground-grey:        20, 28, 30;
    --color-foreground-grey-dark:   15, 23, 25;
    --color-text:                   141, 138, 134; 
    --color-text-light:             156, 153, 149;
    --color-text-lighter:           161, 168, 164;
    --color-text-bright:            176, 183, 179;
    --color-blue:                   169, 126, 73;
    --color-blue-dim:               91, 75, 64;
    --color-green:                  169, 126, 73;
} */
```
Alternatively, if you want full control, just copy parts or the whole content of [`main.css`](https://anzuftnw.github.io/anilist-css/themes/hokaze/main.css) into your custom css.


## How To Configure This Plugin
/

## Changelog
- 2021/04/29 - Version 1.5.2
  - removed scrollbar track properties for everything but the body element
  - changed footer content spacing
  - changed css comments again
        
- 2021/04/27 - Version 1.5.0
  - redid css comments
  - cleaned up the code a bit

- 2021/03/03 - Version 1.4.0
  - added following changes for the current profile only:
  - removed bio hover scaling
  - removed bio max height
  - removed markdown image border radius
  - added opacity 0 to follower badge and actions button (opacity 1 on hover)

- 2021/02/25 - Version 1.3.0
  - changed value for scaling for various elements
  - changed value for global border radius
  - changed value for scaling for load more button and iactivity input
  - changed scaling for activity history days on hover
  - disabled collapsing text activity entrys
  - changed scaling for manga and anime activity entrys
  - added scaling for text activity entrys
  - changed value for avatar border thickness
  - reverted color pallette in dark & light mode
  - removed max-height for text activity entrys

- 2021/01/13 - Version 1.2.0
  - disabled pointer events on the name element (ty @cakes <3)
  - replaced all data tags with element indicators (or whatever theyre called, these things: > + ~)
  - added avatar zoom level (for bigger images)
  - added background, not yet integrated into the variable mess
  - added customizable dark and light mode

- 2021/01/07 - Version 1.1.0
  - added customizable logo
  - added blur filter to content background
  - added user badge template
  - disabled hoh's dismiss notifications feature
  - changed activity input and load more button scaling
  - changed statswrap gradient progression bar
  - changed progress bar / loading bar
  - changed theme selector header color
  - changed footer text color
  - changed scrollbar height
  - changed scrollbar corner
  - integrated dropdown menu values
  - reverted activity username opacity

- 2021/01/05 - Version 1.0.0
  - initial release

## Known Bugs
/

---
### [<- Back](https://anzuftnw.github.io/anilist-css/themes/)  
