import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

images = [

  { url: 'assets/images/1g.png' },

  { url: 'assets/images/2g.png' },

  { url: 'assets/images/3g.png' },

  { url: 'assets/images/4g.png' },

  { url: 'assets/images/5g.png' },

  { url: 'assets/images/6g.png' }

];
}
