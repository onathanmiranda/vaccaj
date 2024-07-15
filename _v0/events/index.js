const namespace = "vaccaj-events";

const eventsNames = new Set(["allowCookies"]);
const eventNamesArr = [...eventsNames];
const eventsStrings = eventNamesArr.map(
  (eventName) => `${namespace}-${eventName}`
);

let events = {};

if (typeof window !== "undefined") {
  eventsStrings.forEach((event, index) => {
    events[eventNamesArr[index]] = new window.Event(event);
  });
}

export default events;
