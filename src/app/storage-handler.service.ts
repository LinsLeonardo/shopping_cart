import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageHandlerService {

  constructor() { }

  verifyStorage(id: number) :number{
    const itemsFromLocalStorage: any[] = JSON.parse(localStorage.getItem("selectedItems") ?? '[]')
    const indexOfCurrentBook = itemsFromLocalStorage.findIndex( currentId => currentId.id === id)
    return indexOfCurrentBook
  }
  loadFromLocalStorage(){
    const itemsFromLocalStorage: any[] = JSON.parse(localStorage.getItem("selectedItems") ?? '[]')
    return itemsFromLocalStorage
  }
  addToLocalStorage(albums: any[]){
    localStorage.setItem("selectedItems", JSON.stringify(albums))
  }

  clearStorage(){
    const itemsFromLocalStorage = this.loadFromLocalStorage()
    itemsFromLocalStorage.forEach(album => album.amount = 0)    
    localStorage.setItem("selectedItems", JSON.stringify(itemsFromLocalStorage))

    localStorage.removeItem("selectedItems")
    }
  }

