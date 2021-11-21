import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageHandlerService } from 'src/app/storage-handler.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {

  totalPrice!: number;
  @Input() currentAlbum!: any; 

  albumAmount!: number;
  @Output() amountAlbumChanged = new EventEmitter()
  
  constructor(private localStorageService: StorageHandlerService, private location: Location) { }

  ngOnInit(): void {
    this.updateValue()
  }

  addUnity() {
    this.currentAlbum.amount += 1
    this.localStorageService.addToLocalStorage(this.currentAlbum);
    this.albumAmount = this.currentAlbum.amount
    
    this.updateValue()
    this.replace()
  }

  removeUnity(){
    if(this.currentAlbum.amount !== 0){
      this.currentAlbum.amount -= 1
      this.localStorageService.removeOneItem(this.currentAlbum);

    }
    if(this.currentAlbum.amount === 0){
      this.localStorageService.removeAlbum(this.currentAlbum)

      this.load()
      alert(`Você removeu ${this.currentAlbum.title} de ${this.currentAlbum.artist} de sua lista!`)
      
    }
    this.updateValue()
    this.replace()
    
  }

  updateValue(){
   
    this.totalPrice = this.currentAlbum.amount * this.currentAlbum.price

  }

  load(){
    location.reload();
  }

  replace(){
    location.replace('/carrinho')
  }
}
