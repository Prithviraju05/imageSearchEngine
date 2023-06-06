import { Component, HostListener, VERSION } from '@angular/core';
import { PixabayService } from './service/pixabay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  imageObj: any;
  searchImg : string ="";
  screenWidth: any;

  constructor(
    private pixabayService: PixabayService
  ) { }

  ngOnInit(){
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
  }

  searchImages(image:string){
    const imageType = "photo";
    this.pixabayService.getAllImages(image,imageType).subscribe(
      (response: any) => {
        if (response) {
          console.log('response', response);
          this.imageObj = response.hits;
        }
      },
      (err : any) => {
        console.log(err);
        alert(err);
      }
    );
  }
}
