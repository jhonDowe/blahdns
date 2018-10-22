## Hosts

* [Latest hosts](https://github.com/ookangzheng/blahdns/blob/master/hosts/gravity.list)
* [Content farm host](https://github.com/ookangzheng/blahdns/blob/master/hosts/contentfarms.host)


## Source
### All-in-one
https://github.com/Akamaru/Pi-Hole-Lists/raw/master/youtube.txt
https://hblock.molinero.xyz/hosts
http://sbc.io/hosts/alternates/fakenews/hosts
https://raw.githubusercontent.com/vokins/yhosts/master/hosts.txt
https://raw.githubusercontent.com/joeylane/hosts/master/hosts
https://hosts.nfz.moe/full/hosts
https://raw.githubusercontent.com/ookangzheng/blahdns/master/hosts/custom-list.txt
https://raw.githubusercontent.com/anudeepND/blacklist/master/adservers.txt

### Suspicious
https://raw.githubusercontent.com/matomo-org/referrer-spam-blacklist/master/spammers.txt
https://v.firebog.net/hosts/static/w3kbl.txt
-- https://ransomwaretracker.abuse.ch/blocklist/
https://ransomwaretracker.abuse.ch/downloads/RW_URLBL.txt
https://ransomwaretracker.abuse.ch/downloads/RW_DOMBL.txt
https://zerodot1.gitlab.io/CoinBlockerLists/hosts
https://raw.githubusercontent.com/r-a-y/mobile-hosts/master/AdguardMobileSpyware.txt
https://raw.githubusercontent.com/r-a-y/mobile-hosts/master/AdguardMobileAds.txt  
https://raw.githubusercontent.com/jerryn70/GoodbyeAds/master/Hosts/GoodbyeAds.txt

### Malware
https://mirror1.malwaredomains.com/files/justdomains
https://s3.amazonaws.com/lists.disconnect.me/simple_malvertising.txt
http://sysctl.org/cameleon/hosts
https://zeustracker.abuse.ch/blocklist.php?download=domainblocklist
https://s3.amazonaws.com/lists.disconnect.me/simple_tracking.txt
https://s3.amazonaws.com/lists.disconnect.me/simple_ad.txt

### Tracker
https://v.firebog.net/hosts/Easyprivacy.txt
https://raw.githubusercontent.com/quidsup/notrack/master/trackers.txt
https://raw.githubusercontent.com/crazy-max/WindowsSpyBlocker/master/data/hosts/spy.txt
https://raw.githubusercontent.com/Perflyst/PiHoleBlocklist/master/android-tracking.txt
https://raw.githubusercontent.com/Perflyst/PiHoleBlocklist/master/SmartTV.txt

### Advertising Lists
https://adaway.org/hosts.txt
https://v.firebog.net/hosts/AdguardDNS.txt
https://hosts-file.net/ad_servers.txt

### Igonre - not working
https://raw.githubusercontent.com/CHEF-KOCH/CKs-FilterList/master/HOSTS/CK's-Spotify-HOSTS-FilterList.txt

----

## Whitelist 

```
// Tinder app sms verification
etl.tindersparks.com

// Xiaomi payment 
metok.sys.miui.com
data.mistat.xiaomi.com
api.jr.mi.com
resolver.msg.xiaomi.ne

cdn.ravenjs.com
cdn.jsdelivr.net
csdnimg.cn

# Amazon Web Services (Kowabit)
s3.amazonaws.com

# Google Content (Andy Short)
clients2.google.com
clients3.google.com
clients4.google.com
clients5.google.com

# Link Shortners (Openphish, Hostsfile.org)
ppt.cc
www.bit.ly
bit.ly
ow.ly
j.mp
goo.gl
tinyurl.com

# Microsoft Connectivity Checker (Mahakala)
msftncsi.com
www.msftncsi.com

# EA / Origin (Mahakala, Andy Short, Cameleon & others)
ea.com
cdn.optimizely.com (Used by Origin for content delivery)

Blocked by Mahakala
res.cloudinary.com (Used by Facebook for image uploads)
gravatar.com
rover.ebay.com
imgs.xkcd.com

# Blocked by Andy Short
netflix.com
alluremedia.com.au (Used by Gizmodo sites)
tomshardware.com

# Blocked by Reddestdream
ocsp.apple.com (Used by Apple devices for certificate validation)

# Blocked by various lists
s.shopify.com
keystone.mwbsys.com (Malwarebytes server)
dl.dropbox.com
api.ipify.org

bbs.pcbeta.com
cdn.pcbeta.attachment.inimc.com
cdn.pcbeta.css.inimc.com
cdn.pcbeta.static.inimc.com
group.pcbeta.com
i.pcbeta.com
m.pcbeta.com
mac.pcbeta.com
pcbeta.com
static.template.pcbeta.com
uc.pcbeta.com
web.pcbeta.com
www.pcbeta.com
```

---

## Blacklist

```
// APP tracker
api.branch.io
api.segment.io
cdn.segment.com
onesignal.com
api.mixpanel.com
go.ero-advertising.com
www.eroadvertising.com

// Panda.tv
aplay.wan.panda.tv
caesar.wan.panda.tv
play.wan.panda.tv
wan.panda.tv

//斗鱼
g.wan.douyu.com
cdn.g.wan.douyu.com

//ggsafe.com
wifi.ggsafe.com

// 游族的公司投放页游广告
v3m.youzu.com
```

