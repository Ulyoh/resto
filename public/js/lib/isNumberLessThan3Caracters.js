function isNumberLessThan3Caracters(evt, value) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode != 8 && charCode != 46 && (charCode < 48 || charCode > 57 || value.length > 2) && (charCode < 37 || charCode > 40)) {
    return false;
  }
  return true;
}
