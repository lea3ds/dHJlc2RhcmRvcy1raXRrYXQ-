import React from 'react';
import { Toolbar } from '../../controllers';
import {connect} from "react-redux";
import {strings} from "../../../localization/strings";
import './_style.css';

class Component extends React.Component {

    render() {
        return <section className={"page"}>
            <Toolbar title={'Page not found'} menuButton/>

            <div className={"content-wrapper"}>
                {/* -------------------- Content --------------------*/}
                <div className={"page-not-found"}>{strings.page_not_found}</div>
                {/* -------------------- Content --------------------*/}
            </div>
        </section>;
    }
}

const mapDispatchToProps = {};
const mapStateToProps = store => ({  });
export default connect(mapStateToProps, mapDispatchToProps)(Component);