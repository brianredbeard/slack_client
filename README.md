# Slack Client by Tiny Speck

## About
This is the contents of the Linux Slack desktop client.  It's useful for users
who want to ensure that they are able to build the client on their own.

## Technical Details

### RPM Details
The following is the information in the [released](http://web.archive.org/web/20171212225200/https://downloads.slack-edge.com/linux_releases/slack-3.0.0-0.1.fc21.x86_64.rpm) RPM for Slack.  

```
$ rpm -qip slack-3.0.0-0.1.fc21.x86_64.rpm 
warning: slack-3.0.0-0.1.fc21.x86_64.rpm: Header V4 RSA/SHA1 Signature, key ID bf6a7041: NOKEY
Name        : slack
Version     : 3.0.0
Release     : 0.1.fc21
Architecture: x86_64
Install Date: (not installed)
Group       : Unspecified
Size        : 188779395
License     : MIT
Signature   : RSA/SHA1, Mon 20 Nov 2017 01:25:30 PM PST, Key ID 7253c9c8bf6a7041
Source RPM  : slack-3.0.0-0.1.fc21.src.rpm
Build Date  : Fri 01 Dec 2017 07:14:17 PM PST
Build Host  : 73ed055de6dd
Relocations : /usr 
URL         : https://github.com/tinyspeck/slack-winssb.git
Summary     : Slack Desktop
Description :
Slack Desktop
```

### Specfile

The specfile was regenerated from the RPM and is located in the file `slack.spec`.

### Hashes

```
4a10ac11ea4f556c31a0b3b21ce29854                                  slack-3.0.0-0.1.fc21.x86_64.rpm
a849dcbb57cd38fb89633641320d9cad0dc65e5b3e67af9d514bc1b5b95e5c1b  slack-3.0.0-0.1.fc21.x86_64.rpm
a05aa056e4c5d3ced30452a9ff016d86803c8bc1bed11c95c36c4e3b0340cc366902a5819df83e4bd81d962992a33e6679fe90b73fc1a4e6421446e00d904240  slack-3.0.0-0.1.fc21.x86_64.rpm
```

### Security

When generating a package (or installing) one may optionally choose to remove
the file `/etc/cron.daily/slack`.  This file is a cron job which automatically
adds GPG keys to the system key ring.  This is not for a single key, but
potentially many keys as per:

```
# NB: The original key we used above is the public PackageCloud
# key which we are now moving away from and moving to a key that
# Slack uses solely for Slack packages. However, in order to not
# break updates for people, we need to ship an update where we
# include both keys. In a future update, we'll remove the
# PackageCloud key.
```

## License
As per the RPM file (noted above) this package is released under the MIT
license.  Full details of the MIT license are noted in the file `LICENSE`.

All licenses for all components can be viewed in:

```
root/usr/lib/slack/LICENSE
```

Machine parsable versions of the licenses can be viewed in:

```
root/usr/lib/slack/LICENSES-linux.json
```


<!--
vim: set ts=2 sw=2 expandtab tw=80 :
-->
