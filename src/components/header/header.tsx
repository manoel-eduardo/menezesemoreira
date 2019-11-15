import React from 'react';
import {Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../../App.css";

interface IHeaderProps {
    
}

interface IHeaderState {
    currentScrollHeight: number;
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: any) {
        super(props);
        this.state = {currentScrollHeight: 0.0};
    }

    componentDidMount () {      
        window.onscroll =()=>{
         const newScrollHeight = Math.ceil(window.scrollY / 10) * 10;
         if (this.state.currentScrollHeight !== newScrollHeight){
             this.setState({currentScrollHeight: newScrollHeight})
         }
       }
    }

    render() {
        return (
            <AppBar position="fixed" className="App-nav">
                <Toolbar>
                    <div className={"App-logoContainer"}>
                        <img src={process.env.PUBLIC_URL + '/images/card.svg'}
                            alt={'Contabilidade Menezes e Moreira - Logo'}/>
                    </div>
                    <Typography variant="h5" color="primary">
                        Contabilidade Menezes e Moreira
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;