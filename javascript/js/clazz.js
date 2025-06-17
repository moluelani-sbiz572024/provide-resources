'use strict';

// クラス
class Human {
  constructor() {
    this.firstName = '西井';
    this.lastName = '悠真';
    this.age = 24;
    this.address = '愛知県名古屋市';
  }
  getFullName() {
    return '<' + this.firstName + ' ' + this.lastName + '>';
  }
}
