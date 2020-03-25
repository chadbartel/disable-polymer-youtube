var targetUrl = "https://www.youtube.com/*";
var disable_option = "disable_polymer=true";
var autoplay_option = "autoplay=1"

function rewriteUrl(req) {
  if (!req.url.includes("disable_polymer") && !req.url.includes("list=WL"))
    if (req.url.includes("?"))
      return { redirectUrl: req.url + "&" + disable_option};
    else
      return { redirectUrl: req.url + "?" + disable_option};
  else if (!req.url.includes("disable_polymer") && req.url.includes("list=WL"))
    if (req.url.includes("?"))
      return { redirectUrl: req.url + "&" + autoplay_option};
    else
      return { redirectUrl: req.url + "?" + autoplay_option};
}

browser.webRequest.onBeforeRequest.addListener(
  rewriteUrl,
  { urls: [targetUrl], types: ["main_frame"]},
  ["blocking"]
);
