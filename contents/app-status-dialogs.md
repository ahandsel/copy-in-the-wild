---
title: App Status Dialogs
description: Desktop app modal dialogs that report status - a friendly "up to date" confirmation from Slack and a subscription-verification error from AirBuddy via Setapp.
layout: doc
outline: deep
footer: true
---

# {{$frontmatter.title}}

{{$frontmatter.description}}


## Table of contents <!-- omit in toc -->

* [Slack example - Already up to date](#slack-example---already-up-to-date)
* [AirBuddy example - Subscription verification error](#airbuddy-example---subscription-verification-error)


## Slack example - Already up to date

A reassuring dialog shown when the user checks for updates but already has the newest build.

| Description | English                                                                 |
| ----------- | ----------------------------------------------------------------------- |
| Title       | You're all sorted                                                       |
| Body        | You've got the latest version of Slack; thanks for staying on the ball. |
| CTA button  | [OK]                                                                    |

![Slack "You're all sorted" dialog](/slack-up-to-date.png)


## AirBuddy example - Subscription verification error

An error dialog shown when AirBuddy (distributed via Setapp) cannot reach the internet to confirm the subscription.

| Description | English                                                                        |
| ----------- | ------------------------------------------------------------------------------ |
| Title       | AirBuddyHelper needs to verify your Setapp subscription before it can be used. |
| Body        | Please establish Internet connection and reopen the application.               |
| CTA button  | [OK]                                                                           |

![AirBuddy Setapp subscription verification error](/airbuddy-setapp-subscription-error.png)
