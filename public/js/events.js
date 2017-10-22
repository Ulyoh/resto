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
      $('.article').addClass('hidden');
      $('#' + id).removeClass('hidden');
      article.closest('.food_list').siblings().addClass('hidden');

      //mark as selected
      article.addClass('selected last_selected');

      //set quantity of article at 1 if not higher
      var qty = article.find('.qty');
      if (qty.text() < 1) qty.text(1);
      $(".alert_confirm_article").removeClass('hidden');

      //show no article message
    } else {
      var alert_nbr = $(".alert_nbr");
      alert_nbr.removeClass('hidden');
      setTimeout(function() {
        alert_nbr.addClass('hidden');
      }, 5000);
    }
  }
});

//handle confirm reponse article alert buttons:
function communConfirmArticle() {
  $(".food_list").removeClass('hidden');
  $(".resto_header").removeClass('hidden');
  $(".last_selected").removeClass('last_selected');
  $(".selected").removeClass('hidden');
  $(".alert_confirm_article").addClass('hidden');
  $(".resto_header").removeClass('hidden');
  $(".navigate_row").removeClass('hidden');
}
$("#conf_article_ok").mousedown(function(e) {
  communConfirmArticle();
});
$("#conf_article_nok").mousedown(function(e) {
  var lastSelected = $(".last_selected");
  lastSelected.removeClass('selected');
  lastSelected.find('.qty').text("0");
  lastSelected.addClass('hidden');
  communConfirmArticle();
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
