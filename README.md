# WixTriks
*WixTriks* is a uBlock Origin scriptlet that bypasses GoGuardian when it blocks a page. To learn how to install it, go [here](https://github.com/FinnBaltazar1111/uDevTools) (you should know how to already) (make sure to use `blocked.goguardian.com` for the URL trigger instead of `*`).

# How it works
So basically, the manual version of *WixTriks* entails that you put `?.wix.com` at the end of a blocked URL. The scriptlet automates this process by (1.) detecting when you're on a `blocked.goguardian.com` page, (2.) decoding the `ctx` parameter (which is base64) to get the URL that is blocked, and (3.) setting `window.location` back to the blocked URL, but appending `?.wix.com` to the end of it.

> [!IMPORTANT]
> This is called *WixTriks* because *wix.com* is high enough on the URL whitelist in our district (we've also noticed that Ducksters also works, but that's a way longer name). **This may not, and probably won't, be the case for you! If it isn't, export and look at a `policy.json` file to see what sites are high enough on the whitelist, then modify the code and use that.**

> [!NOTE]
> *WixTriks* is unfinished and unmaintained. Some blocked pages may not trigger *WixTriks* for some reason (so you'd have to add the `?.[domain]` spoof to the end of the URL yourself), and some others don't support *WixTriks* because of it's blacklist status.

> [!NOTE]
> This is just a backup kajig in case you find yourself temporarily unable to use much better methods of defying the rules and going to sites you aren't supposed to. This sucks (Especially on Discord). Don't use it unless you need to.

## Usage with Discord

If you plan to use this mostly for Discord, you can use the WIP `discord.js` scriptlet instead, which aims to provide seamless transition between Discord pages.
