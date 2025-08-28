---
title: Example Verify Email Address Emails
description: Examples of verify email address emails and related UX copy from Discord and Okta.
layout: doc
outline: deep
footer: true
---

# {{$frontmatter.title}}

{{$frontmatter.description}}


## Table of contents <!-- omit in toc -->

* [Discord example](#discord-example)
  * [Email to verify email address](#email-to-verify-email-address)
  * [Email verification link expired page](#email-verification-link-expired-page)
  * [Email address changed - confirmation email sent to new email](#email-address-changed---confirmation-email-sent-to-new-email)
  * [Email address changed - verification email sent to old email](#email-address-changed---verification-email-sent-to-old-email)
* [Okta](#okta)
  * [Verification email](#verification-email)
  * [Verification prompt](#verification-prompt)


## Discord example


### Email to verify email address

**Subject Line**:  
Verify Email Address for Discord

**Email body**:  
Hey {username},
Thanks for registering for an account on Discord! Before we get started, we just need to confirm that this is you. Click below to verify your email address:

[Verify Email]

Need help? [Contact our support team] or hit us up on X [@discord].\
Want to give us feedback? Let us know what you think on our [feedback site].
Sent by Discord - [Check Our Blog] - [@discord]
444 De Haro Street, Suite 200, San Francisco, CA 94107


### Email verification link expired page

Title: Email verification link has expired.

Body: Please log in and resend the link.

Button: [Log In]

![Discord's Email verification link expired page](/discord-email-verify-expired.png)


### Email address changed - confirmation email sent to new email

**Subject Line**:  
Discord Email Address Changed

**Email body**:  
What's up {username},
Your Discord account email address has been successfully changed. It's kinda like moving to a new address without all the couch lifting and back pain!

If this wasn't done by you, please contact dis.gd/contact immediately so we can investigate further.

Best,
Discord Team

Need help? Contact our support team or hit us up on X @discord.
Want to give us feedback? Let us know what you think on our feedback site.

Sent by Discord • Check Our Blog • @discord
444 De Haro Street, Suite 200, San Francisco, CA 94107


### Email address changed - verification email sent to old email

**Subject Line**:  
Discord Email Address Changed

**Email body**:  
What's up {username},
Your Discord account email address has been successfully changed!

If this change wasn't made by you, or was made in error, use the button below within 48 hours of receiving this email to revert the change.

Best,
Discord Team

Start Account Recovery
Need help? Contact our support team or hit us up on X @discord.
Want to give us feedback? Let us know what you think on our feedback site.

Sent by Discord • Check Our Blog • @discord
444 De Haro Street, Suite 200, San Francisco, CA 94107


## Okta

* Help doc: [Users Receiving Email Verification Requests from Okta (email.crossOrgSamlEmailVerification)](https://support.okta.com/help/s/article/users-receiving-email-verification-requests-from-okta-email-crossorgsamlemailverification?language=en_US)
* Okta may send a one-time email verification for security.
* This happens when users access certain apps, like the Help Center.
* A new verification is needed if the email has changed since the last check.


### Verification email

| Description | English                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------ |
| Greeting    | Hi User,                                                                                   |
| Body        | To verify your email address, please click the following link:                             |
| CTA button  | [Verify Email]                                                                             |
| Footer      | This is an automatically generated message by Okta. Replies are not monitored or answered. |


### Verification prompt

| Description | English                                 |
| ----------- | --------------------------------------- |
| Title       | Email Verification Needed               |
| Body        | An email has been sent for verification |
| CTA button  | [Go to Homepage]                        |
