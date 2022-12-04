function sendEvent(event_name ,productName){
    console.log("event-log");
    gtag('event', event_name, {
        product:productName,
        event_name:'click_view_product'
      });
}