import moment from "moment";
import Calendar from "../Calendar";

import '../index.css'

const events = [
    {
        start: moment("2024-04-12T10:00:00").toDate(),
        end: moment("2024-04-12T11:00:00").toDate(),
        title: "MRI Registration",
        data: {
            type: "Reg",
        },
    },
    {
        start: moment("2024-04-19T14:00:00").toDate(),
        end: moment("2024-04-19T15:30:00").toDate(),
        title: "ENT Appointment",
        data: {
            type: "App",
        },
    },
    {
        start: moment("2024-04-21T14:00:00").toDate(),
        end: moment("2024-04-24T15:30:00").toDate(),
        title: "Random event",
        data: {
            type: "App",
        },
    },

];

const components = {
    event: (props: any) => {
        const eventType = props?.event?.data?.type;
        switch (eventType) {
            case "Reg":
                return (
                    <div className="bg-red-400 text-black">
                        {props.title}
                    </div>
                );
            case "App":
                return (
                    <div className="bg-green-400 text-black">
                        {props.title}
                    </div>
                );
            default:
                return null;
        }
    },
};

export default function ControlCalendar() {
    return <Calendar events={events} components={components} />;
}