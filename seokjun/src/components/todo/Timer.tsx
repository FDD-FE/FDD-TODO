import moment from "moment/moment";
import {useState} from "react";
import {Time} from "../../types/time";

export default function Timer() {
    const [clock, setClock] = useState<Time>({date: '', time: ''})

    setInterval(() => {
        setClock({
            date: moment().format("YYYY-MM-DD"),
            time: moment().format("h:mm:ss"),
        })
    }, 1000)

    return (
        <>
            <p>{clock.date}</p>
            <p>{clock.time}</p>
        </>
    )
}
