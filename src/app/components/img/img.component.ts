import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  // Decorador input, que nos permite indicarle a imgComponent que recibirá una propiedad llamada IMG
  @Input() img: string = 'valor init';

}
