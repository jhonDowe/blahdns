#if lsof -Pi :50 -sUDP:LISTEN -t >/dev/null ; then
#    echo "running"
#else
#    echo "not running"
#fi

#netstat -ln | grep ":50 " 2>&1 > /dev/null
#if [ $? -eq 1 ]; then
#     echo Starting Meteor;
#fi

#!/bin/bash

# Check if gedit is running
# -x flag only match processes whose name (or command line if -f is
# specified) exactly match the pattern.

if pgrep -x "kresd" > /dev/null
then
    echo "kresd is Running"
else
    /root/kresd.sh
    echo "kresd is Stopped"
fi
