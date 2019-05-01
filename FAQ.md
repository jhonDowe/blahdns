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

## Mac OSX Mojave use Openssl TLS 1.3 

```
brew upgrade
brew install openssl@1.1

// Put openssl tls 1.3 as first choice on zsh, paste it and restart terminal
echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc

// Debug DoH with TLS 1.3
openssl s_client -state -debug -msg -connect doh-jp.blahdns.com:443 -tls1_3

## DNSSEC validation test

Use `dig` to test, this will return with header `AD`

```
dig blahdns.com +dnssec +multi
```

This will failed, should only return a `SERVFAIL`

```
dig www.dnssec-failed.org 

```
