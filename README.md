# Ads block by DNS service

## DNS Server (Ipv4)
- IP: 172.105.230.150 (JP)
- IP: 217.61.0.97 (DE)

* Block unwanted Ads, Malware, Phisihing, tracker, scam, etc.

> 1. English common EasyPrivacy + EasyList
> 2. China (tracker, ads, phishing, xiaomi, baidu, sohu.. etc)

## Privacy Protection

> We have no interest in logging DNS queries
> I decided change the upper dns server to OPENNIC DNS with DNSSEC & DNS-over-TLS adds a layer of encryption over your DNS requests, keeping your ISP from seeing which websites you visit.
> If you encouter any problem, please open an issue.

### How can I flush my DNS 

* Windows --> CMD --> ipconfig /flushdns 
* MAC --> killall -HUP mDNSResponder 
* Linux --> sudo systemctl restart NetworkManager or sudo rcnscd restart 
* Android --> Open Airplane Mode --> Close it --> Done 



