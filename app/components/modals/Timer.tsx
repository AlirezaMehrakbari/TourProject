import React, {useEffect, useState} from 'react'

const Timer = ({minute, second, expired}: {
    minute: number,
    second: number,
    expired: (arg0: boolean) => void
}) => {
    const [minutes, setMinutes] = useState(minute);
    const [seconds, setSeconds] = useState(second);
    useEffect(() => {
        expired(false)
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    expired(true)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
            expired(true)
        };
    });
    return (
        <div>
            {minutes === 0 && seconds === 0
                ? null
                : <h1 className='px-[3px]'> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            }
        </div>
    )
}

export default Timer
