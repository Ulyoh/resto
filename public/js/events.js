//verify number entry
$('.article_nbr').keypress(function(event) {
  var value = $(this).val();
  return isNumberLessThan3Caracters(event, value);
});

//choose article by number
$('.article_nbr').keyup(function(event) {
  //set input as id:
  var id = event.target.value;
  //if input length is 3
  if (event.target.value.length === 3) {
    //if article exists
    var article = $('#' + id);
    if (article.length) {
      //hide everything else
      $('.article:not(#' + id + ')').hide();
      article.closest('.hero').siblings().hide();
      //set quantity of article at 1 if not higher
      var qty = article.find('.qty');
      if (qty.text() < 1) qty.text(1);
    } else {
      //show no article message
      var alert_nbr = $(".alert_nbr");
      alert_nbr.removeClass('hidden');
      setTimeout(function() {
        alert_nbr.addClass('hidden');
      }, 5000);
    }
  }
});

$('.btn_more').mousedown(function(event) {
  var qty = $(event.target).siblings('.qty');
  var value = qty.text();
  qty.text(++value);
});

$('.btn_less').mousedown(function(event) {
  var qty = $(event.target).siblings('.qty');
  var value = qty.text();
  if (value > 0) qty.text(--value);
  else qty.text = 0;
});
