# Ads block by DNS service

## DNS Server (Ipv4)
- IP: 45.63.124.65 (JP), Dns-over-https(DOH) availble! (https://doh.datt.pw/) 
- IP: 217.61.0.97 (DE)

* Block unwanted Ads, Malware, Phisihing, tracker, etc.
> 1. EasyPrivacy + EasyList
> 2. Chinese (trackers, ads, phishing)
> 3. Access OpenNIC modern domain [http://blahdns.oss/](http://blahdns.oss/) or [http://nx.bit/](http://nx.bit/)
> For more details, please visit [Hosts](https://github.com/ookangzheng/blahdns/tree/master/hosts)

## Disclaimer
> We have no interest in logging DNS queries
> Keeping your ISP from seeing which websites you visit.
> If you encouterd any problem, please open an issue.

## Related awesome projects
1. https://github.com/anudeepND/whitelist (File containing commonly whitelisted domains for Pi-Hole.)
2. https://github.com/deathbybandaid/piholeparser (Pi-Hole Compatible lists)
3. https://github.com/mitchellkrogza/Ultimate.Hosts.Blacklist (Ultimate.Hosts.Blacklist)
4. https://github.com/collinbarrett/FilterLists (Awesome filterlist)
5. https://github.com/ZeroDot1/CoinBlockerLists (Awesome prevent mining list)

## Open source JavaScript e-learning for cyber nomads
### Wizardamigos 
> [http://wizardamigos.com](http://wizardamigos.com) or [http://wizardamigos.oss/](http://wizardamigos.oss/) (OpenNIC)

## How can I flush my DNS 
* Windows --> CMD --> ipconfig /flushdns 
* MAC --> killall -HUP mDNSResponder 
* Linux --> sudo systemctl restart NetworkManager or sudo rcnscd restart 
* Android --> Open Airplane Mode --> Close it --> Done 
