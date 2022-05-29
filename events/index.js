const namespace = "vaccaj-events";

const eventsNames = new Set(["allowCookies"]);
const eventNamesArr = [...eventsNames];
const eventsStrings = eventNamesArr.map(
  (eventName) => `${namespace}-${eventName}`
);

let events = {};

eventsStrings.forEach((event, index) => {
  events[eventNamesArr[index]] = new Event(event);
});

export default events;
