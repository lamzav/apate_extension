# Apate Extension
Frontend extension UI for Apate - an LLM based context aggregator to verify information and fight misinformation

## Build Configurations
- In order to apply the TypeScript compilation configurations specified in the `tsconfig.json` file, you must set VS Code to use the ([Workspace version of TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript))
- This project includes CSS module functionality, provided by the [typescript-plugin-css-modules plugin](https://www.npmjs.com/package/typescript-plugin-css-modules):
    - Install the plugin as a development dependency: `npm i --save-dev typescript-plugin-css-modules`
    - Add a TypeScript declaration in src/typings.d.ts: `declare module '*.module.css';`
    - Include the plugin in the `tsconfig.json` file under the `compilerOptions.plugins` section:
    
    ```json
    "plugins": [
        {
            "name": "typescript-plugin-css-modules"
        }
    ]
    ```

## Development Build
### Build Process
1. `npm i --save-dev <package_name>` to install a new development package
2. `npm audit fix` to resolve security vulnerability issues in dependencies
3. `npm install` to install dependencies
4. `npm start` to start running the fast development mode Webpack build process that bundle files into the `dist` folder
5. `npm test` to run the test suite in the `test` folder

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