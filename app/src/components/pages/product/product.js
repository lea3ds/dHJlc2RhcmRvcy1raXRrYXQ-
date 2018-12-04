import React from 'react';
import {connect} from "react-redux";
import {Toolbar} from '../../controllers/index';
import './_style.css';

class Component extends React.Component {

    render() {
        var id = this.props.location.pathname.substring(this.props.match.path.length+1).split("/")[0];

        return <section className={"page"}>
            <Toolbar title={"One Product"} backButton={()=>this.props.history.goBack()} />
            <div className={"content-wrapper"}>
                <div className={"overflow-container"}>
                    {/* -------------------- Content --------------------*/}

                    id:{id}

                    {/* -------------------- Content --------------------*/}
                </div>
            </div>
        </section>;
    }
}

const mapDispatchToProps = {};
const mapStateToProps = store => ({ });
export default connect(mapStateToProps, mapDispatchToProps)(Component);

