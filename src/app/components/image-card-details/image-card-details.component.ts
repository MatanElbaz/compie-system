import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageCard } from 'src/app/models/imageCard';
import { ImageCardServiceService } from 'src/app/services/image-card-service.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-image-card-details',
  templateUrl: './image-card-details.component.html',
  styleUrls: ['./image-card-details.component.css']
})
export class ImageCardDetailsComponent implements OnInit {

  // public imageCard: ImageCard;
  public imageCard: ImageCard;
  public id: number;

  public constructor(private webSocketService:WebSocketService,private title:Title,private router:Router, private activeRoute: ActivatedRoute, private imageService : ImageCardServiceService) {
    this.id = this.activeRoute.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.imageService.getImageCardById(this.id).subscribe(c =>{
      this.imageCard = c;
      this.title.setTitle("Image Card Details");
      },err=>{
        alert(err.error.message);
        this.router.navigate(["/home"]);
    });
    this.imageService.getChatMessagesById(this.id).subscribe(chatMessages=>{
      this.webSocketService.chatMessages = chatMessages;
    });
  }


}
