import React from 'react'

const CounterControl = (props) => {
return (
    <div>

        <button onClick={props.click}>{props.name}</button>
    </div>
)
}
export default CounterControl