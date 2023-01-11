interface MalgaCheckoutFullBoletoTransactionSuccess {
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

interface MalgaCheckoutFullBoletoTransactionError {
  type: string
  message: string
  errorStack: unknown
}

interface MalgaCheckoutFullCreditTransactionSuccess {
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

interface MalgaCheckoutFullCreditTransactionError {
  type: string
  message: string
  code?: number
  declinedCode?: string
  errorStack: unknown
}

interface MalgaCheckoutFullPixTransactionSuccess {
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

interface MalgaCheckoutFullPixTransactionError {
  type: string
  message: string
  errorStack: unknown
}

type MalgaCheckoutFullTransactionSuccess =
  | MalgaCheckoutFullBoletoTransactionSuccess
  | MalgaCheckoutFullCreditTransactionSuccess
  | MalgaCheckoutFullPixTransactionSuccess

type MalgaCheckoutFullTransactionError =
  | MalgaCheckoutFullBoletoTransactionError
  | MalgaCheckoutFullCreditTransactionError
  | MalgaCheckoutFullPixTransactionError

export type MalgaCheckoutFullTransactionSuccessEvent = CustomEvent<{
  data: MalgaCheckoutFullTransactionSuccess
}>

export type MalgaCheckoutFullTransactionErrorEvent = CustomEvent<{
  error: MalgaCheckoutFullTransactionError
}>
