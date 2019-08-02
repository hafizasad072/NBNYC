import React from 'react'

const Layout = (props) => {
    return (
        <div>
            <pre>This is Layout</pre>
            {props.children}
        </div>
    )
}
export default Layout;