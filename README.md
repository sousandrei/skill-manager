Simple Skill Manager

## Usage

### Configuration

Fill the .env file with server url

### Installing dependencies
```javascript
npm i 
```

### Running
```javascript
npm run dev
```
### Building
```javascript
npm run build:dev
// OR
npm run build:prod
// files will be in the public/dist folder, to deploy use entire /public folder
```

### Generating API documentation
```javascript
npm i -g aglio
aglio --theme-variables cyborg -i input.apib -o apidoc/api.html
```

### Observations
Some things were left out due to uncertainty of specs
* No private/public path were specified, so none done
* No error treatment implemented
* No specific resolution to mobile/tablet so assumed them as one
* Loading page empty
