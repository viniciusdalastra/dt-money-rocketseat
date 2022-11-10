import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/newTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import Modal from 'react-modal';
import { useState } from 'react';


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransacionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal onRequestClose={handleCloseNewTransactionModal} isNewTransactionModalOpen={isNewTransactionModalOpen} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}