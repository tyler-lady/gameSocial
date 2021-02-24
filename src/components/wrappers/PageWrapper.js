import React from "react";

import Header from '../common/Header';
import Footer from '../common/Footer';

//In a functional component, we do not use this.props.children, and we must pass in the props
const PageWrapper = (props) => {
    return(
        <div>
            <Header />
                {props.children}
            <Footer />
        </div>
    )
}

export default PageWrapper;