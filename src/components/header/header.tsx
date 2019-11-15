import React from 'react';
import {Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../../App.css";

class Header extends React.Component {
    render() {
        return (
            <AppBar position="relative" className="App-nav">
                <Toolbar>
                    <div className={"App-logoContainer"}>
                        <img src={process.env.PUBLIC_URL + '/images/card.svg'}
                             alt={'Contabilidade Menezes e Moreira - Logo'}/>
                    </div>
                    <Typography variant="h5" color="inherit">
                        Contabilidade Menezes e Moreira
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;