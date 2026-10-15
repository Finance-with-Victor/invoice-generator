# Receipt Generator

A single-page tool for writing up a customer receipt and printing it.

- Fill in the business name, address, phone, till number, date and customer.
- Add line items with a quantity and a unit price in Ksh. Line totals update as you type.
  Press **Calculate Total** to set the receipt total, and type the amount in words yourself.
- Optional notes appear at the bottom of the receipt.
- **Preview Receipt** shows the finished receipt with the logo in `public/logo.png`.
  **Print or save as PDF** opens the browser print dialog (via `react-to-print`).
- Nothing is stored. The form lives in page state and resets on reload.

`/preview` renders a hard-coded sample receipt from `src/lib/data.ts`.

Live: https://invoice-generator-utility.netlify.app (deployed from `main`).

## Develop

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build
```

Next.js 14 (App Router), Tailwind, shadcn/ui components.
