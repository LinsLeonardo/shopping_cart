import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AllAlbumsService } from 'src/app/all-albums.service';
import { User } from 'src/app/model/user';
import { StorageHandlerService } from 'src/app/storage-handler.service';

@Component({
  selector: 'app-form-checkout',
  templateUrl: './form-checkout.component.html',
  styleUrls: ['./form-checkout.component.css']
})
export class FormCheckoutComponent implements OnInit {


  checkoutForm: FormGroup;
  user: User = new User("", "", "")
  totalPrice: number = 0;
  totalAmount: number = 0;
  allAlbums: any[]

  constructor(private albumService: AllAlbumsService, private route: Router, private localStorageService: StorageHandlerService) {
    this.allAlbums = albumService.selectedAlbums;
    
    this.checkoutForm = new FormGroup({
      'name': new FormControl(this.user.name, [Validators.required, Validators.minLength(5)]),
      'adress': new FormControl(this.user.adress,  [Validators.required, Validators.minLength(10)]),
      'phone': new FormControl(this.user.phone)
    })
  }

  ngOnInit(): void {
    this.updatePrice(),
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

  backShopping() {
    this.route.navigate(['/carrinho'])
  }
  
  submit(){
    const name = this.checkoutForm.get('name')?.value;
    const adress = this.checkoutForm.get('adress')?.value;
    const phone = this.checkoutForm.get('phone')?.value;

    const newTask = new User(name, adress, phone);
    console.log(newTask)
    alert(`Obrigado por sua compra! Seu pedido está sendo preparado :)`)
    this.localStorageService.clearStorage()
    location.replace('/')
  }

  get name() { return this.checkoutForm.get('name')}
  get adress() { return this.checkoutForm.get('adress')}
  get phone() { return this.checkoutForm.get('phone')}
}
