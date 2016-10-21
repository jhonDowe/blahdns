<h1> Block Ads Malware Porn with BlahDNS </h1>
<br>
Amsterdam<br>
Ipv4: 45.32.233.91<br>
Ipv6: 2001:19f0:5001:fc:5400:00ff:fe3c:269a
<br>
Block content: EasyList, EasyPrivacy, China Ads, Gambling, Adware, Malware, Drugs, Porn sites
<br>
<h4>How to setup </h4>
<br>
<strong>Generic Router </strong><br>
recommended ~~<br>

Open the preferences for your router.<br>

Often, the preferences are set in your web browser, via a URL with numbers (example: http://192.168.0.1). You may need a password.<br>
Find the DNS server settings.<br>
Scan for the letters DNS next to a field which allows two or three sets of numbers<br>
Put in the OpenDNS server addresses, 45.32.233.91 , 8.8.8.8 as your DNS server settings and save/apply.<br>
Restart Router <br>
<br>
<strong> Mac OS X</strong><br>

Go to System Preferences.<br>
Click on Network.<br>
Select the first connection in your list and click Advanced.<br>
Select the DNS tab and add 45.32.233.91 , 8.8.8.8 to the list of DNS servers.<br>
Click OK<br>
<br>
<strong>Windows 10</strong><br>

Right-click the bottom-leftmost corner of your screen to bring up WIN+X menu.<br>
Click on Network Connections.<br>
From the Network Connections screen, locate the network connection that you want to change the DNS servers for.<br>
Tip: In Windows 8, wired connections are usually labeled as Ethernet, while wireless ones are usually labeled as Wi-Fi.<br>
Open the network connection you want to change the DNS servers for by double-clicking or double-tapping on its icon.<br>
On the connection's Status window that's now open, tap or click on the Properties button.<br>
On the connection's Properties window that appeared, scroll down in the This connection uses the following items: list and click or tap Internet Protocol Version 4 (TCP/IPv4) to select it.<br>
Tap or click the Properties button.<br>
Choose the Use the following DNS server addresses: radio button at the bottom of the Internet Protocol Version 4 (TCP/IPv4) Properties window.<br>
Enter the IP addresses 45.32.233.91 , 8.8.8.8 to the list of DNS servers.<br>
Click OK.<br>

<strong> Linux </strong><br>
In ssh edit the resolv.conf by <br>
sudo nano /etc/resolv.conf,<br>
paste it <br>

nameserver 45.32.233.91<br>
nameserver 8.8.8.8<br>

then save it<br>
Done !<br>
<br>
<hr>


<p> If you are from China and you want to climb over GFW, I recommend you to use VPN (L2TP) or Shadowsocks service is the best way to surf Google, Facebook ,etc.</p>
<p> Another simple way is replace your local computer HOSTS file <br> I recommend this some few hosts resources .<br>
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

