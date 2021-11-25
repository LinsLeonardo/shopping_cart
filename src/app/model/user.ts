export class User {
  name: string = '';
  adress: string = '';
  phone: string = '';

  constructor(name: string, adress: string, phone: string) {
    this.name = name;
    this.adress = adress;
    this.phone = phone;
  }
}