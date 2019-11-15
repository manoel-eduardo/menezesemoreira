import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card, Container} from "@material-ui/core";
import './details.css';
import Contabilidade from './contabilidade/contabilidade';
import EscritaFiscal from './escrita-fiscal/escrita-fiscal';
import Folha from './folha/folha';
import RegularizacaoEmpresarial from './regularizacao-empresarial/regularizacao-empresarial';
import PessoaFisica from './pessoa-fisica/pessoa-fisica';

class Details extends React.Component {
    render() {
        return (
            <Container>
                <div className={'Details-CardContainer'}>
                    <Card>
                        Contabilidade.
                    </Card>
                </div>
                <div className={'Details-CardContainer'}>
                    <Card>
                        Escrita Fiscal
                    </Card>
                </div>
                <div className={'Details-CardContainer'}>
                    <Card>
                        Folha
                    </Card>
                </div>
                <div className={'Details-CardContainer'}>
                    <Card>
                        Regularização Empresa
                    </Card>
                </div>
                <div className={'Details-CardContainer'}>
                    <Card>
                        Pessoa Física
                    </Card>
                </div>
                <Contabilidade />
                <EscritaFiscal />
                <Folha />
                <PessoaFisica />
                <RegularizacaoEmpresarial />
            </Container>
        );
    }
}

export default Details;