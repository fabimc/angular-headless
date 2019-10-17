import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})

@Injectable()
export class NgbdCarouselBasic {
  constructor(private http: HttpClient) { 
    this.showCarousel();
  }

  carouselUrl = 'http://localhost:1337/carousels';
  imageBaseUrl = 'http://localhost:1337/';
  carouselSlides: any = [];
  getCarousel() {
    return this.http.get(this.carouselUrl);
  }

  showCarousel() {
    this.getCarousel()
      .subscribe((data : any = []) => {
        this.carouselSlides = data.map(slide => ({
            name: slide.name,
            title: slide.title,
            description: slide.description,
            url: `${this.imageBaseUrl}/${slide.image.url}`
        }));
      });
  }
}
