# Set up Adnroid environment for React Native

1. Get open-jdk

    ```bash
    openjdk-17-jdk
    ```

2. Get [Android command line tools](https://developer.android.com/tools#tools-sdk), [sdkmanager](https://developer.android.com/tools/sdkmanager)

    For example...

    ```bash
    wget https://dl.google.com/android/repository/commandlinetools-linux-10406996_latest.zip
    mkdir android
    tar -xvf commandlinetools-linux-10406996_latest.zip ./android
    # cleanup
    rm commandlinetools-linux-10406996_latest.zip
    ```

    ...and accept licences...

    ```bash
    ./sdkmanager --licenses
    ```

3. Install packages

    ```bash
    ./sdkmanager "build-tools;33.0.0" "platforms;android-33" "system-images;android-33;default;x86_64" "platform-tools"
    ```

4. Configure environment variables

    Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file: 

    ```bash
    export ANDROID_HOME=$HOME/android/
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin/
    ```

5. Get [Watchman](https://facebook.github.io/watchman/docs/install#ubuntu-prebuilt-debs)

    For example...

    ```bash
    cd ~
    wget https://github.com/facebook/watchman/releases/download/v2023.11.27.00/watchman-v2023.11.27.00-linux.zip
    mkdir watchman
    unzip watchman-v2023.11.27.00-linux.zip -d ./watchman
    ```

6. Install and test emulator

    Create a new avd.

    ```bash
    avdmanager create avd -n Pixel_3a_API_30_x86 -k "system-images;android-33;default;x86_64" -d "pixel_3a
    ```

    Test it...

    ```bash
    emulator -avd Pixel_3a_API_30_x86
    ```

7. If you see kvm error, follow the messages on screen. e.g.:

    ```bash
    sudo adduser $USER kvm
    sudo groupadd -r kvm
    sudo gpasswd -a $USER kvm
    # restart to make it work
    logout
    ```

8. Configure Metro for Workspaces.

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

9. Setup e2e testing with [Detox](https://wix.github.io/Detox/)

    * Complete the setup steps for the [Detox environment](https://wix.github.io/Detox/docs/introduction/environment-setup#react-native-cli-quickstart).

    * Add the [dev requirements](https://wix.github.io/Detox/docs/introduction/environment-setup#detox-prerequisites) for Detox.

    * [Setup the project](https://wix.github.io/Detox/docs/introduction/project-setup) to ingest Detox tests.

    * Test the setup...

    ```bash
    detox build --configuration android.emu.debug
    ```

    and make adjustments. For example, allProjects{} should be setup in [settings.gradle](/apps/android/android/settings.gradle) instead of top level [build.grade](/apps/android/android/build.gradle)
