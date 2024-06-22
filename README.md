# Apate Extension
Frontend extension UI for Apate - an LLM based context aggregator to verify information and fight misinformation

## Build Configurations
To apply the TypeScript compilation configurations specified in the `tsconfig.json` file, follow these steps:
1. Set VS Code to use the [Workspace version of TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript).
2. Install the [typescript-plugin-css-modules](https://www.npmjs.com/package/typescript-plugin-css-modules) plugin as a development dependency by running `npm i --save-dev typescript-plugin-css-modules`.
3. Add a TypeScript declaration in `src/typings.d.ts`: `declare module '*.module.css';`.
4. Include the plugin in the `tsconfig.json` file under the `compilerOptions.plugins` section:
```json
"plugins": [
    {
        "name": "typescript-plugin-css-modules"
    }
]
```

## Development Build
### Build Process
To build the project for development, follow these steps:
1. Install a new development package by running `npm i --save-dev <package_name>`.
2. Resolve security vulnerability issues in dependencies by running `npm audit fix`.
3. Install project dependencies by running `npm install`.
4. Start the fast development mode Webpack build process that bundles files into the `dist` folder by running `npm start`.
5. Run the test suite in the `test` folder by running `npm test`.

### Loading The Chrome Extension
To load the Chrome extension, follow these steps:
1. Open Chrome and navigate to `chrome://extensions/`.
2. Toggle on `Developer mode` in the top right corner.
3. Click `Load unpacked`.
4. Select the entire `dist` folder.

## Production Build
To generate a minified production build in the `dist` folder, follow these steps:
1. Run `npm run build`.
2. ZIP the entire `dist` folder (e.g. `dist.zip`).
3. Publish the ZIP file on the Chrome Web Store Developer Dashboard.

## Credits
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Fact icons created by Designing Hub - Flaticon.