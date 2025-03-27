/// discord.js
if(window.location.hostname.endsWith('discord.com')||window.location.hostname.endsWith('discordapp.com')){
  const url=new URL(window.location.href);
  url.searchParams.set('.wix.com','.wix.com');history.replaceState({path:url.href},'',url.href);
};
