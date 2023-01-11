import MalgaCheckoutFull from '@malga-checkout-full/react'

import {
  MalgaCheckoutFullTransactionErrorEvent,
  MalgaCheckoutFullTransactionSuccessEvent,
} from './App.types'

function App() {
  function handlePaymentSuccess(
    data: MalgaCheckoutFullTransactionSuccessEvent,
  ) {
    console.log(data)
  }

  function handlePaymentFailed(error: MalgaCheckoutFullTransactionErrorEvent) {
    console.log(error)
  }

  return (
    <MalgaCheckoutFull
      sandbox
      publicKey="<YOUR_PUBLIC_KEY>"
      clientId="<YOUR_CLIENT_ID>"
      merchantId="<YOUR_MERCHANT_ID>"
      paymentMethods={{
        pix: {
          expiresIn: 3600,
        },
        credit: {
          installments: {
            quantity: 12,
            show: true,
          },
          checkedSaveCard: false,
          showCreditCard: true,
        },
        boleto: {
          expiresDate: '2022-12-31',
          instructions: 'Instruções para pagamento do boleto',
          interest: {
            days: 1,
            amount: 100,
          },
          fine: {
            days: 2,
            amount: 200,
          },
        },
      }}
      transactionConfig={{
        statementDescriptor: '#1 Demonstration Malga Checkout',
        amount: 100,
        description: '',
        orderId: '',
        currency: 'BRL',
        capture: false,
      }}
      dialogConfig={{
        show: true,
        actionButtonLabel: 'Continuar',
        errorActionButtonLabel: 'Tentar novamente',
        successActionButtonLabel: 'Continuar',
        successRedirectUrl: 'https://www.malga.io/',
      }}
      pageConfig={{
        footerDescription: 'Todos os direitos reservados © 2023 Malga.',
        backRoute: 'https://www.malga.io/',
        delivery: 0,
        products: [
          {
            name: 'Produto 1',
            quantity: 2,
            amount: 50,
            description: 'Descrição do produto 1',
            sku: '123',
            risk: 'Low',
          },
          {
            name: 'Produto 2',
            quantity: 2,
            amount: 40,
            description: 'Descrição do produto 2',
            sku: '124',
            risk: 'Low',
          },
        ],
      }}
      onTransactionSuccess={handlePaymentSuccess}
      onTransactionFailed={handlePaymentFailed}
    />
  )
}

export default App
