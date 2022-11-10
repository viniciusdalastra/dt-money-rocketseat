import Modal from 'react-modal';
import { FormEvent, useState, useContext } from 'react';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, TypeTransaction } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

interface newTransactionModalProps {
    onRequestClose: () => void;
    isNewTransactionModalOpen: boolean;
}

export function NewTransactionModal({ onRequestClose, isNewTransactionModalOpen }: newTransactionModalProps) {
    const {createTransaction} = useTransactions()
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        await createTransaction({title, category, amount, type})
        setTitle('')
        setCategory('')
        setAmount(0)
        setType('deposit')
        onRequestClose()
    }


    return (
        <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2> Cadastrar Transação</h2>
                <input placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)} />
                <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))} />
                <TransactionTypeContainer>
                    <TypeTransaction
                        type="button" onClick={() => { setType('deposit') }}
                        isActive={type == 'deposit'} activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </TypeTransaction>
                    <TypeTransaction
                        type="button" onClick={() => { setType('withdraw') }}
                        isActive={type == 'withdraw'} activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </TypeTransaction>
                </TransactionTypeContainer>
                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}