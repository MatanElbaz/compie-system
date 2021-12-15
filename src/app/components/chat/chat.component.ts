import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from 'src/app/models/chatMessageDto';
import { ImageCardServiceService } from 'src/app/services/image-card-service.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input()
  imageCardId:any;

  constructor(public webSocketService: WebSocketService,public imageCardService: ImageCardServiceService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto,Number(this.imageCardId));
    this.imageCardService.setChatMessages(this.imageCardId, chatMessageDto).subscribe(chatMessages=>{

    });
    sendForm.controls.message.reset();
  }

}
