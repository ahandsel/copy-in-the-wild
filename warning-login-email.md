# Warning Login Email

These are emails sent to users when system detects a login from an unrecognized device or location. The email serves as a warning to the user to ensure their account security.


## Wise example - Suspicious login attempt

**Subject Line**:  
We detected a suspicious login attempt

**Email body**:  

```md
Hello {{username}},

### We detected a login attempt from an unrecognised device.
This could have been an attempt at fraud. To keep your account secure, we need to confirm if it was you.

### Was this you?
Device
**Chrome, Mac OS X**

Location
**United States**

Date and Time
**14 June 2024, 04:02 (GMT)**

### Your money could be at risk
If you don't recognise this device, you can immediately secure your account by changing your password.

[Change your password] <!-- Button -->

### Do you recognise this device?
Before confirming it, double check if the web address you've logged in to starts with **https://wise.com**. Authorising an unknown device puts the security of your account at risk.

[Approve new device] <!-- Button -->
```
