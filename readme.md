RUN IN DEVELOPING ENVIRONMENT
1. Install sails framework: open Command Prompt (cmd.exe) and run follow command:
$>npm install sails -g

2. Checkout source from github.com: go to folder that you want to place code. Ex: D:\SLTCorp and run follow command in git bash:
$>git checkout git@github.com:sltcorpvn/SLTCore.git SLTCore

3. Change port and host in file config/local.js as your local. In default, port is 88 and host is core.sltcorp.lc. Then the url will be:
http://core.sltcorp.lc:88

4. Open file C:\Windows\System32\drivers\etc\hosts and input below line: 127.0.0.1 core.sltcorp.lc
If you change host to localhost, please bypass this step!

5. Run command below in Command Prompt to install all dependencies of project:
D:\SLTCorp>npm install

6. Run the project:
$>sails lift
or
$>node index.js

7. Check whether the website run or not with the url is configured in config/local.js file

