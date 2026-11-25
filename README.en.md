# Tarifa 3D · Price calculator for 3D printing

**A price calculator, order tracker and invoicing tool for people who sell 3D-printed parts.** It runs in the browser, needs no server or paid account, and stores your data in your own Google Drive or in a folder on your computer. It can be installed on your phone as an app.

> **Open the calculator:** https://pablocasar.github.io/tarifa3d/Presupuestos/
>
> **Español:** [README.md](README.md)

---

## Why it exists

This project was born at **ConArte3D**, a small 3D printing business in Antequera, Spain. Pricing a printed part is harder than it looks:

- The real cost is not just filament: electricity, printer wear, failed prints, post-processing and painting time, accessories (key rings, LEDs…) and packaging all count.
- Every sales channel takes a different fee (Etsy, Wallapop, Vinted, Amazon Handmade…), and VAT has to be charged correctly.
- An order often mixes several different parts sliced on the same plate to save time and filament.
- You need to remember what was quoted, what was paid, by whom and under which invoice, and never lose any of it.

The goal is **one tool** that starts from what the slicer says (grams and hours), calculates a price that leaves the profit you want, and keeps a record of every order, customer and invoice. No loose spreadsheets and no paid service.

## What it does

| Section | What it is for |
|---|---|
| **Home** | Dashboard with this month's revenue and profit, charts for the last months, orders by status, where the money goes, and **alerts** (unpaid orders, quotes with no answer, nearly empty spools, unsaved data). From here you jump to any section. |
| **Calculate** | Build an order with one or more parts and get the sale price, the breakdown and the profit. |
| **Catalogue** | Products you sell often, to add to an order in one click. Supports a reference market price. |
| **Orders** | A permanent list of all orders with their status (draft, sent, accepted, printed, paid, rejected). |
| **Customers** | A card per customer (tax data, language, notes) and their history. |
| **Spools** | Filament inventory. The real €/kg comes from what you paid, and usage is deducted when you print. |
| **Summary** | Monthly summary (billed, VAT, fees, cost, profit) and the list of invoices. Exports to Excel. |
| **Settings** | Your costs (printer, electricity, labour, materials), sales channels and fees, VAT, currency, business details and branding. |

## How the price is calculated

1. **Cost** of each part = material + electricity + printer wear + failure allowance + labour + painting/finishing + extras and accessories + design. Packaging and shipping (if passed on) are added at order level.
2. **Price** = cost × (1 + markup). The markup is a percentage **on cost** (60 % means you earn 60 % of what the part costs you).
3. The calculator **adds back** the chosen channel's fee and the VAT, so what is left after paying them is exactly the profit you aimed for.
4. Final options: volume discount, friend/customer discount, "I want to earn X", rounding up (to .90, to 1, to 5…) and a **manual final price** if you want to close the order total on a specific figure.
5. The breakdown shows the profit both as a percentage of cost and as a percentage of the sale price.

## Step by step

### 1. The first time
1. Open the calculator in **Chrome or Edge** (on a phone, Chrome or Safari).
2. Go to **Settings** and review your data: printer price and lifetime hours, power draw, electricity price, your hourly rate, materials (€/kg) and sales channels with their fees. Default fees are indicative: check them.
3. Fill in your business details (name, tax ID, address, IBAN) so they appear on quotes and invoices.

### 2. Making a quote
1. In **Calculate**, give the order a title and pick the customer (or create one).
2. Add the parts. For each one you can:
   - **Import the slicing file** (`.gcode` or `.gcode.3mf` from Bambu Studio or Orca Slicer): grams, time and number of parts are read. If you sliced several different objects on the same plate, they are split across the order's parts.
   - Or type the weight and time by hand.
3. Adjust the order's **general values** (markup, post-processing, painting, extras). If a part needs its own values, mark it as "own".
4. Add **accessories** (rings, LEDs…) from the list in Settings.
5. Choose the **sales channel** and watch the price change. The channel table shows where you earn most.
6. In **Final adjustment** you can set the profit, apply a discount or leave a **round final price**.
7. Press **Quote PDF** to print it or save it as a PDF.

### 3. Following the order
- Change the status in **Orders** as it moves along. Marking it *printed* deducts the filament from your spools; marking it *paid* freezes its figures for the summary.
- An order is **never fully deleted**: what you remove goes to the Bin.

### 4. Invoicing
From an order, **Invoice** issues a sequentially numbered invoice and stores it with a frozen snapshot of the data: if you change the order later, the invoice does not change. A cancelled invoice keeps its number.

### 5. Market research
Each part or product can store a **market price** (average, range and sources) so you can compare yours with other sellers'.

## Where your data is stored

The calculator **has no server of its own**: your data never goes through me or any third party other than the place you choose.

- **Folder on your computer** (desktop Chrome or Edge): you pick a folder and it stores `datos.json`, one file per order (`pedidos/`), one per invoice (`facturas/`) and a daily copy (`copias/`).
- **Google Drive** (also works on your phone): the same files, in a folder called *Tarifa3D - Presupuestos* in your Drive. The app can only see files it created itself, not the rest of your Drive.

In both cases **data is merged, never overwritten**: if you open the calculator on two devices, the most recent version of each order, customer or spool wins and nothing is lost. Every change is saved automatically; changes from other devices arrive within seconds.

> This page and this repository contain **only the program**. No orders, customers or prices are stored here.

## Using it on your phone as an app

1. Open the calculator's address on your phone.
2. Tap **Connect Drive** and sign in with your Google account. Google asks you to confirm the connection when you open the app and about every hour: one tap is enough.
3. **Android (Chrome):** menu ⋮ → *Add to home screen*. **iPhone (Safari):** Share → *Add to Home Screen*.

While you are not connected, whatever you do is saved on the device and uploaded when you connect.

## Language, currency and branding

- **Spanish and English:** ES/EN button in the header. Each user has their own setting. Quotes and invoices come out in the language set on the customer's card.
- **Currency:** 22 currencies in Settings. Changing it does not convert amounts: everything is read in the chosen currency.
- **Branding:** in Settings you can set your name, tagline, logo (and one for dark backgrounds) and choose between the brand style or a neutral one. It appears in the header and on documents.
- **Theme:** light, dark or automatic according to your device.

## Known limitations

- Saving to a folder on your computer only works in Chromium-based browsers (Chrome, Edge). In other browsers use Google Drive.
- Channel fees change over time; the date of the last check appears next to each one.
- Invoices contain the data you configure, but tax responsibility lies with whoever issues them: check the requirements of your country.
- This is a personal project in progress, published as is, with no warranty.

## Running your own copy

The code is a single HTML file (dependency-free JavaScript) published with GitHub Pages. To store data in your own Drive you need to create a Google OAuth client ID (web application type) with the `drive.file` scope and add your GitHub Pages origin as an authorised origin; then paste it in Settings → "Where data is saved" or in the publishing configuration. No database or server is needed.

## License

The software is released under the **MIT License** (see [LICENSE](LICENSE)): you may use, copy, modify and distribute it, including commercially, as long as you keep the copyright notice.

The name, logos and graphic identity of **ConArte3D** (the `ConArte3D/` folder) are **not** covered by that license: all rights reserved. If you publish your own copy, replace them with your own brand.
