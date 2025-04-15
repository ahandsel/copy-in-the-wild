# Example Verify Email Address Emails


## Table of contents <!-- omit in toc -->

* [Qiita](#qiita)
  * [Terminology](#terminology)
  * [Warning banner to remind user to verify email address](#warning-banner-to-remind-user-to-verify-email-address)
  * [Verify email required notice under the email address field](#verify-email-required-notice-under-the-email-address-field)
  * [Email to verify email address](#email-to-verify-email-address)
  * [Related toast messages](#related-toast-messages)


## Qiita


### Terminology

| Description            | Japanese           | English        |
| ---------------------- | ------------------ | -------------- |
| Email address          | メールアドレス     | Email          |
| Email address settings | メールアドレス設定 | Email settings |


### Warning banner to remind user to verify email address

メールアドレスが認証されていません。メールアドレス設定ページから認証を行ってください。

> Your email address isn't verified. [Please verify your email address on the settings page.]


### Verify email required notice under the email address field

メールアドレスの認証が完了していません。セキュリティ向上のため、一部の機能を制限しています。認証用メールを送信するにはこちらをクリックしてください。

> Your email isn't confirmed.Some features are restricted to improve security. [Click here to send a verification email.]


### Email to verify email address

**Subject Line**:  
メールアドレスのご確認

> Confirm your email

**Email body**:  
こんにちは、{{username}}さん。
Qiitaにご登録いただいたメールアドレスを確認します。
24時間以内に下記へアクセスし、登録を完了してください。

[メールアドレスを認証]

上記のリンクが開けない場合は、お手数ですが以下のURLをコピーしてお使いください。
{{verifyUrl}}

> Hello {{username}}.
> Please confirm your email address by clicking belows URL. The URL is valid for 24hours.
>
> [Confirm email]
>
> Having trouble with the link? Copy and Paste this link into your browser.
> {{verifyUrl}}


### Related toast messages

認証用メールを送信しました。受信箱を確認してください。

> Confirmation email has been sent, please check your email inbox.

メールアドレスの認証に成功しました。

> Email confirmed.

無効な認証キーです。

> Invalid authentication token.
