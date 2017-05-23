# node-server
This is a node server written with express.  

## Installation
Clone the repo:  
`$ git clone https://github.com/jgierlach/node-server`  
Enter directory and install dependencies:  
```
$ cd node-server
$ npm install
```

## Developing
Once dependencies are installed, start the dev environment:  
`$ npm run start`

## Building for Production
Run the export script:  
`$ npm run export`

## Deploying
Commit changes to dist and push to Heroku remote:  
```
$ git add dist
$ git commit -m 'A description of my changes'
$ git push origin master
$ git push heroku master
```
