## Prevent DNS leaking from Chrome browser on Android phone

1. Type `chrome://flags`
2. search for keyword: `async dns`
3. set value to `DISABLED`
4. restart Chrome

<img src="https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/disable-async-dns-on-android-chrome.jpg" alt="Your image title" width="250"/>


## Troubleshoot 


```
// curl with DoH 
curl -H 'content-type: application/dns-message' -vL -v 'https://doh-jp.blahdns.com/dns-query?dns=AAABAAABAAAAAAAAA3d3dwdleGFtcGxlA2NvbQAAAQAB' | hexdump -C

// Kdig TLS
kdig google.com @2001:19f0:7001:1ded:5400:1ff:fe90:945b +tls
kdig google.com @108.61.201.119 +tls -p 443

```
