import React from 'react'

function HeaderView() {
    return (
        <header className="classNameic-header bg-primary nav-on-top border-bottom">
            <div className="main-nav py-0 xs-p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg nav-secondary nav-primary-hover nav-line-active">
                                <a className="navbar-brand" href="#"><img className="nav-logo" src="assets/img/logo.png" width="150" height="40" alt="Image not found !" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon flaticon-menu flat-small text-primary"></span>
                            </button>

                                <div className="collapse navbar-collapse ms-4 sm-ms-0" id="navbarSupportedContent">
                                    <div className="navbar-nav ms-auto sm-mx-none">
                                        {/* <div className="search-form header-active-form">
                                            <form action="#" method="post" className="position-relative">
                                                <input className="form-control rounded-0" type="search" placeholder="What you are looking for?" aria-label="Search" style={{borderRadius: '5px !important'}} />
                                                <button className="btn-search my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                                            </form>
                                        </div> */}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderView