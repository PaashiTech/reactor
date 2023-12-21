# Set up a React Native Environment

## Prerequisites

A working [android](/docs/how/platforms/android.md) or iOS environment.  

## 1. Create a React Native application

    Follow all the steps to complete the [React Native Environment Setup Guide](https://reactnative.dev/docs/next/environment-setup). and make sure you can create and run React Native apps on virtual testing devices.

    You should be able to create and run a new RN app, like so.

    ```bash
    # Create an RN CLI app
    pnpm dlx react-native@latest init mobile --template react-native-template-typescript
    # Cd to the folder and build app
    cd mobile && pnpm android
    ```

## 2. Configure Metro for Workspaces

    By default, Metro [only looks at the local node modules](https://metrobundler.dev/docs/configuration#nodemodulespaths). We need to make it aware of our monorepo setup. Add the following to metro.config.js.

    ```js
    // Find the workspace root
        const workspaceRoot = path.resolve(__dirname, "../..");

        // 1. Watch all files within the monorepo
        config.watchFolders = [workspaceRoot];
        // 2. Let Metro know where to resolve packages, and in what order
        const config = {
            resolver : {
                nodeModulesPath: [
                    path.resolve(projectRoot, "node_modules"),
                    path.resolve(workspaceRoot, "node_modules"),
                ]
            }
        };

        module.exports = mergeConfig(getDefaultConfig(__dirname), config);
    ```
## 3. Setup component testing with [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)

    * Install React NAtive Testing Library (RNTL).

    ```bash
    pnpm add -D @testing-library/react-native
    ```

    * Follow the setup instructions for [RNTL](https://callstack.github.io/react-native-testing-library/docs/getting-started#installation).

    * Write a simple test.

    ```js
    import { render, screen } from '@testing-library/react-native';
    import {App} from './App';

    test.describe('Visuals', () => {
        render(<App />);
        test('Heading reads "Login"', () => {
            await expect(screen.getByRole('heading', { name: 'Reactor' })).toBeVisible();
        });
    });
    ```
    * Pass the test

    Replace the contents in App.tsx with:

    ```js
    
    ``` 

## 4. Setup e2e testing with [Detox](https://wix.github.io/Detox/)

    * Complete the setup steps for the [Detox environment](https://wix.github.io/Detox/docs/introduction/environment-setup#react-native-cli-quickstart).

    * Add the [dev requirements](https://wix.github.io/Detox/docs/introduction/environment-setup#detox-prerequisites) for Detox.

    * [Setup the project](https://wix.github.io/Detox/docs/introduction/project-setup) to ingest Detox tests.

    * Test the setup...

    ```bash
    detox build --configuration android.emu.debug
    ```

    ...and make adjustments. For example, allProjects{} should be setup in [settings.gradle](/apps/android/android/settings.gradle) instead of top level [build.grade](/apps/android/android/build.gradle)

    * Write and pass a test

    Let's write a simple test that follows our [e2e test systax](/docs/what/e2e.md) .

    Inititiliaze Detox (if not done):

    ```bash
    detox init
    ```

    ```js
    
    ```
