import { Fragment } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

export default function MyCalendar({}) {
  const mLocalizer = momentLocalizer(moment);

  return (
    <Fragment>
      <>
        <Calendar localizer={mLocalizer}  />
      </>
    </Fragment>
  );
}
