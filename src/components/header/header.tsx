import React from 'react';
import {Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class Header extends React.Component {
    render() {
        return (
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Contabilidade Menezes e Moreira
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;