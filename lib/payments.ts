export type PaymentStatus = 'ready' | 'adapter' | 'unavailable'
export type PaymentMethod = { id: string; name: string; market: string; currencies: string[]; status: PaymentStatus; uses: string[]; note: string }

export const paymentMethods: PaymentMethod[] = [
  { id: 'mada', name: 'mada', market: 'Saudi Arabia', currencies: ['SAR'], status: 'adapter', uses: ['Subscriptions', 'Listings', 'Services'], note: 'Local debit network; merchant onboarding required.' },
  { id: 'stcpay', name: 'STC Pay', market: 'Saudi Arabia', currencies: ['SAR'], status: 'adapter', uses: ['Services', 'Deposits'], note: 'Wallet adapter ready for configured gateway.' },
  { id: 'uae-wallets', name: 'UAE wallets', market: 'United Arab Emirates', currencies: ['AED'], status: 'adapter', uses: ['Subscriptions', 'Listings'], note: 'Apple Pay, Google Pay, Samsung Pay, cards, and transfers.' },
  { id: 'knet', name: 'KNET', market: 'Kuwait', currencies: ['KWD'], status: 'adapter', uses: ['Listings', 'Deposits'], note: 'Local gateway adapter; merchant account required.' },
  { id: 'qpay', name: 'NAPS / QPay', market: 'Qatar', currencies: ['QAR'], status: 'adapter', uses: ['Services', 'Listings'], note: 'Local debit and wallet routing.' },
  { id: 'benefit', name: 'BenefitPay', market: 'Bahrain', currencies: ['BHD'], status: 'adapter', uses: ['Subscriptions', 'Services'], note: 'Local wallet adapter; activation required.' },
  { id: 'thawani', name: 'Thawani', market: 'Oman', currencies: ['OMR'], status: 'adapter', uses: ['Listings', 'Services'], note: 'Local payment gateway adapter.' },
  { id: 'stripe-dynamic', name: 'Cards + digital wallets', market: 'Global', currencies: ['USD', 'EUR', 'GBP', 'AED', 'SAR'], status: 'ready', uses: ['Subscriptions', 'Listings', 'Services', 'Deposits'], note: 'Stripe dynamically presents eligible methods by customer and market.' },
  { id: 'paypal', name: 'PayPal', market: 'Global', currencies: ['USD', 'EUR', 'GBP'], status: 'adapter', uses: ['Services', 'Subscriptions'], note: 'Provider connection and eligibility required.' },
  { id: 'bank-transfer', name: 'Bank transfer / open banking', market: 'Global', currencies: ['Local currency'], status: 'adapter', uses: ['Deposits', 'Partner projects'], note: 'Settlement and reconciliation connector required.' },
]

export const paymentUseCases = ['Subscriptions', 'Listing fees', 'Service requests', 'Deposits', 'Future marketplace payouts']

export function getPaymentMethods(market: string) {
  const normalized = market.toLowerCase()
  return paymentMethods.filter(method => method.market.toLowerCase() === 'global' || method.market.toLowerCase().includes(normalized))
}

export const checkoutProducts = {
  starter: { id: 'starter', name: 'Community', priceInCents: 0, currency: 'usd' },
  pro: { id: 'pro', name: 'Professional', priceInCents: 1900, currency: 'usd' },
  business: { id: 'business', name: 'Business', priceInCents: 7900, currency: 'usd' },
} as const
