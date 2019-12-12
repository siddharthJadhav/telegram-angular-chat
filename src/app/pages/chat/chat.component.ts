import { Component, OnInit } from '@angular/core';

import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private telegram: TelegramService) { }

  ngOnInit() {
    this.telegram.initTelegram();
  }

}
