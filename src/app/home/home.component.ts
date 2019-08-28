import { Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
    new Glide('.glide',{
      type: 'slider',
      perView: 5,
      focusAt: 'center',
      startAt: 3,
      breakpoints: {
        800: {
          perView: 2
        },
        480: {
          perView: 1
        }
      }
    }).mount()
  }

}
