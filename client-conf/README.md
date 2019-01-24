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

## Dnscrypt-proxy
```bash
server_names = ['blahdns-jp-dnscrypt-v4','blahdns-de-dnscrypt-v4','blahdns-jp-doh','blahdns-de-doh']
listen_addresses = ['127.0.0.1:53', '[::1]:53']
max_clients = 250
force_tcp = false
timeout = 2000
keepalive = 30

## Load-balancing strategy: 'p2' (default), 'ph', 'fastest' or 'random'
lb_strategy = 'fastest'
fallback_resolver = '9.9.9.9:53'
ignore_system_dns = false
netprobe_timeout = 30
cache = false
cache_size = 512
cache_min_ttl = 90
cache_max_ttl = 1800
cache_neg_min_ttl = 2
cache_neg_max_ttl = 6

[static]

[static.'blahdns-jp-doh']
stamp = 'sdns://AgMAAAAAAAAADjEwOC42MS4yMDEuMTE5ABJkb2gtanAuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ'

[static.'blahdns-jp-dnscrypt-v4']
stamp = 'sdns://AQMAAAAAAAAAEzEwOC42MS4yMDEuMTE5Ojg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t'

[static.'blahdns-jp-dnscrypt-v6']
stamp = 'sdns://AQMAAAAAAAAALlsyMDAxOjE5ZjA6NzAwMToxZGVkOjU0MDA6MDFmZjpmZTkwOjk0NWJdOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t'

[static.'blahdns-de-doh']
stamp = 'sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ'

[static.'blahdns-de-dnscrypt-v4']
stamp = 'sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t'

[static.'blahdns-de-dnscrypt-v6']
stamp = 'sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t'
```

## Unbound 1.7.1 Above
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
```bash
resolution_type: GETDNS_RESOLUTION_STUB
dns_transport_list:
  - GETDNS_TRANSPORT_TLS
tls_authentication: GETDNS_AUTHENTICATION_REQUIRED
tls_query_padding_blocksize: 128
edns_client_subnet_private : 1
round_robin_upstreams: 1
idle_timeout: 10000
listen_addresses:
  - 127.0.0.1
  - 0::1

upstream_recursive_servers:

####### IPv4 addresses ######
  - address_data: 108.61.201.119
    tls_port: 443
    tls_auth_name: "dot-jp.blahdns.com"

  - address_data: 108.61.201.119
    tls_port: 853
    tls_auth_name: "dot-jp.blahdns.com"

  - address_data: 159.69.198.101
    tls_port: 443
    tls_auth_name: "dot-de.blahdns.com"
    
  - address_data: 159.69.198.101
    tls_port: 853
    tls_auth_name: "dot-de.blahdns.com"
####### IPv6 addresses ######
  - address_data: 2001:19f0:7001:1ded:5400:01ff:fe90:945b
    tls_port: 443
    tls_auth_name: "dot-jp.blahdns.com"
    
  - address_data: 2001:19f0:7001:1ded:5400:01ff:fe90:945b
    tls_port: 853
    tls_auth_name: "dot-jp.blahdns.com"

  - address_data: 2a01:4f8:1c1c:6b4b::1
    tls_port: 443
    tls_auth_name: "dot-de.blahdns.com"
    
  - address_data: 2a01:4f8:1c1c:6b4b::1
    tls_port: 853
    tls_auth_name: "dot-de.blahdns.com"
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

## Windows
Simplednscrypt -> https://simplednscrypt.org/ and install

![](https://github.com/ookangzheng/blahdns/blob/master/client-conf/blahdns-1.png?raw=true)
![](https://github.com/ookangzheng/blahdns/blob/master/client-conf/blahdns-2.png?raw=true)
