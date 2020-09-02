## Testing with Android Emulator

Telnet to emulator (port may vary)
```
$> telnet 5554
```
You may need to auth after telnet. A message will appear with
instructions on how to do that. On mac, you can do

```
$> cat ~/.emulator_console_auth_token | pbcopy
telnet> auth [C-V]
```

Finally add redirect rule
```
redir add udp:3000:4000
```

This will redirect all udp traffic received on port 4000 of the dev
machine to port 3000 of the emulator.


For more info, see: (Set up Android Emulator Networking)[https://developer.android.com/studio/run/emulator-networking]




