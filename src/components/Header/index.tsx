import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransacionModal: () =>void
}

export function Header(props: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={props.onOpenNewTransacionModal}>
                    Nova Transação
                </button>
                
            </Content>
        </Container>
    )
}