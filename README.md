# Ads block by DNS service

## DNS Server (Ipv4)
- IP: 128.199.74.168 (SG)
- IP: 217.61.0.97 (DE)

* Block unwanted Ads, Malware, Phisihing, tracker, scam sites .. etc
>
> 1. English common EasyPrivacy + EasyList
> 2. China (tracker, ads, phishing, xiaomi, baidu, sohu.. etc)

## Privacy Protection

> We have no interest in logging DNS queries, we work as resolver
> I decided change the upper dns server to Quad9 DNS  (2017-12-06)

### How can I flush my DNS 

* Windows --> CMD --> ipconfig /flushdns 
* MAC --> killall -HUP mDNSResponder 
* Linux --> sudo systemctl restart NetworkManager or sudo rcnscd restart 
* Android --> Open Airplane Mode --> Close it --> Done 



