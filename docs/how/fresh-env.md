# Steps for setting up the "Review" environment on a PC/Mac

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

> **_NOTE:_** Select JAVA_HOME variable install option.

### 3.2 Install android SDK

### 3.3 Set `ANDROID_HOME` to Android sdk path

### 3.4 Setup PATH in environment variables

```
 PATH=$PATH:$ANDROID_HOME/emulator
 PATH=$PATH:$ANDROID_HOME/platform-tools
 PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin/

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
