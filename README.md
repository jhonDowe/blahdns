<h1> Block Ads with BlahDNS </h1>
IPv4: 45.76.100.97 <br>
IPv6: 2001:19f0:7001:d22:5400:00ff:fe35:c263
<br>
Block content: EasyList, EasyPrivacy, China List, Gambling, Adware, Malware sites

<h4>How to setup </h4>

<strong>Generic Router </strong>
Recommanded ~~

Open the preferences for your router.

Often, the preferences are set in your web browser, via a URL with numbers (example: http://192.168.0.1). You may need a password.
Find the DNS server settings.
Scan for the letters DNS next to a field which allows two or three sets of numbers
Put in the OpenDNS server addresses, 45.76.100.97 , 8.8.8.8 as your DNS server settings and save/apply.
Restart Router 

<strong> Mac OS X</strong>

Go to System Preferences.
Click on Network.
Select the first connection in your list and click Advanced.
Select the DNS tab and add 45.76.100.97 , 8.8.8.8 to the list of DNS servers.
Click OK

<strong>Windows 10</strong>

Right-click the bottom-leftmost corner of your screen to bring up WIN+X menu.
Click on Network Connections.
From the Network Connections screen, locate the network connection that you want to change the DNS servers for.
Tip: In Windows 8, wired connections are usually labeled as Ethernet, while wireless ones are usually labeled as Wi-Fi.
Open the network connection you want to change the DNS servers for by double-clicking or double-tapping on its icon.
On the connection's Status window that's now open, tap or click on the Properties button.
On the connection's Properties window that appeared, scroll down in the This connection uses the following items: list and click or tap Internet Protocol Version 4 (TCP/IPv4) to select it.
Tap or click the Properties button.
Choose the Use the following DNS server addresses: radio button at the bottom of the Internet Protocol Version 4 (TCP/IPv4) Properties window.
Enter the IP addresses 45.76.100.97 , 8.8.8.8 to the list of DNS servers.
Click OK.

<strong> Linux </strong>
In ssh edit the resolv.conf by 
sudo nano /etc/resolv.conf,
paste it 

nameserver 45.76.100.97
nameserver 8.8.8.8

then save it
Done !

<hr>


<p> If you are from China and you want to climb over GFW, I recommand you to use VPN (L2TP) or Shadowsocks service is the best way to surf Google, Facebook ,etc.</p>
<p> Another simple way is replace your local computer HOSTS file <br> I recommand this some few hosts resources .<br>
<ul>
<li><a href="https://github.com/racaljk/hosts">https://github.com/racaljk/hosts</a></li>
<li><a href="http://htcui.com/4938.html">http://htcui.com/4938.html</a></li>
</ul>
<br>
<p> The way to flush your dns after you change or edit ur Hosts file </p>
<ul>
<li> Windows --> CMD --> ipconfig /flushdns </li>
<li> MAC --> killall -HUP mDNSResponder </li>
<li> Linux --> sudo systemctl restart NetworkManager or sudo rcnscd restart </li>
<li> Android --> Open Airplane Mode --> Close it --> Done </li>
</ul>

<p>&copy; Copyright 2016 Blahdns.com </p>

