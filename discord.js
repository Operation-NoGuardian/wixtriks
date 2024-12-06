/// discord.js
if(isDiscordDomain(window.location.hostname.endsWith('discord.com')||window.location.hostname.endsWith('discordapp.com'))){
  const url = new URL(window.location);
  if(!url.searchParams.has('.wix.com')){url.searchParams.append('.wix.com', '');history.replaceState(null, '', url.toString());}
}
