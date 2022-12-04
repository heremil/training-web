function sendEvent(productName){
    console.log("event-log");
    gtag('event', 'click_view_product', {
        product:productName
      });
}