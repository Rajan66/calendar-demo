import moment from "moment";
import Calendar from "../Calendar";

const events = [
    {
        start: moment("2024-04-12T10:00:00").toDate(),
        end: moment("2024-04-12T11:00:00").toDate(),
        title: "MRI Registration",
    },
    {
        start: moment("2024-04-12T14:00:00").toDate(),
        end: moment("2023-04-12T15:30:00").toDate(),
        title: "ENT Appointment",
    },
];

export default function BasicCalendar() {
    return <Calendar events={events} />;
}