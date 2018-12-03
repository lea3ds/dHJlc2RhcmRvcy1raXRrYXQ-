import React from 'react';
import { connect } from "react-redux";
//import {updatePassword} from "./_actions";
import { strings, routes } from './index';
import {  Toolbar, Loader } from '../../controllers/index';
import './styles.css';

import {Button,IconButton} from '@material-ui/core';
import {Edit as EditIcon} from '@material-ui/icons';

class Component extends React.Component {
    state = {confirming: false};

    componentDidMount() {

    }

    render() {

        return <section className={"page profile"}>

            <Toolbar
                title={strings.account_profile_title}
                backButton={() => this.props.history.goBack()}
            />

            {this.state.confirming ? <Loader/> : null}

            <div className={"content-wrapper"}>
                <div className={"overflow-container"}>
                    {/* -------------------- Content --------------------*/}

                    <div className={"card"}>
                        <div className={"title"}>
                            <div className={"value"}>Datos personales</div>
                            <div className={"action"}></div>
                        </div>
                        <div className={"item"}>
                            <div className={"key"}>Nombre</div>
                            <div className={"value"}>No te importa</div>
                            <div className={"action"}><IconButton><EditIcon/></IconButton></div>
                        </div>
                        <div className={"item"}>
                            <div className={"key"}>Apellido</div>
                            <div className={"value"}>Esto tampoco importa</div>
                            <div className={"action"}><IconButton><EditIcon/></IconButton></div>
                        </div>
                        <div className={"item"}>
                            <div className={"key"}>Documento</div>
                            <div className={"value"}>32165421</div>
                            <div className={"action"}><IconButton><EditIcon/></IconButton></div>
                        </div>
                        <div className={"item"}>
                            <div className={"key"}>Teléfono</div>
                            <div className={"value"}>1565415654</div>
                            <div className={"action"}><IconButton><EditIcon/></IconButton></div>
                        </div>
                        <div className={"item"}>
                            <div className={"key"}>Direccion</div>
                            <div className={"value"}>Avenida Oculta 6969</div>
                            <div className={"action"}><IconButton><EditIcon/></IconButton></div>
                        </div>

                    </div>

                    <div className={"card"}>
                        <div className={"title"}>
                            <div className={"value"}>Datos de cuenta</div>
                            <div className={"action"}></div>
                        </div>
                        <div className={"item"}>
                            <div className={"key"}>E-mail</div>
                            <div className={"value"}>leandro2712@gmail.com</div>
                            <div className={"action"}></div>
                        </div>
                        <div className={"item"}>
                            <div className={"key"}>Clave</div>
                            <div className={"value"}>**********</div>
                            <div className={"action"}><IconButton onClick={()=>this.props.history.push(routes.password.path)}><EditIcon/></IconButton></div>
                        </div>
                        <div className={"value"}>
                            <Button fullWidth={true} color="primary" onClick={()=>this.props.history.push(routes.logout.path)}>
                                Salir
                            </Button>
                        </div>
                    </div>

                    {/* -------------------- Content --------------------*/}
                </div>
            </div>
        </section>;
    }
}

const mapDispatchToProps = {};
const mapStateToProps = store => ({ });
export default connect(mapStateToProps, mapDispatchToProps)(Component);


