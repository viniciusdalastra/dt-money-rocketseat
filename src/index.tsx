import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model, Server } from 'miragejs';

createServer({
  models:{
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions:[
        {
          id: 1,
          type:'deposit',
          title:'Registro Inicial de Teste 01',
          category: 'Desenvolvimento TESTE',
          amount: 1000,
          createdAt: new Date('2022-02-12 09:09:00')
        },
        {
          id: 2,
          type:'withdraw',
          title:'Registro Inicial de Teste 02',
          category: 'Desenvolvimento TESTE',
          amount: 999,
          createdAt: new Date('2022-02-12 10:09:00')
        },
        {
          id: 3,
          type:'withdraw',
          title:'Registro Inicial de Teste 02',
          category: 'Desenvolvimento TESTE',
          amount: 150,
          createdAt: new Date('2022-02-12 11:09:00')
        }
      ],
    })
  },
  routes() {
    this.namespace = "api"
    
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema,request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction',data);
    })
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);