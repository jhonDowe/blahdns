* If you are developer using those services, both are blocked by default. 
`data.mob.com, google-analytics, googleadservices, amazon-adsystem, crashlytics.com analytics.yahoo, doubleclick.net, hm.baidu.com, etc.. `

* Germany server has been reinstall and use new solution to provide better and faster service, enjoy (April 16, 2019)

* For more old announcements, go [here](https://github.com/ookangzheng/blahdns/issues/36)

* Say goodbye to ANY, Finally -> [rfc8482](https://blog.cloudflare.com/rfc8482-saying-goodbye-to-any/)

* Chrome on Android leaking DNS, check [HERE](https://github.com/ookangzheng/blahdns/blob/master/FAQ.md) to fix.

- Japan DoH, DoT address has been migrated to 
  * DoH: doh-jp.blahdns.com
  * DoT: dot-jp.blahdns.com
  * (old domain `doh.blahdns.com & dns.jp.blahdns.com` will shutdown on March 31, 2019)

## Our features
* Block Trackers, Ads, Malware, etc..
* No ECS, DNSSEC ready, No logs, OpenNIC TLD

## Server status
* Server status [Check status](https://stats.blahdns.com)
* Server status [https://dnsprivacy.org/jenkins/job/dnsprivacy-monitoring/](https://dnsprivacy.org/jenkins/job/dnsprivacy-monitoring/)

## Server architecture

```bash

Server (April 16, 2019)
|-- Let's Encrypt SSL
|-- Knot-resolver with rpz.blacklist (NXDDOMAIN), OPENNIC TLD, local resolver
|   |-- DNSCryptv2 (dnsdist, port 8443)
|-- dnsdist instance for DoH & DoT
|   |-- doh-server (DoH, GET, POST -- m13253)
|   |-- |-- HAProxy (https, port 443, TLS 1.3)
|-- DoT (HAProxy, port 853, 443, TLS 1.3)

```

## Config file / Client
* DNSCrypt-proxy / Stubby(DoT) / Nebulo [ Config ](https://github.com/ookangzheng/blahdns/tree/master/client-conf)
* Android DoT/DoH: [Nebulo](https://itunes.apple.com/app/dnscloak-secure-dns-client/id1452162351)
* Android DoH: [Intra](https://play.google.com/store/apps/details?id=app.intra)
* iOS Dnscryptv2/DoH: [Dnscloak](https://itunes.apple.com/app/dnscloak-secure-dns-client/id1452162351)
* Dnscryptv2: [dnscrypt-proxy](https://github.com/jedisct1/dnscrypt-proxy/)

## Server information
- Japan (DoT, DoH, Dnscryptv2)
  * IP: 108.61.201.119, 2001:19f0:7001:1ded:5400:01ff:fe90:945b
  * DNS-over-HTTPS: 
    * https://doh-jp.blahdns.com/dns-query
    * IPv4 sdns://AgMAAAAAAAAADjEwOC42MS4yMDEuMTE5ABJkb2gtanAuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
    * IPv6 sdns://AgMAAAAAAAAAKVsyMDAxOjE5ZjA6NzAwMToxZGVkOjU0MDA6MDFmZjpmZTkwOjk0NWJdABJkb2gtanAuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
  * DNS-over-TLS: dot-jp.blahdns.com, ports 853, 443
  * DNSCrypt v2, port 8443:
    * IPv4:  sdns://AQMAAAAAAAAAEzEwOC42MS4yMDEuMTE5Ojg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t
    * IPv6:
sdns://AQMAAAAAAAAALlsyMDAxOjE5ZjA6NzAwMToxZGVkOjU0MDA6MDFmZjpmZTkwOjk0NWJdOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t

- Germany (DoT, DoH, Dnscryptv2)
  * IP: 159.69.198.101, 2a01:4f8:1c1c:6b4b::1
  * DNS-over-HTTPS: 
    * https://doh-de.blahdns.com/dns-query
    * IPv4 sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
    * IPv6 sdns://AgMAAAAAAAAAF1syYTAxOjRmODoxYzFjOjZiNGI6OjFdABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
  * DNS-over-TLS: dot-de.blahdns.com, ports 853, 443
  * DNSCrypt v2, port 8443:
    * IPv4:    sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t 
    * IPv6: sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t

## Default blocked wildcard domain
* `*.wpad`

* `+.glassbox.+ `# https://techcrunch.com/2019/02/06/iphone-session-replay-screenshots

* `.+(xn--).+ ` # Blocking IDN and Non-ASCii Domain name, eg: `kdig xn--80ak6aa92e.com` (apple.com) 
1. https://www.reddit.com/r/pihole/comments/ap6ecf/regex_blocking_idn_and_nonascii_domain_names/
2. http://blog.netlab.360.com/idn_measurement_netlab/
3. https://github.com/mmotti/pihole-regex

## Awesome dns-resolver
https://gist.github.com/ookangzheng/c8fba46fe1dbcc8152e3231f53f91e86

## Huge thanks to those OSS and ORG
1. [Knot-resolver](https://github.com/CZ-NIC/knot-resolver)
2. [m13253](https://github.com/m13253/dns-over-https)
3. [DNSPrivacy.org](https://dnsprivacy.org)

## Related awesome projects
1. https://github.com/notracking/hosts-blocklists (dnsmasq)
2. https://github.com/oznu/dns-zone-blacklist (nxdomain)
3. https://github.com/anudeepND/blacklist/ (blacklist)
4. https://github.com/anudeepND/whitelist (whitelist)
5. https://www.reddit.com/comments/9xwwwy (DBL all in one)
6. https://github.com/maravento/blackweb
7. https://github.com/gaenserich/hostsblock (Linux hosts only)
8. https://github.com/mitchellkrogza/Ultimate.Hosts.Blacklist 
9. https://phishing.army/
10. https://github.com/maravento/blackweb (Squid cache)

## Disclaimer
* This is an experimental service, I'm not responsible for any down-time.
* Be sure you have agree with our [POLICY](https://github.com/ookangzheng/blahdns/#policy) before start to use. 
* This service is for PERSONAL use, huge traffic for PTR, SOA, NS crawling are not welcome, will drop ANY by default.
* We can't block some ads with Apps inside your phone (Youtube official app Ads, Facebook app Ads, Twitter app Ads... )
* Due to some reason, we will change IP randomly on Tokyo or Germany.

## Policy
* Use at your own risk. Under no circumstances will the operator be held responsible or liable in any way for any claims, damages, losses, expenses, costs or liabilities whatsoever (including, without limitation, any direct or indirect damages for loss of profits, business interruption or loss of information) resulting or arising directly or indirectly from accessing or otherwise using this service (Blahdns server).
* The operator does not guarantee in any way the access, availability and continuity of the functioning of this service. 
* By using this website and service you consent to the disclaimer and agree to its terms and conditions.

## Donate
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F2H8HS44QAV8N&source=url"> <img height='40' style='border:0px;height:40px;' src="https://blahdns.b-cdn.net/paypal-donate.png" alt="Donate with PayPal button" /></a>
|
<a href='https://ko-fi.com/P5P4GPQ8' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
