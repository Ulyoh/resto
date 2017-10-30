function init() {
  var template;

  //get all hbs partials:
  $.when(
    $.get("/hbs/orders.hbs", function(hbs) {
      template = hbs;
    }),
    $.get("/hbs/order_table.hbs", function(hbs) {
      Handlebars.registerPartial('order_table', hbs);
    }),
    $.get("/hbs/order_article.hbs", function(hbs) {
      Handlebars.registerPartial('order_article', hbs);
    }),
    $.Deferred(function(deferred) {
      $(deferred.resolve);
      //TODO:
    })
  ).done(function() {
    // Compile the template data into a function
    var templateScript = Handlebars.compile(template);

    var html = templateScript(Orders.orders);

    // Insert the HTML code into the page
    $(document.body).append(html);
  });
}

//init function
$(document).ready(function() {
  init();
});
