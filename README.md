## Announcement
* I planned to close port 53 around at the end of this year, so be sure you change your connection either to DoT, Doh, DNSCrypt.
* DNS-over-TLS now support port 443(bypass firewall), 853 by default.

## Our features
* Block Tracker, Ads, Malware sites.
* DNSSEC ready
* No logs
* OpenNIC TLD

## Disclaimer
* This is an experimental service, I'm not responsible for any down-time.
* Be sure you have agree with our [POLICY](https://github.com/ookangzheng/blahdns/#policy) before start to use. 
* This service is for PERSONAL use, huge traffic for PTR, ANY, SOA crawling are not welcome.
* Donation are welcome.
* Due to some reason, we will change IP randomly.

## Server architecture

```bash
. Let's Encrypt SSL
. Unbound (DNS Resolver)
|   |-- rpz.blacklist (DNS Firewall, return NXDDOMAIN)
|   |-- knot-resolver (DNS forwarder)
|   |   |-- DNSCrypt (DNScrypt-wrapper)
|   |   |-- haproxy (TLS, -- BETA Testing, support TLS 1.3)
|   |   |-- m13253/dns-over-https (DNS-over-HTTPS)
|   |   |-- |-- haproxy (https, -- BETA Testing, support TLS 1.3)
`-- OpenNIC forwarder
```

## Server information
- Tokyo, Japan
  * IP: 108.61.201.119, 2001:19f0:7001:1ded:5400:01ff:fe90:945b
  * DNS-over-HTTPS: https://doh.blahdns.com/dns-query
    * sdns://AgMAAAAAAAAADjEwOC42MS4yMDEuMTE5AA9kb2guYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
  * DNS-over-TLS: dns.jp.blahdns.com, port 853, 443
  * DNSCrypt v2, port 8443:
    * IPv4:  sdns://AQMAAAAAAAAAEzEwOC42MS4yMDEuMTE5Ojg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t
    * IPv6:
sdns://AQMAAAAAAAAALlsyMDAxOjE5ZjA6NzAwMToxZGVkOjU0MDA6MDFmZjpmZTkwOjk0NWJdOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t

- Germany
  * IP: 159.69.198.101, 2a01:4f8:1c1c:6b4b::1
  * DNS-over-HTTPS: https://doh-de.blahdns.com/dns-query
    * sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
  * DNS-over-TLS: dot-de.blahdns.com, port 853, 443
  * DNSCrypt v2, port 8443:
    * IPv4:    sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t 
    * IPv6: sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t

## Other
* Server status [Check status](https://stats.blahdns.com)
* DNSCrypt-proxy and Stubby [config file](https://github.com/ookangzheng/blahdns/tree/master/client-conf)
* Server status [https://dnsprivacy.org/jenkins/job/dnsprivacy-monitoring/](https://dnsprivacy.org/jenkins/job/dnsprivacy-monitoring/)
* Different between encrypted DNS vs naked DNS request [https://imgur.com/a/3JP9kn0](https://imgur.com/a/3JP9kn0)
* DoH via Mozilla Nightly tutorial [Check it out](https://www.ookangzheng.com/mozilla-nightly-enable-dns-over-https/)

## Related awesome projects
1. https://github.com/notracking/hosts-blocklists
2. https://github.com/publicarray/dns-resolver-infra
3. https://v.firebog.net/hosts/lists.php?type=nocross
4. https://github.com/oznu/dns-zone-blacklist (nxdomain)
5. https://github.com/anudeepND/blacklist/ (blacklist)
6. https://github.com/anudeepND/whitelist (whitelist)
6. https://github.com/privacytoolsIO/privacytools.io

## Huge thanks to those OSS and ORG
1. [Knot-resolver](https://github.com/CZ-NIC/knot-resolver)
2. [Dnsdist](https://dnsdist.org)
3. [Dns-over-HTTPS](https://github.com/m13253/dns-over-https)
4. [DNSCrypt](http://dnscrypt.info/)
5. [Unbound DNS](https://nlnetlabs.nl/projects/unbound)
5. [DNSPrivacy.org](https://dnsprivacy.org)

## Expired announcements
* Old germany server IP 217.61.0.97 will shutdown at October 30 2018
* Blahdns Germany Server Migration announcement, Start: October 28, 2018 8:00:00 AM CEST, follow this [issue](https://github.com/ookangzheng/blahdns/issues/5)

## Policy
* Use at your own risk. Under no circumstances will the operator be held responsible or liable in any way for any claims, damages, losses, expenses, costs or liabilities whatsoever (including, without limitation, any direct or indirect damages for loss of profits, business interruption or loss of information) resulting or arising directly or indirectly from accessing or otherwise using this service (Blahdns server).
* The operator does not guarantee in any way the access, availability and continuity of the functioning of this service. 
* By using this website and service you consent to the disclaimer and agree to its terms and conditions.

## Donate
<a href="https://buymeacoff.ee/elk6NqZhi" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
|
<a href='https://ko-fi.com/P5P4GPQ8' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
