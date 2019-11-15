import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Paper, Grid, Typography} from "@material-ui/core";
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
                <Typography variant="h5" color="primary" className="servicesTitle">
                    Nossos principais serviços
                </Typography>
                <Grid container spacing={2} alignItems="center" className="servicesGrid">
                    <Grid item sm={12}>
                        <Paper className="servicesPaper">
                            <Contabilidade />
                        </Paper>
                    </Grid>
                    <Grid item sm={12}>
                        <Paper className="servicesPaper right">
                            <EscritaFiscal />
                        </Paper>
                    </Grid>
                    <Grid item sm={12}>
                        <Paper className="servicesPaper">
                            <Folha />
                        </Paper>
                    </Grid>
                    <Grid item sm={12}>
                        <Paper className="servicesPaper right">
                            <PessoaFisica />
                        </Paper>
                    </Grid>
                    <Grid item sm={12}>
                        <Paper className="servicesPaper">
                            <RegularizacaoEmpresarial />
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Details;