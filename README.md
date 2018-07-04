
## DNS Server (Ipv4)
- Dns-over-HTTPS 
  > https://doh.blahdns.com/dns-query 
  > https://doh.datt.pw/dns-query (backup)
  > sdns://AgcAAAAAAAAAAAAPZG9oLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk
  
- IP: 108.61.201.119(JP)
  > Protocol: udp/tcp 53, DoH, Dns over TLS (tls_auth_name: "dns.blahdns.com")
  > Due to some reason, we will change IP randomly
- IP: 217.61.0.97 (DE)
  > Protocol: udp/tcp 53
  
* Available access OpenNIC TLD [http://blahdns.oss/](http://blahdns.oss/) or [http://nx.bit/](http://nx.bit/)

* DOH via Mozilla Nightly tutorial [Check it out](https://www.ookangzheng.com/mozilla-nightly-enable-dns-over-https/)

* Block unwanted Ads, Malware, Phisihing, tracker, etc.

## Disclaimer
> We have no interest in logging DNS queries
> If you encouterd any problem, please submit an issue.

## Related awesome projects
1. https://github.com/anudeepND/whitelist (File containing commonly whitelisted domains for Pi-Hole.)
2. https://github.com/deathbybandaid/piholeparser (Pi-Hole Compatible lists)
3. https://github.com/mitchellkrogza/Ultimate.Hosts.Blacklist (Ultimate.Hosts.Blacklist)
4. https://github.com/collinbarrett/FilterLists (Awesome filterlist)
5. https://github.com/ZeroDot1/CoinBlockerLists (Awesome prevent mining list)


## How can I flush my DNS 
* Windows --> CMD --> ipconfig /flushdns 
* MAC --> killall -HUP mDNSResponder 
* Linux --> sudo systemctl restart NetworkManager or sudo rcnscd restart 
* Android --> Open Airplane Mode --> Close it --> Done 
