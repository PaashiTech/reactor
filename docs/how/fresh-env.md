# Steps for setting up the Dev/Review environment on a PC/Mac

## 1. Install Node

Either with an [installer](https://nodejs.org/en/download) or with a terminal.

Install the latest stable subversion in the `v18`. Tested with `18.16.0` on multiple devices.

## 2. Install pnpm

Run in a PowerShell terminal

```
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

Since v16.13, Node.js is shipping [Corepack](https://nodejs.org/api/corepack.html) for managing package managers. This is an experimental feature, so you need to enable it by running

```
corepack enable pnpm
```

## 3. Install Android environment

### 3.1 Install Microsoft binarie of OpenJDK-17

Install from [here](https://learn.microsoft.com/en-us/java/openjdk/download#openjdk-17)
or [here](https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.exe)

> [!NOTE]
> Select "Set `JAVA_HOME` variable" option in the install process (unchecked by default).

### 3.2 Install Android SDK / Android Studio

[Android Studio](https://developer.android.com/studio) is the main toolsuit required for developing Android apps. It also includes [Android SDK](https://developer.android.com/tools) that is required to build React Native apps and run them on emulator. 

### 3.3 Set `ANDROID_HOME` to Android sdk path

Follow [these instructions](https://www.howtogeek.com/787217/how-to-edit-environment-variables-on-windows-10-or-11/) to set `ANDROID_HOME` system variable in that points to the location where the Android SDK got installed in the previous step. 

The path which your SDK was installed at can be seen at -

Android studio > SDK manager > Android SDK location

> [!IMPORTANT]
> Always be careful when updating system environment variables. Incorrect configurations can make your system irrecoverable ways.

### 3.4 Setup PATH in environment variables

Add following fields/paths to your system `Path` variable. See [these instructions](https://techpp.com/2021/08/26/set-path-variable-in-windows-guide/#:~:text=If%20you%E2%80%99re%20on%20Windows%2010%2C%20hit%20the%20New%20button%20and%20paste%20the%20copied%20path%20on%20the%20new%20line.%20Alternatively%2C%20hit%20the%20Edit%20text%2C%20add%20a%20semi%2Dcolon%20to%20the%20end%20of%20the%20field%20for%20Variable%20value%2C%20and%20paste%20the%20program%E2%80%99s%20path.) to do it. 

`<Absolute path to your Android SDK>` is the same path that you set to `ANDROID_HOME` in the previous step. 

##### Install following packages from the Android SDK manager
- Android SDK command-line tools (latest)
- Google USB driver
- Android emulator
- Android platform tools
- Android 14.0 ("UpsideDownCake") - API 34
- Android 13.0 ("Tiramisu") - API 33

> [!CAUTION]
> ALWAYS make **additive** changes to the system `Path` variable, unless you are absolutely sure about what you are doing. 

```
 <Absolute path to your Android SDK>/emulator
 <Absolute path to your Android SDK>/platform-tools
 <Absolute path to your Android SDK>/cmdline-tools/latest/bin/

```

## 3. Setup GitHub

### 3.1 Create a GitHub account

Create an account on [GitHub](https://github.com) with Unmaze credentials.

> Make sure you are added as a "collaborator" in any of the code repositories that you want to contribute in from your machine (i.e. change the source code). For locally running and previewing the app on your end, you should not need it.

### 3.2 Setup GitHub on your system

Install [GitHub Desktop](https://desktop.github.com/) and login with your Unmaze credentials. This will install `git` (core) as well as a GUI.

## 4. Clone the repository

Using GitHub Desktop app (or using a terminal) clone the [source code repository](https://github.com/PaashiTech/reactor).

## 5. Setup EAS

### 5.1 Create an EAS account

Create an account on [EAS](https://expo.dev/eas) with Unmaze credentials.

### 5.2 Setup EAS on your machine

Globally install `eas-cli` package.

```
pnpm install -g eas-cli
```

`cd` into the local source code repository directory and run at the root level

```
eas login
```

Login with credentials of the EAS account which you just created.

### 5.3 Ask the owner of the "unmaze" organization on EAS (currently - Amogh) to include you in the project

Once the owner includes you in the organization, go to [the homepage of the organization](https://expo.dev/accounts/unmaze) to see if you can see anything related to deployed builds. If yes, you've been succeessfully included in the organization.

## 6. Install packages

On the root level in the repository, run

```
pnpm install
```

## 7. Test if the project builds

On the root level of the repository, run

```
npx expo start
```

Metro bundler should start locally. This will be used to serve the app on [Expo Go](https://expo.dev/expo-go) app or our own latest copy of development build of the app (on your organization dashboard).
