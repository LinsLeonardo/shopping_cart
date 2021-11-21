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

  addToLocalStorage(currentAlbum: any){
    const currentIndex = this.verifyStorage(currentAlbum.id)
    const itemsFromLocalStorage = this.loadFromLocalStorage()
    if(currentIndex >= 0){
      let newAmount = itemsFromLocalStorage[currentIndex].amount 
      newAmount += 1
      itemsFromLocalStorage[currentIndex].amount = newAmount
    }
    else {
      let newAmount = currentAlbum.amount 
      newAmount += 1
      currentAlbum.amount = newAmount
      itemsFromLocalStorage.push(currentAlbum)
    }
    localStorage.setItem("selectedItems", JSON.stringify(itemsFromLocalStorage))

    }

    removeOneItem(currentAlbum:any){
      const currentIndex = this.verifyStorage(currentAlbum.id)
      const itemsFromLocalStorage = this.loadFromLocalStorage()
      let newAmount = itemsFromLocalStorage[currentIndex].amount 
      newAmount -= 1
      itemsFromLocalStorage[currentIndex].amount = newAmount
      localStorage.setItem("selectedItems", JSON.stringify(itemsFromLocalStorage))
    }

    removeAlbum(currentAlbum: any){
      const itemsFromLocalStorage = this.loadFromLocalStorage()
      const newItems = itemsFromLocalStorage.filter(album => album.amount !== 0)
      localStorage.setItem("selectedItems", JSON.stringify(newItems))
    }

    clearStorage(){
      const itemsFromLocalStorage = this.loadFromLocalStorage()
      itemsFromLocalStorage.forEach(album => album.amount = 0)    
      localStorage.setItem("selectedItems", JSON.stringify(itemsFromLocalStorage))

      localStorage.removeItem("selectedItems")
    }
  }

