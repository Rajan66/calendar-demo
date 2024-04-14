import moment from "moment";
import Calendar from "../Calendar";

import '../index.css'

const events = [
    {
        start: moment("2024-04-12T10:00:00").toDate(),
        end: moment("2024-04-12T11:00:00").toDate(),
        title: "MRI Registration",
    },
    {
        start: moment("2024-04-19T14:00:00").toDate(),
        end: moment("2024-04-19T15:30:00").toDate(),
        title: "ENT Appointment",
    },
    {
        start: moment("2024-04-21T14:00:00").toDate(),
        end: moment("2024-04-24T15:30:00").toDate(),
        title: "Random event",
    },

];

export default function ControlCalendar() {

    return (
        <Calendar events={events} min={moment("2024-04-12T09:00:00").toDate()} max={moment("2024-04-12T18:00:00").toDate()} />
    )

    // default view is on weeks (intial load shows week then you can change)
    // return (
    //     <Calendar
    //         defaultView={"month"}
    //         views={{ "month": true, "week": true, "day": true }}
    //         date={moment("2023-09-10").toDate()}
    //         toolbar={false}
    //     />
    // );
    // return <Calendar view={"week"} />; (this hard codes the calendar to week only, you wont be able to change to months or days)
}