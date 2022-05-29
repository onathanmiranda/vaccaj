const namespace = "vaccaj-events";

const eventsNames = new Set(["allowCookies"]);
const eventNamesArr = [...eventsNames];
const eventsStrings = eventNamesArr.map(
  (eventName) => `${namespace}-${eventName}`
);

let events = {};

try {
  eventsStrings.forEach((event, index) => {
    events[eventNamesArr[index]] = new window.Event(event);
  });
} catch (e) {
  console.log(e);
}

export default events;
