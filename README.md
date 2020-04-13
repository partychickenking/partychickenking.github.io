# Luvely
Luvely is a dating app where users can create an account, filter through matches and see which people looked at their profile or liked their profile.
![Luvely](https://github.com/annaboomsma/datingAppFeature/blob/master/documentatie/images/luvely.png)

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### technical requirements
To run this project you'll need [Nodejs](https://nodejs.org/en/download/), [Git](https://git-scm.com/downloads), [Any code editor](https://code.visualstudio.com/download) and [MongoDB](https://www.mongodb.com/cloud/atlas/register)

### Installing
First you'll need to clone the repository. You can choose a destination by running cd and you can clone this repository by running the command clone
```
cd [ENTER YOUR PATH HERE]
git clone https://github.com/tsjuusmei/datingAppFeature.git
```
You'll need to install the modules. You can do this by running the following line
```cmd
npm install
```
After you've set-up the database you can turn the server on by running either
```cmd
node server.js
npm run dev
```

### Setting up the database
To setup the database you'll need to create a new cluster. After you've created a cluser, you can connect with it by clicking connect. Note that you'll have to whitelist your ip. You can do this by going to the `network acces` tab and choose `Add IP adress`.

![newCluster](https://github.com/partychickenking/partychickenking.github.io/blob/master/image/connectCluster.jpg)

Clicking on connect will give you 3 options. Choose for option 2: _Connect your application_. Copy the string and paste it in your code. It will probably look something like this: **mongodb+srv://[username]:[password]@moa-lfz7p.mongodb.net/test?retryWrites=true&w=majority**

### Test if it works
To test if the application works you can run the following command. If the applicaton works it will say `Example app listening on port3000`
```cmd
npm run dev
```
To test if you've correctly connected to the database you can go to the [register](http://localhost:3000/register) page by typing http://localhost:3000/register in your browser. Once on this page, you can fill in the form and send it. If it shows in the database, you've correctly connected. You can use [Compass](https://www.mongodb.com/download-center/compass) for easy visual acces to your database.

## Database 
This is the structure of the mongodb atlas database:

![Database](https://github.com/annaboomsma/datingAppFeature/blob/master/documentatie/images/Database.png)
