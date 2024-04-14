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
export default function CustomCalendar() {
    return (
        <Calendar events={events} />
    )
}
