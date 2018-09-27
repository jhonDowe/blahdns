# Server information

- Tokyo, Japan
  > * IP: 108.61.201.119
  > * IPv6: 2001:19f0:7001:1ded:5400:01ff:fe90:945b
  > * Port: 53, 443, 853
  > * DoH: https://doh.blahdns.com/dns-query or  https://doh.datt.pw/dns-query
  > * DoT (tls_auth_name: dns.de.blahdns.com, port 853)
  > * Due to some reason, we will change IP randomly

- Frankfut, Germany
  > * IP: 217.61.0.97
  > * IPv6: 2a03:a140:10:2461::1
  > * Port: 53, 443, 853
  > * DoH: https://doh.de.blahdns.com/dns-query
  > * DoT (tls_auth_name: dns.jp.blahdns.com, port 853)
  > * Due to some reason, we will change IP randomly
* Block unwanted Ads, Malware, Phisihing, Tracker, etc.
* Real-time monitored server status [https://dnsprivacy.org/jenkins/job/dnsprivacy-monitoring/](https://dnsprivacy.org/jenkins/job/dnsprivacy-monitoring/)
* Different between encrypted DNS vs naked DNS request [https://imgur.com/a/3JP9kn0](https://imgur.com/a/3JP9kn0)

* DoH via Mozilla Nightly tutorial [Check it out](https://www.ookangzheng.com/mozilla-nightly-enable-dns-over-https/)

## Disclaimer
> We have no interest in logging DNS queries
> If you encouterd any problem, please submit an issue.

## Software that I used and huge thanks to those OSS who made blahdns possible
1. [Knot-resolver] (https://github.com/CZ-NIC/knot-resolver)
2. [dnsdist] (http://dnsdist.org)
3. [Unbound DNS] (https://nlnetlabs.nl/projects/unbound)
4. [Dns-over-HTTPS] (https://github.com/m13253/dns-over-https)

## Related awesome projects
1. https://github.com/anudeepND/whitelist (File containing commonly whitelisted domains for Pi-Hole.)
2. https://github.com/deathbybandaid/piholeparser (Pi-Hole Compatible lists)
3. https://github.com/mitchellkrogza/Ultimate.Hosts.Blacklist (Ultimate.Hosts.Blacklist)
4. https://github.com/collinbarrett/FilterLists (Awesome filterlist)
5. https://v.firebog.net/hosts/lists.php?type=nocross
6. https://firebog.net/
7. https://github.com/oznu/dns-zone-blacklist


## How can I flush my DNS 
* Windows --> CMD --> ipconfig /flushdns 
* MAC --> killall -HUP mDNSResponder 
* Linux --> sudo systemctl restart NetworkManager or sudo rcnscd restart 
* Android --> Open Airplane Mode --> Close it --> Done 

## Donate
> A coffee :D，Thanks!

<a href="https://buymeacoff.ee/elk6NqZhi" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
|
<a href='https://ko-fi.com/P5P4GPQ8' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
