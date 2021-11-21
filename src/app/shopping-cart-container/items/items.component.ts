import { Component, Input, OnInit } from '@angular/core';
import { StorageHandlerService } from 'src/app/storage-handler.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() string!: string; 

  @Input() currentAlbum!: any;
  nome!: string; 
  valor!: string; 
  constructor(private localStorageService: StorageHandlerService) {

   }

  ngOnInit(): void {

  }

  saveOnStorage(){
    this.localStorageService.addToLocalStorage(this.currentAlbum)

    alert(`O álbum ${this.currentAlbum.title} de ${this.currentAlbum.artist} foi adicionado ao seu carrinho!`)
  }

}
