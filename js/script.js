function sendEventWithProduct(event_name ,productName){
    console.log("event-log -> "+event_name+" -> "+productName);
    gtag('event', event_name, {
        product:productName,
      });
}

function sendEvent(event_name){
  console.log("event-log "+event_name);
  gtag('event', event_name, {
      
    });
}