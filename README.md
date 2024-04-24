# Apate Extension
Frontend extension UI for Apate - an LLM based context aggregator to verify information and fight misinformation

## Development Build
### Build Process
1. `npm i --save-dev <package_name>` to install a new development package
2. `npm install` to install dependencies
3. `npm start` to start running the fast development mode Webpack build process that bundle files into the `dist` folder
4. `npm test` to run the test suite in the `test` folder

### Loading The Chrome Extension
1. Open Chrome and navigate to `chrome://extensions/`
2. Toggle on `Developer mode` in the top right corner
3. Click `Load unpacked`
4. Select the entire `dist` folder

## Production Build
1. `npm run build` to generate a minified production build in the `dist` folder
2. ZIP the entire `dist` folder (e.g. `dist.zip`)
3. Publish the ZIP file on the Chrome Web Store Developer Dashboard

## Credits
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- <a href="https://www.flaticon.com/free-icons/fact" title="fact icons">Fact icons created by Designing Hub - Flaticon</a>