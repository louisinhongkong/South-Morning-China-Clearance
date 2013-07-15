
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab)
{
    chrome.cookies.getAll({domain: "scmp.com"}, function(cookies) 
    {
        for(var i=0; i<cookies.length;i++) 
        {
            chrome.cookies.remove({url: "http://scmp.com" + cookies[i].path, name: cookies[i].name});
            chrome.cookies.remove({url: "https://scmp.com" + cookies[i].path, name: cookies[i].name});
            chrome.cookies.remove({url: "http://www.scmp.com" + cookies[i].path, name: cookies[i].name});
            chrome.cookies.remove({url: "https://www.scmp.com" + cookies[i].path, name: cookies[i].name});
        }
    });
});