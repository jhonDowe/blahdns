## personalDNSfilter config -- get this [Android app](https://zenz-solutions.de/personaldnsfilter/)

```bash
108.61.201.119::853::DoT
[2001:19f0:7001:1ded:5400:01ff:fe90:945b]::853::DoT
108.61.201.119::443::DoH::https://doh-jp.blahdns.com
[2001:19f0:7001:1ded:5400:01ff:fe90:945b]::443::DoH::https://doh-jp.blahdns.com/dns-query

```


## Dnscrypt-proxy

Go [HERE](https://github.com/ookangzheng/blahdns/tree/master/client-conf/dnscrypt)

## Unbound
```bash
sudo apt install unbound

# /etc/unbound/unbound.conf
server:
        verbosity: 1
        interface: 0.0.0.0
        do-not-query-localhost: no
        access-control: 192.168.0.0/16 allow
forward-zone:
        name: "."
        forward-addr: 108.61.201.119@853
        forward-addr: 159.69.198.101@853
        forward-ssl-upstream: yes
```

## Stubby

Go [HERE](https://github.com/ookangzheng/blahdns/tree/master/client-conf/stubby)


## Windows
Simplednscrypt -> https://simplednscrypt.org/ and install

![](https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/blahdns-1.png?raw=true)
![](https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/blahdns-2.png?raw=true)

## Kdig
```bash
kdig google.com @dot-jp.blahdns.com +tls
```
## getdns
```bash
sudo apt install getdns-utils
getdns_query @108.61.201.119 -s -L -A www.google.com
```

## Curl
```bash
curl -H 'accept: application/dns-json' 'https://doh-jp.blahdns.com/dns-query?name=www.google.com&type=A'
```

## Facebook python doh-proxy
```bash
sudo apt install python3-pip python3-setuptools python3-wheel
sudo -H pip3 install doh-proxy
doh-client --domain doh-jp.blahdns.com --qname google.com --qtype A
```

## Linux-systemd
```bash
nano /etc/systemd/resolved.conf

DNS=108.61.201.119 159.69.198.101
DNSOverTLS=opportunistic

// Save and restart service
sudo systemctl restart systemd-resolved
// Check settings
resolvectl status
resolvectl query dot-jp.blahdns.com -t A
```


