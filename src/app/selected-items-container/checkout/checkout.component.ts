import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageHandlerService } from 'src/app/storage-handler.service';
import { Location } from '@angular/common';
import { AllAlbumsService } from 'src/app/all-albums.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnChanges {

  @Input() allAlbums!: any;
  totalPrice: number = 0
  totalAmount: number = 0

  
  constructor(private localStorageService: StorageHandlerService, private route: Router, private location: Location, private albumService: AllAlbumsService) {

   }

  ngOnInit(): void {

    
  }

  ngOnChanges(): void {
    this.totalAmount = 0
    this.totalPrice = 0
    this.updatePrice();
    this.updateAmount()
  }

  updatePrice(): number{
    for(let album of this.allAlbums){
      this.totalPrice += (+album.amount * +album.price)
    }
    return this.totalPrice
  }

  updateAmount(){
    for(let album of this.allAlbums){
      this.totalAmount += album.amount
    }
  }

  endShop(){
    alert(`Obrigado por sua compra! Seu pedido está sendo preparado :)`)
    this.localStorageService.clearStorage()
    location.replace('/')
  }
}
