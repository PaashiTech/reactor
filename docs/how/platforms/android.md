# Set up Adnroid environment for React Native

## 0. Prerequisites

* A working Linux environment
* If you are on Windows, follow the [WSL guide](./wsl.md) to install WSL and setup USB debugging. 

## 1. Get open-jdk

```bash
sudo apt install openjdk-17-jdk
```

## 2. Get [Android command line tools](https://developer.android.com/tools#tools-sdk), [sdkmanager](https://developer.android.com/tools/sdkmanager)

For example...

```bash
cd ~
wget https://dl.google.com/android/repository/commandlinetools-linux-10406996_latest.zip
mkdir ~/android
unzip commandlinetools-linux-10406996_latest.zip -d ~/android
# cleanup & move to latest folder
rm commandlinetools-linux-10406996_latest.zip
mkdir ~/android/cmdline-tools/latest && cd ~/android/cmdline-tools
mv NOTICE.txt  bin  lib  source.properties ./latest
```


## 3. Configure environment variables

Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file: 

```bash
export ANDROID_HOME=$HOME/android/
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin/
```
...and accept licences...

```bash
source ~/.bashrc
sdkmanager --licenses
```

## 4. Install packages

```bash
sdkmanager "build-tools;33.0.0" "platforms;android-33" "system-images;android-33;default;x86_64" "platform-tools"
```


## 5. Get [Watchman](https://facebook.github.io/watchman/docs/install#ubuntu-prebuilt-debs)

For example...

```bash
cd ~
wget https://github.com/facebook/watchman/releases/download/v2024.01.15.00/watchman-v2024.01.15.00-linux.zip
mkdir watchman
unzip watchman-*.zip -d ./watchman
#cleanup
rm watchman-v2024.01.15.00-linux.zip
```

## 6. Install and test emulator (Optional)

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
## 8. Connect usb device to WSL

1. Get [usbipd](https://github.com/dorssel/usbipd-win)

```bash
winget install usbipd
```
2. Attach your device to Linux / WSL

Each user that wants to use ADB needs to be in the plugdev group. If you see an error message that says you're not in the plugdev group, add yourself to it using the following command:

```bash
sudo usermod -aG plugdev $LOGNAME
```

The system needs to have udev rules installed that cover the device. Get it from android-sdk-platform-tools-common pack:

```bash 
sudo apt-get install android-sdk-platform-tools-common
```

a. See the list of devices

```bash
usbipd list
```

b. Bind your device using the bus id of the device. E.g. if your device is on busid 1-9:

```bash
usbipd bind --busid 1-9
usbipd attach --busid 1-9 -w
```