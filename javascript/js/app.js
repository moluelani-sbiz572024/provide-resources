'use strict';

const sample = () => {
  moji = "文字列";
  console.log(moji);
}

/**
 * 関数の概要
 * @param xxxx
 * @return xxxx
 */
const func_case01 = () => {
  
  // xxxxx
  const txtbox = document.querySelector('#txt-box');
  console.log(txtbox.value);

  const input_value = txtbox.value;
  txtbox.value = null;

  document.querySelector('#resp-case01').textContent = '結果：' + input_value;
}