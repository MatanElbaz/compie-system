import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageCard } from 'src/app/models/imageCard';
import { ImageCardServiceService } from 'src/app/services/image-card-service.service';

@Component({
  selector: 'app-image-card-all',
  templateUrl: './image-card-all.component.html',
  styleUrls: ['./image-card-all.component.css']
})
export class ImageCardAllComponent implements OnInit {
  imageCards: ImageCard[];
  foundedimageCards: ImageCard[];
  imageCardId: number;
  imageCard: ImageCard;
  showNotFound: boolean = false;
  constructor(private imageCardService: ImageCardServiceService) { }

  ngOnInit(): void {
    this.getImageCards();
  }

  private getImageCards(): void {
    let obsImageCards: Observable<ImageCard[]> = this.imageCardService.getAllImageCards();

    obsImageCards.subscribe(
      arr => {
        this.imageCards = arr;
        this.foundedimageCards = [];
        for (const c of this.imageCards) {
          this.foundedimageCards.push(c);
        }
      }, err => {

      });
  }

  applyFilter(event: any): void {
    let q: string = event.target.value;

    let arr = this.imageCards.filter((c) => {
      return c.imageName?.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) != -1 || c.artistName?.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) != -1;
    });
    this.foundedimageCards = arr;
    if (arr.length <= 0) {
      this.showNotFound = true;
    } else {
      this.showNotFound = false;
    }

  }
}
