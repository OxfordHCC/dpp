
# Note about Android Emulator

If DPP is ran inside an emulator, the network interface exposed
to the operating system will be isolated. We need to forward UDP
packets from host to guest:

1. Telnet to emulator (port may vary)

#+BEGIN_SRC sh
$> telnet 5554
#+END_SRC

2. You may need to auth after telnet. A message will appear with
instructions on how to do that. On mac, you can do

#+BEGIN_SRC sh
$> cat ~/.emulator_console_auth_token | pbcopy
telnet> auth [C-V]
#+END_SRC

3. Finally add redirect rule

#+BEGIN_SRC sh
redir add udp:3000:4000
#+END_SRC

This will redirect all udp traffic received on port 4000 of the dev
machine to port 3000 of the emulator.

For more info, see: (Set up Android Emulator
Networking)[https://developer.android.com/studio/run/emulator-networking]


# Troubleshooting

## file://android_asset/index.html not found on app launch

Make sure the build directory of the dpp web client is included in the
gradle build (/app/gradle.build).

