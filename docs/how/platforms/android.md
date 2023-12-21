# Set up Adnroid environment for React Native

## 1. Get open-jdk

    ```bash
    openjdk-17-jdk
    ```

## 2. Get [Android command line tools](https://developer.android.com/tools#tools-sdk), [sdkmanager](https://developer.android.com/tools/sdkmanager)

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

## 3. Install packages

    ```bash
    ./sdkmanager "build-tools;33.0.0" "platforms;android-33" "system-images;android-33;default;x86_64" "platform-tools"
    ```

## 4. Configure environment variables

    Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file: 

    ```bash
    export ANDROID_HOME=$HOME/android/
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin/
    ```

## 5. Get [Watchman](https://facebook.github.io/watchman/docs/install#ubuntu-prebuilt-debs)

    For example...

    ```bash
    cd ~
    wget https://github.com/facebook/watchman/releases/download/v2023.11.27.00/watchman-v2023.11.27.00-linux.zip
    mkdir watchman
    unzip watchman-v2023.11.27.00-linux.zip -d ./watchman
    ```

## 6. Install and test emulator

    Create a new avd.

    ```bash
    avdmanager create avd -n Pixel_3a_API_30_x86 -k "system-images;android-33;default;x86_64" -d "pixel_3a
    ```

    Test it...

    ```bash
    emulator -avd Pixel_3a_API_30_x86
    ```

## 7. If you see kvm error, follow the messages on screen. e.g.:

    ```bash
    sudo adduser $USER kvm
    sudo groupadd -r kvm
    sudo gpasswd -a $USER kvm
    # restart to make it work
    logout
    ```

