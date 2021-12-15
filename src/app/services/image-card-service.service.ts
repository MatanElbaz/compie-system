import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageCard } from '../models/imageCard';
import { Observable } from 'rxjs';
import { ChatMessageDto } from '../models/chatMessageDto';

@Injectable({
  providedIn: 'root'
})
export class ImageCardServiceService {
  // saveChatById(id: any, arr: ChatMessageDto[]) {
  //   return this.httpClient.put<ChatMessageDto>(this.MAIN_URL + id, arr, { responseType: 'text' as 'json',withCredentials: true });
  // }
  private MAIN_URL = "http://localhost:8080/images/";
  constructor(private httpClient: HttpClient) { }

  public getAllImageCards(): Observable<ImageCard[]> {
    return this.httpClient.get<ImageCard[]>(this.MAIN_URL + "all", { withCredentials: true });
  }

  public getImageCardById(id: number): Observable<ImageCard> {
    return this.httpClient.get<ImageCard>(this.MAIN_URL + id, { withCredentials: true });
  }

  public getChatMessagesById(id: number): Observable<ChatMessageDto[]> {
    return this.httpClient.get<ChatMessageDto[]>(this.MAIN_URL +"chat-obj/"+ id, { withCredentials: true });
  }
  public setChatMessages(id: number,chatMessageDto:ChatMessageDto): Observable<ChatMessageDto> {
    return this.httpClient.put<ChatMessageDto>(this.MAIN_URL + "chat-obj/" + id, chatMessageDto,{ withCredentials: true });
  }

}
