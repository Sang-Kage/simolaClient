import { useState, useRef } from "react";
declare const CalendarPage: any;

export default function useCalendar() {
  const [calendar, setCalendar] = useState<any>();
  const [title, setTitle] = useState("");
  const [classNames, setClassNames] = useState<any>("");
  const start_date = useRef<any>();
  const end_date = useRef<any>();


  return {
    calendar,
    setCalendar,
    title,
    setTitle,
    classNames,
    setClassNames,
    start_date,
    end_date,
  };
}