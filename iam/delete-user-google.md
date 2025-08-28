---
title: Delete User - Google Admin Console
description: UX copy for deleting a user in Google Admin Console, including modal text and confirmation email.
layout: 'doc'
outline: 'deep'
footer: 'true'
---

# {{$frontmatter.title}}

{{$frontmatter.description}}


## Table of contents <!-- omit in toc -->

* [Delete User UX Copy Modal](#delete-user-ux-copy-modal)
  * [Title](#title)
  * [Banner 1](#banner-1)
  * [Banner 2](#banner-2)
  * [Transfer user's data](#transfer-users-data)
    * [Data in Gmail](#data-in-gmail)
    * [Data in Classroom](#data-in-classroom)
    * [Data in other apps](#data-in-other-apps)
  * [Footer banner](#footer-banner)
  * [Footer](#footer)
  * [CTA buttons](#cta-buttons)
  * [Screenshot](#screenshot)
* [Confirmation modal](#confirmation-modal)
  * [Title](#title-1)
  * [Body](#body)
* [Confirmation email](#confirmation-email)


## Delete User UX Copy Modal


### Title

Delete user {user_full_name}


### Banner 1

Before deleting this user consider transferring their data. Once deleted, the user can't access their account and any untransferred data will be deleted after 20 days. [Learn more about deleting users](https://support.google.com/a/answer/33314?hl=en)


### Banner 2

Review data transfer steps below. If you need more time you can first [reset the user's password](https://admin.google.com/ac/users/4f1mdlm24gucke/profile?action_id=RESET_PASSWORD) or [suspend their account](https://admin.google.com/ac/users/4f1mdlm24gucke/profile?action_id=SUSPEND_USER) to prevent them from accessing their account. [Learn about suspending accounts](https://support.google.com/a/answer/33312?hl=en)


### Transfer user's data


#### Data in Gmail

1. [Migrate the user's existing email](https://admin.google.com/ac/migrate/gmail)
2. If you want to keep receiving future emails sent to this address, here are your options:
    * Reuse this users email address **(Recommended)**  
      You can make this user's current email address an alternate email (email alias) for another user 24 hours after this user is deleted.  
      [Learn about reusing emails](https://support.google.com/a/answer/33327?hl=en)
    * [Set up email forwarding for incoming messages](https://admin.google.com/ac/apps/gmail/defaultrouting)


#### Data in Classroom

Make sure to transfer ownership of Google Classroom classes owned by this user using the [Classroom API](https://developers.google.com/classroom/guides/manage-courses#transfer_course_ownership).  
Doing so ensures that the class content remains available to your organization.  
[Learn more about transferring ownership of a class.](https://support.google.com/edu/classroom/answer/7477648?hl=en)


#### Data in other apps

* Select the user you want to transfer **{user_full_name}'s** data to (for example, a manager)
* Select data to transfer:
  * [ ] Drive And Docs
  * [ ] Include files that are not shared with anyone.
  * [ ] Calendar
  * [ ] Also release all calendar resources booked in events organised by the user  
     Only future non-private events with at least one guest/resource shall be transferred.  
     [Learn about transferred calendar events](https://support.google.com/a/answer/7399420?hl=en#transferdelete)
  * [ ] Looker Studio
  * [ ] Include assets that are not shared with anyone.


### Footer banner

All data not transferred will be deleted, including YouTube data.  
[Learn about what's deleted](https://support.google.com/a/answer/33314?hl=en)


### Footer

Once you delete this user their license will be removed.


### CTA buttons

* [CANCEL]
* [DELETE USER]


### Screenshot

![delete-user-google](../delete-user-google.png)


## Confirmation modal


### Title

Deleting user
{user_full_name}


### Body

This user's data is being transferred. You'll get an email when that's complete, and the user is deleted.

When the transfer is still in progress, the user's account will be suspended to prevent them from accessing their account.

After the deletion you have 20 days to restore the account, after which all the data be permanently deleted. [Learn more](https://support.google.com/a/answer/1397578?hl=en)


## Confirmation email

**Subject line:**  
Your deletion of {user_full_name} from Google Workspace was successful

**Body:**  
![Google Workspace] logo

Hello Admin,  

Google Workspace recently processed a request from {admin_user_name} ({admin_user_email_address}) to delete {user_full_name} ({user_email_address}) and transfer their data to {admin_user_name} ({admin_user_email_address}).

The data transfer was successful and {user_full_name} ({user_email_address}) was deleted.

**Sincerely,**
**The Google Workspace Team**

**Footer:**  
Google Workspace
© 2025 Google LLC 1600 Amphitheatre Parkway, Mountain View, CA 94043

You're receiving this mandatory email service announcement to update you about important changes to your Google Workspace product or account.
