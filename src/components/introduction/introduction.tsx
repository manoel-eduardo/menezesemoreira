import React from 'react';
import "../../App.css";
import "./introduction.css";
import { Typography, Hidden } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';

class Introduction extends React.Component {
    render() {
        return (
            <div className={"App-introduction"}>
                <div className={"hilight"}></div>
                <Hidden smDown>
                    <div className={"intro-logo"}>
                        <img src={process.env.PUBLIC_URL + '/images/card.svg'} alt={'Contabilidade Menezes e Moreira'}/>
                        <Typography variant="h2" color="primary">Contabilidade Menezes e Moreira</Typography>
                    </div>
                    <div className={"intro-text-container"}>
                        <Typography color="primary">
                            <h2>Bem-vinda(o),</h2>
                            <Hidden smDown>
                                <span>
                                a Menezes &amp; Moreira Assessoria Contábil é uma empresa que tem como atividade
                                principal a prestação de serviços na área contábil, envolvendo terceirização operacional,
                                assessoria, contabilidade consultiva e empresarial, voltados para empresas de diversos
                                ramos de atividade.
                                </span>
                            </Hidden>
                            <ArrowDownward className={"more-icon"}/>
                        </Typography>
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <div className={"intro-logo-smDown"}>
                        <img src={process.env.PUBLIC_URL + '/images/card.svg'} alt={'Contabilidade Menezes e Moreira'}/>
                        <Typography variant="h4" color="primary">Contabilidade Menezes e Moreira</Typography>
                    </div>
                    <div className={"intro-text-container"}>
                        <Typography color="primary">
                            <h2>Bem-vinda(o)!</h2>
                            <ArrowDownward className={"more-icon"}/>
                        </Typography>
                    </div>
                </Hidden>
            </div>
        );
    }
}

export default Introduction;