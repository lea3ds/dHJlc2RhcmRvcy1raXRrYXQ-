import React from 'react';
import { Toolbar } from '../../controllers';
import './_style.css';
import {strings} from './index';

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

export default (Component);