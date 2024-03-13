#! /usr/bin/bash
cd /var/www/app/ 
git pull origin main --ff-only
git pull origin master --ff-only
npm i

# this says to change to the /var/www/app/ directory 
# this tells the computer to run from this directory our current script
# current script is in cd /var/www/app/


