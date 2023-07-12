import { useState, useRef } from "react";
declare const CalendarPage: any;

export default function useCalendar() {
  const [calendar, setCalendar] = useState<any>();
  const [events, setEvents] = useState([
    { title: "Pelantikan HIMATIF", start: new Date(), classNames: ["bg-warning"] },
    {
      title: "Long Event",
      start: new Date(),
      end: new Date(),
      classNames: ["bg-warning"],
    },
  ]);


  const [title, setTitle] = useState("");
  const [classNames, setClassNames] = useState<any>("");
  const start_date = useRef<any>();
  const end_date = useRef<any>();

  function saveEvent() {
    const newEvent = {
      title: title,
      start: new Date(start_date.current.value),
      end: new Date(end_date.current.value),
      classNames: [classNames],
    };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    calendar?.init(events.concat(newEvent));
    setTitle("");
    setClassNames("");
    start_date.current.value = "";
    end_date.current.value = "";
  }


  return {
    setCalendar,
    events,
    setEvents,
    title,
    setTitle,
    classNames,
    setClassNames,
    start_date,
    end_date,
    saveEvent
  };
}