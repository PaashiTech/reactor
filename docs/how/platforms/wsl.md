# WSL emulation

## Install WSL on Windows

* Follow the . On newer Windows versions, you should be able to install and run WSL from the command line.

```cmd
wsl --install -d Ubuntu #install
wsl # Start the default distro  
```

Refer to the detailed [Microsoft documentation](https://learn.microsoft.com/en-us/windows/wsl/install) for installation issues.

* WSL allows working across the [file system](https://learn.microsoft.com/en-us/windows/wsl/install) and [networking](https://learn.microsoft.com/en-us/windows/wsl/networking) between Windows and Linux. Refer to the [Microsoft WSL documentation](https://learn.microsoft.com/en-us/windows/wsl/) for a better understanding of how WSL works.

## Enable Android USB debugging.

* To connect a usb device to WSL, you need [usbipd](). Install it.

```cmd
# Command prompt
winget install usbipd
```

* Connect your Android phone via usb and choose to connect in "USB tethering" mode. You should now be able to see connected devices - in a powershell prompt,

```pwsh
usbipd list
```

Connect the phone to WSL. If you chose the "File transfer" mode instead of "USB tethering" mode, you need to run the below in an elevated (run as admin) powershell prompt.

```pwsh
usbipd bind -b 1-1
usbipd attach --busid 1-1 -w
```

You can find out more about USB connections [here](https://learn.microsoft.com/en-us/windows/wsl/connect-usb).
