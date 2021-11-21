import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageHandlerService } from 'src/app/storage-handler.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() allAlbums!: any;

  totalPrice: number = 0

  constructor(private localStorageService: StorageHandlerService, private route: Router, private location: Location) {
   }

  ngOnInit(): void {
    this.updatePrice()

    
  }

  updatePrice(){
    for(let album of this.allAlbums){
      this.totalPrice += (+album.amount * +album.price)
    }
  }

  endShop(){
    alert(`Obrigado por sua compra! Seu pedido está sendo preparado :)`)
    this.localStorageService.clearStorage()
    location.replace('/')
  }
}
