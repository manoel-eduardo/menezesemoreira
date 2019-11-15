import React from 'react';
import './footer.css'
import { Grid, Typography } from '@material-ui/core';

class Footer extends React.Component {
    render() {
        return (
            <div className={"footer-container"}>
                <Grid container>
                    <Grid item md={2}></Grid>
                    <Grid item sm={12} md={4} className="footerItem">
                        <Typography variant="h6" color="secondary" className="itemTitle">Entre em contato com a gente</Typography>
                        <div className="itemContent mail">
                            <Typography variant="body2" color="secondary">
                                <p>Email: <a href="mailto:contato@menezesemoreira.com.br">contato@menezesemoreira.com.br</a></p>
                                <p>Celular: (31) 99224-0871 / (31) 31 98757-5631</p>
                                <p>Fixo: (31) 3372-9943</p>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={4} className="footerItem" spacing={1}>
                            <Typography variant="h6" color="secondary" className="itemTitle">Localização</Typography>
                            <div className="itemContent">
                                <Typography variant="body2" color="secondary">
                                    <p>Rua Alexandre Mathias Alves, 295, 2º andar</p>
                                    <p>Nova Cintra - Belo Horizonte/MG</p>
                                </Typography>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1902611.0150222357!2d-44.838240009831495!3d-21.349030275539445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697ee4431e7e7%3A0x9799b0a0315c995b!2sMenezes%20%26%20Moreira%20Contabilidade!5e0!3m2!1sen!2sbr!4v1573843989882!5m2!1sen!2sbr"></iframe>
                            </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Footer;