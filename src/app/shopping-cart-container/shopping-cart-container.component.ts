import { Component, OnInit } from '@angular/core';
import { AllAlbumsService } from '../all-albums.service';

@Component({
  selector: 'app-shopping-cart-container',
  templateUrl: './shopping-cart-container.component.html',
  styleUrls: ['./shopping-cart-container.component.css']
})
export class ShoppingCartContainerComponent implements OnInit {


  allAlbums =  this.serviceAlbums.allAlbums

  constructor(private serviceAlbums: AllAlbumsService) { }

  ngOnInit(): void {
  }


}
