"use strict";

var $goConvert, $mdInput;

$(document).ready(init);

function init(){
  $('#goConvert').click(convertMD);
  $mdInput = $('#mdInput');
}

function convertMD(){
  console.log($mdInput.val());
}
