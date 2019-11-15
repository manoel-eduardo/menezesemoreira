import React from 'react';
import "../../App.css";
import "./introduction.css";
import { Typography } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';

class Introduction extends React.Component {
    render() {
        return (
            <div className={"App-introduction"}>
                <div className={"hilight"}></div>
                <div className={"intro-text-container"}>
                    <Typography color="primary">
                        <h2>Bem-vinda(o),</h2>
                        <span>
                        a Menezes &amp; Moreira Assessoria Contábil é uma empresa que tem como atividade
                        principal a prestação de serviços na área contábil, envolvendo terceirização operacional,
                        assessoria, contabilidade consultiva e empresarial, voltados para empresas de diversos
                        ramos de atividade.
                        </span>
                        <ArrowDownward className={"more-icon"}/>
                    </Typography>
                </div>
            </div>
        );
    }
}

export default Introduction;