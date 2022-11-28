interface PlugCheckoutFullBoletoTransactionSuccess {
  id: string
  clientId: string
  createdAt: string
  amount: number
  statementDescriptor: string
  capture: boolean
  status: string
  currency: string
  description: string | null
  orderId: string | null
  paymentMethod: {
    paymentType: string
    barcodeData: string
    barcodeImageUrl: string
    expiresDate: string
  }
  paymentSource: {
    sourceType: string
    customerId: string
  }
  transactionRequests: {
    id: string
    updatedAt: string
    createdAt: string
    idempotencyKey: string
    requestId: string | null
    providerId: string
    amount: number
    authorizationCode: string
    authorizationNsu: string
    responseCode: string
    requestStatus: string
    requestType: string
    responseTs: string
  }[]
}

interface PlugCheckoutFullBoletoTransactionError {
  type: string
  message: string
  errorStack: unknown
}

interface PlugCheckoutFullCreditTransactionSuccess {
  id: string
  clientId: string
  createdAt: string
  amount: number
  statementDescriptor: string
  capture: boolean
  status: string
  paymentMethod: {
    installments: number
    paymentType: string
  }
  paymentSource: {
    sourceType: string
    cardId: string
  }
  transactionRequests: {
    id: string
    updatedAt: string
    createdAt: string
    idempotencyKey: string
    requestId: string | null
    providerId: string
    amount: number
    authorizationCode: string
    authorizationNsu: string
    responseCode: string
    requestStatus: string
    requestType: string
    responseTs: string
  }[]
}

interface PlugCheckoutFullCreditTransactionError {
  type: string
  message: string
  code?: number
  declinedCode?: string
  errorStack: unknown
}

interface PlugCheckoutFullPixTransactionSuccess {
  id: string
  clientId: string
  createdAt: string
  amount: number
  statementDescriptor: string
  capture: boolean
  status: string
  currency: string
  description: string | null
  orderId: string | null
  paymentMethod: {
    expiresIn: number
    paymentType: string
    qrCodeData: string
    qrCodeImageUrl: string
  }
  paymentSource: {
    sourceType: string
    customerId: string
  }
  transactionRequests: {
    id: string
    updatedAt: string
    createdAt: string
    idempotencyKey: string
    requestId: string | null
    providerId: string
    amount: number
    authorizationCode: string
    authorizationNsu: string
    responseCode: string
    requestStatus: string
    requestType: string
    responseTs: string
    pix: {
      expiresIn: number
      qrCodeData: string
      qrCodeImageUrl: string
    }
  }[]
}

interface PlugCheckoutFullPixTransactionError {
  type: string
  message: string
  errorStack: unknown
}

type PlugCheckoutFullTransactionSuccess =
  | PlugCheckoutFullBoletoTransactionSuccess
  | PlugCheckoutFullCreditTransactionSuccess
  | PlugCheckoutFullPixTransactionSuccess

type PlugCheckoutFullTransactionError =
  | PlugCheckoutFullBoletoTransactionError
  | PlugCheckoutFullCreditTransactionError
  | PlugCheckoutFullPixTransactionError

export type PlugCheckoutFullTransactionSuccessEvent = CustomEvent<{
  data: PlugCheckoutFullTransactionSuccess
}>

export type PlugCheckoutFullTransactionErrorEvent = CustomEvent<{
  error: PlugCheckoutFullTransactionError
}>
