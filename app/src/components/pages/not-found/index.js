import React from 'react';
import { Toolbar } from '../../controllers';
import {connect} from "react-redux";

class Component extends React.Component {

    render() {
        return <section className={"page"}>
            <Toolbar title={'Home'} menuButton/>

            <div className={"content-wrapper"}>
                <div className={"overflow-container"}>
                    {/* -------------------- Content --------------------*/}
                    <div className={"page-not-found"}>Page Not Found</div>
                    {/* -------------------- Content --------------------*/}
                </div>
            </div>
        </section>;
    }
}

const mapDispatchToProps = {};
const mapStateToProps = store => ({  });
export default connect(mapStateToProps, mapDispatchToProps)(Component);