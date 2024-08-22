# Overview
*WixTriks* is a newly discovered *GoGuardian*-unblock exploit that works by making *GoGuardian* think that any (blocked) website is actually part of a subdomain, so it doesn't block you from visiting the blocked site. This is done by appending a high-priority whitelisted site to the end of a blocked site's URL, as a parameter. For example, if `wix.com` fits those criteria, you could append `?.wix.com` (or `&.wix.com`, if there are already parameters in the URL,) to the end of `discord.com`, which is almost always blocked, and our new unblocked *Discord* URL is `https://discord.com/?.wix.com`.
# Usage
While you could use this exploit manually and append `?.wix.com` to the end of every URL, there is a much easier and automated method involving *uBlock Origin* scriptlets. This, of course, means your district must whitelist the *uBlock Origin* extension, but there is a good chance it is already whitelisted as it is one of the best and most popular adblockers and security extensions. Here's how to set it up (if you already know how to use uBlock Origin Scriptlets, you can skip the guide).

1. Install [*uBlock Origin*](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm).
2. Click on the extension and click on the settings button.
3. Scroll down and check *I am an advanced user*, then click the small settings button that appears to the right.
4. Scroll down to `userResourcesLocation` and change the value from `unset` to `https://raw.githubusercontent.com/Operation-NoGuardian/wixtriks/main/wixtriks.js`.
5. Click *Append changes*, then go back to the main dashboard. At the top, click *My filters*.
6. In the text editor window, paste `*##+js(wixtriks.js)` and click *Apply changes*.

**And there you go!** You have successfully set up the exploit. Now any blocked site you visit will be unblocked.

# Note
Most districts won't list `wix.com` as a high-priority whitelisted site, or won't whitelist it at all. If this is the case, copy the code from `wixtriks.js` *in this repository*, change the two instances of `.wix.com` to a high-priority whitelisted site in your district, and paste it into Pastebin or Paste.EE. From there, grab the raw text URL from that paste service and use it instead of `https://raw.githubusercontent.com/Operation-NoGuardian/wixtriks/main/wixtriks.js`.
