'use strict';

// オブジェクトと関数
const Human = {
  name: {
    first: '西井',
    last:  '悠真',
  },
  age: 24,
  address: '愛知県名古屋市',
  getFullName: () => {
    return Human.name.first + ' ' + Human.name.last;
  }
}
