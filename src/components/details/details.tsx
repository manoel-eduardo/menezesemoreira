import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Paper, Grid} from "@material-ui/core";
import './details.css';
import Contabilidade from './contabilidade/contabilidade';
import EscritaFiscal from './escrita-fiscal/escrita-fiscal';
import Folha from './folha/folha';
import RegularizacaoEmpresarial from './regularizacao-empresarial/regularizacao-empresarial';
import PessoaFisica from './pessoa-fisica/pessoa-fisica';

class Details extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={12} md={2}>
                        <Paper>
                            Contabilidade.
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}>
                        <Paper>
                            Escrita Fiscal
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}>
                        <Paper>
                            Folha
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}>
                        <Paper>
                            Regularização Empresa
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}>
                        <Paper>
                            Pessoa Física
                        </Paper>
                    </Grid>
                </Grid>
                <Contabilidade />
                <EscritaFiscal />
                <Folha />
                <PessoaFisica />
                <RegularizacaoEmpresarial />
            </React.Fragment>
        );
    }
}

export default Details;