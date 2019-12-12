import { Injectable } from '@angular/core';

import * as Telegram from 'messaging-api-telegram';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {

  private telegram: any;

  constructor() {
    console.log('Telegram API : ', Telegram);
  }

  initTelegram(): void {
    this.telegram = Telegram.default.TelegramClient.connect('977483093:AAG-CU4aJbJZ1a97oca7Tbv52nzSihfJsyo');
    console.log('Telegram : ', this.telegram);
    this.handalErrors();
    this.getWebhookInfo();
    this.getUpdates();
    this.getBotInfo();
    this.sendMessage();
    this.getChat();
  }

  handalErrors(): void {
    this.telegram.getWebhookInfo().catch(error => {
      console.log(error); // formatted error message
      console.log(error.stack); // error stack trace
      console.log(error.config); // axios request config
      console.log(error.request); // HTTP request
      console.log(error.response); // HTTP response
    });
  }

  getWebhookInfo(): void {
    this.telegram.getWebhookInfo().then(info => {
      console.log('WebhookInfo : ', info);
      // {
      //   url: 'https://4a16faff.ngrok.io/',
      //   has_custom_certificate: false,
      //   pending_update_count: 0,
      //   max_connections: 40,
      // }
    });
  }

  getUpdates(): void {
    this.telegram.getUpdates({limit: 10})
      .then(updates => {
        console.log('Get updates : ', updates);
        /*
          [
            {
              update_id: 513400512,
              message: {
                message_id: 3,
                from: {
                  id: 313534466,
                  first_name: 'first',
                  last_name: 'last',
                  username: 'username',
                },
                chat: {
                  id: 313534466,
                  first_name: 'first',
                  last_name: 'last',
                  username: 'username',
                  type: 'private',
                },
                date: 1499402829,
                text: 'hi',
              },
            },
            ...
          ]
        */
      });
  }

  sendMessage(): void {
    this.telegram.sendMessage(977483093, 'hi', {
      disable_web_page_preview: true,
      // disable_notification: true,
    });
  }

  getBotInfo(): void {
    this.telegram.getMe().then(result => {
      console.log('Bot info : ', result);
      // {
      //   id: 313534466,
      //   first_name: 'first',
      //   username: 'a_bot'
      // }
    });
  }

  getChat(): void {
    this.telegram.getChat(977483093).then(chat => {
      console.log('Chat : ', chat);
      // {
      //   id: 313534466,
      //   first_name: 'first',
      //   last_name: 'last',
      //   username: 'username',
      //   type: 'private',
      // }
    });
  }


}
