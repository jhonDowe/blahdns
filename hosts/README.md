## Hosts

* [Latest hosts](https://github.com/ookangzheng/blahdns/blob/master/hosts/gravity.list)
* [Content farm host](https://github.com/ookangzheng/blahdns/blob/master/hosts/contentfarms.host)


## Source
### All-in-one
https://raw.githubusercontent.com/EnergizedProtection/block/master/blu/formats/hosts (blu)
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
#https://ransomwaretracker.abuse.ch/blocklist/
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
#https://raw.githubusercontent.com/CHEF-KOCH/CKs-FilterList/master/HOSTS/CK's-Spotify-HOSTS-FilterList.txt

----

## Whitelist 

```
// 
app.adjust.com 
ipfs.io
behance.net

// Spotify
beta.spotify.map.fastly.net
geo3.ggpht.com
googlehosted.l.googleusercontent.com
redirector.gvt1.com
audio-fa.scdn.co # do not block while using chromecast
spclient.wg.spotify.com (break windows client)
ap.spotify.com
api-spotify.com
api-partner.spotify.com
api-tv.spotify.com
apresolve.spotify.com
audio-sp.spotify.com
dealer.spotify.com
dealer-ssl.spotify.com
gslb.spotify.com
open.scdn.co
open.spotify.com
play.spotify.com
spclient.spotify.com
sto3.spotify.com
wg.spotify.com

// check internet online status
dns.msftncsi.com -- Microsoft check wifi online

// CDN
cdn.mxpnl.com
cdn3.optimizely.com
unpkg.com
cdn.jsdelivr.net
cdnjs.cloudflare.com
ipinfo.io
cdn.ravenjs.com
links.iterable.com
cdn.flurry.com
cdn.ravenjs.com
fast.wistia.com
cdn.ravenjs.com
csdnimg.cn
js-agent.newrelic.com

// Baidu
www.baidu.com
www.a.shifen.com
www.wshifen.com

// Google
yt3.ggpht.com
youtubei.googleapis.com
ytimg-edge-static.l.google.com
s.youtube.com
android.l.google.com
android.clients.google.com
googleapis.l.google.com
play.googleapis.com
www.gstatic.com
csi.gstatic.com
dl.google.com
www3.l.google.com
clients1.google.com ~ clients6.google.com
encrypted-tbn0.gstatic.com
ssl.gstatic.com
fonts.gstatic.com
i.ytimg.com
ytimg-edge-static.l.google.com
photos-ugc.l.googleusercontent.com
accounts.google.com
www.googleapis.com
redirector.googlevideo.com

// Facebook
b-api.facebook.com -- facebook lite / messenger lite login required
b-graph.facebook.com -- facebook lite / messenger lite login required
rupload.facebook.com -- tested on mobile messenger while sending voice clip
api.facebook.com -- needed while viewing previous voice clip on mobile messenger
# graph.facebook.com -- not sure yet
scontent-ort2-2.xx.fbcdn.net
scontent-nrt1-1.xx.fbcdn.net
fb.me
fb.com
fbcdn-profile-a.akamaihd.net
#connect.facebook.net.edgekey.net
#connect.facebook.net
static.ak.connect.facebook.com
s-static.ak.facebook.com
apps.facebook.com
ct-m-fbx.fbsbx.com
z-m.facebook.com
z-m.c10r.facebook.com
l.facebook.com -- desktop -> link shim #https://www.quora.com/Why-are-l-facebook-com-and-lm-facebook-com-appearing-as-a-new-traffic-source-on-analytics
lm.facebook.com -- mobile -> link shim
m.facebookcom
instagram.c10r.facebook.com
static.xx.fbcdn.net
cdn.fbsbx.com
edge-chat.facebook.com
0-edge-chat.facebook.com
1-edge-chat.facebook.com
2-edge-chat.facebook.com
3-edge-chat.facebook.com
4-edge-chat.facebook.com
5-edge-chat.facebook.com
6-edge-chat.facebook.com
external.xx.fbcdn.net
scontent.xx.fbcdn.net 
edge-mqtt.facebook.com -- get online connection
star.c10r.facebook.com
mqtt.c10r.facebook.com
mqtt-mini.facebook.com
lookaside.facebook.com

// Tinder app sms verification
etl.tindersparks.com

// Xiaomi payment 
metok.sys.miui.com
data.mistat.xiaomi.com
api.jr.mi.com
resolver.msg.xiaomi.ne

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
zer0day.ch -- Malicious -- redirected

discuz.gtimg.cn
hao.360.cn
ip.ia22.com
l.ad4.com.cn
log.sina.cn
log.tbs.qq.com
main.exoclick.com
mathtype.cn
sa.tuisong.baidu.com
sa1.tuisong.baidu.com

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
