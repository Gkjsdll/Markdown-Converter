"use strict";

var $goConvert, $mdInput, $htmlOutput;

$(document).ready(init);

function init(){
  $('#goConvert').click(convertMD);
  $mdInput = $('#mdInput');
  $htmlOutput = $('#htmlOutput');
}

function convertMD(){
  $.post("/markdown", {"Text":$mdInput.val()})
  .success(function(data){
    console.log("Success! Now do a thing!");
    $htmlOutput.empty().append(data);
  })
  .fail(function(err){
    console.log("Failure! Fix your shit!");
  })
}
