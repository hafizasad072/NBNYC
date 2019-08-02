import React from 'react'

const LoginLayout = (props) => {
    return(
        <div>
            <div className="row h-100">
                <main className="main-content col">
                    <div className="main-content-container container-fluid px-4 my-auto h-100">
                        <div className="row no-gutters h-100">
                            <div className="col-lg-3 col-md-5 auth-form mx-auto my-auto">
                                <div className="card">
                                    <div className="card-body">
{props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default LoginLayout;