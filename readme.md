RUN IN DEVELOPING ENVIRONMENT
1. Install sails framework: open Command Prompt (cmd.exe) and run follow command:
$>npm install sails -g

2. Checkout source from github.com: go to folder that you want to place code. Ex: D:\SLTCorp and run follow command in git bash:
$>git checkout git@github.com:sltcorpvn/SLTCore.git SLTCore

3. Change config in file config/local.js with your local or change in file index.js the below line:
var ENV       = process.env.MODE_ENV || 'local';  => var ENV       = process.env.MODE_ENV || 'development';

4. Run command below in Command Prompt to install all dependencies of project:
D:\SLTCorp>npm install

5. After that, run command below to start the website:
D:\SLTCorp>node index.js

6. Check whether the website run or not with the url is configured in config/local.js file

7. Run sails project:
$>sails lift

NOTE
i18n
app.get('/onarray/:lang', function(req, res) {
  i18n.setLocale([req, funkyObject], req.params.lang);
  render(req, res);
});