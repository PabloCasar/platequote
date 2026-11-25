# Tarifa 3D · Calculadora de precios para impresión 3D

**Calculadora de precios, pedidos y facturas para quien vende piezas impresas en 3D.** Funciona en el navegador, sin servidor ni cuenta de pago, y guarda los datos en tu propio Google Drive o en una carpeta de tu ordenador. Se puede instalar en el móvil como una app.

> **Abrir la calculadora:** https://pablocasar.github.io/tarifa3d/Presupuestos/
>
> *English summary at the bottom of this page.*

---

## Por qué existe

Este proyecto nace en **ConArte3D**, un pequeño negocio de impresión 3D en Antequera. Cuando se vende una pieza impresa, ponerle precio es más difícil de lo que parece:

- El coste real no es solo el filamento: también cuentan la luz, el desgaste de la impresora, los fallos, el tiempo de postprocesado y pintura, los accesorios (anillas, LEDs…) y el embalaje.
- Cada canal de venta se queda una comisión distinta (Etsy, Wallapop, Vinted, Amazon Handmade…), y el IVA hay que repercutirlo bien.
- Un pedido suele mezclar varias piezas distintas laminadas en la misma placa para ahorrar tiempo y filamento.
- Hay que acordarse de qué se presupuestó, qué se cobró, a quién y con qué factura, y no perder nada.

La idea es **una sola herramienta** que parta de lo que dice el laminador (gramos y horas), calcule un precio que deje el beneficio que tú quieres, y deje constancia de cada pedido, cliente y factura. Sin hojas de cálculo sueltas y sin depender de un servicio de pago.

## Qué hace

| Sección | Para qué sirve |
|---|---|
| **Inicio** | Panel con lo facturado y el beneficio del mes, gráficas de los últimos meses, pedidos por estado, a dónde va el dinero y **avisos** (pedidos sin cobrar, presupuestos sin respuesta, bobinas casi vacías, datos sin guardar). Desde aquí vas a cualquier sección. |
| **Calcular** | Prepara un pedido con una o varias piezas y obtiene el precio de venta, el desglose y el beneficio. |
| **Catálogo** | Productos que vendes a menudo, para añadirlos a un pedido en un clic. Admite un precio de mercado de referencia. |
| **Pedidos** | Lista permanente de todos los pedidos con su estado (borrador, enviado, aceptado, impreso, cobrado, rechazado). |
| **Clientes** | Ficha de cada cliente (datos fiscales, idioma, notas) y su historial. |
| **Bobinas** | Inventario de filamento. El €/kg real sale de lo que pagaste y el gasto se descuenta al imprimir. |
| **Resumen** | Resumen mensual (facturado, IVA, comisiones, coste, beneficio) y listado de facturas. Se exporta a Excel. |
| **Tarifas** | Tus costes (impresora, luz, mano de obra, materiales), canales de venta y comisiones, IVA, moneda, datos del negocio y marca. |

## Cómo se calcula el precio

1. **Coste** de cada pieza = material + luz + desgaste de la impresora + margen para fallos + mano de obra + pintura/acabado + extras y accesorios + diseño. Al pedido se le suman el embalaje y el envío si se repercute.
2. **Precio** = coste × (1 + margen). El margen es un porcentaje **sobre el coste** (un 60 % significa que ganas el 60 % de lo que te cuesta).
3. La calculadora **suma hacia atrás** la comisión del canal elegido y el IVA, para que lo que te queda después de pagarlos sea exactamente el beneficio buscado.
4. Opciones finales: descuento por cantidad, descuento a un amigo o cliente, «quiero ganar X €», redondeo al alza (a 0,90, a 1 €, a 5 €…) y **precio final manual** si quieres cerrar el total del pedido en una cifra concreta.
5. En el desglose ves el beneficio como porcentaje sobre el coste y como porcentaje del precio de venta.

## Uso paso a paso

### 1. La primera vez
1. Abre la dirección de la calculadora en **Chrome o Edge** (en el móvil, Chrome o Safari).
2. Ve a **Tarifas** y revisa tus datos: precio de la impresora y horas de vida, consumo, precio de la luz, tu precio por hora de trabajo, materiales (€/kg) y los canales de venta con sus comisiones. Las comisiones por defecto son orientativas: compruébalas.
3. Rellena los datos del negocio (nombre, NIF, dirección, IBAN) para que salgan en presupuestos y facturas.

### 2. Hacer un presupuesto
1. En **Calcular**, ponle un título al pedido y elige el cliente (o crea uno).
2. Añade las piezas. Para cada una puedes:
   - **Importar el laminado** (`.gcode` o `.gcode.3mf` de Bambu Studio u Orca Slicer): se leen gramos, tiempo y número de piezas. Si laminaste varios objetos distintos en la misma placa, se reparten entre las piezas del pedido.
   - O escribir a mano el peso y el tiempo.
3. Ajusta los **valores generales** del pedido (margen, postprocesado, pintura, extras). Si una pieza necesita valores propios, márcala como «propia».
4. Añade **accesorios** (anillas, LEDs…) desde la lista de Tarifas.
5. Elige el **canal de venta** y mira cómo cambia el precio. La tabla de canales te dice dónde ganas más.
6. En **Ajuste final del pedido** puedes fijar el beneficio, aplicar un descuento o dejar un **precio final** redondo.
7. Pulsa **Presupuesto PDF** para imprimirlo o guardarlo como PDF.

### 3. Seguir el pedido
- Cambia el estado en **Pedidos** a medida que avanza. Al marcarlo como *impreso* se descuenta el filamento de las bobinas; al marcarlo como *cobrado* se congelan sus cifras para el resumen.
- Un pedido **nunca se borra del todo**: lo que quitas va a la Papelera.

### 4. Facturar
Desde un pedido, **Factura** emite una factura con numeración correlativa y la guarda con una foto fija de los datos: si luego cambias el pedido, la factura no cambia. Una factura anulada conserva su número.

### 5. Estudio de mercado
Puedes guardar en cada pieza o producto un **precio de mercado** (media, rango y fuentes) para comparar el tuyo con el de otros vendedores.

## Dónde se guardan tus datos

La calculadora **no tiene servidor propio**: tus datos nunca pasan por mí ni por ningún tercero salvo el sitio que elijas.

- **Carpeta del ordenador** (Chrome o Edge de escritorio): eliges una carpeta y se guardan ahí `datos.json`, un archivo por pedido (`pedidos/`), uno por factura (`facturas/`) y una copia diaria (`copias/`).
- **Google Drive** (sirve también en el móvil): los mismos archivos, en una carpeta llamada *Tarifa3D - Presupuestos* de tu Drive. La app solo puede ver los archivos que ella misma crea, no el resto de tu Drive.

En los dos casos, **los datos se combinan, nunca se sustituyen**: si abres la calculadora en dos dispositivos, gana la versión más reciente de cada pedido, cliente o bobina, y no se pierde nada. Cada cambio se guarda solo; los de otros dispositivos llegan en unos segundos.

> Esta página y este repositorio contienen **solo el programa**. Ni pedidos, ni clientes, ni precios están aquí.

## Usarla en el móvil como una app

1. Abre la dirección de la calculadora en el móvil.
2. Pulsa **Conectar Drive** e inicia sesión con tu cuenta de Google. Google pide confirmar la conexión al abrir y cada hora más o menos: basta un toque.
3. **Android (Chrome):** menú ⋮ → *Añadir a pantalla de inicio*. **iPhone (Safari):** Compartir → *Añadir a pantalla de inicio*.

Mientras no estés conectado, lo que hagas se guarda en el dispositivo y se sube al conectar.

## Idioma, moneda y marca

- **Español e inglés:** botón ES/EN en la cabecera. Cada usuario tiene el suyo. Los presupuestos y facturas salen en el idioma de la ficha del cliente.
- **Moneda:** 22 divisas en Tarifas. Cambiarla no convierte los importes: todo se entiende en la moneda elegida.
- **Marca:** en Tarifas puedes poner tu nombre, lema, logotipo (también uno para fondo oscuro) y elegir entre el estilo de marca o uno neutro. Aparece en la cabecera y en los documentos.
- **Tema:** claro, oscuro o automático según tu dispositivo.

## Limitaciones conocidas

- El guardado en carpeta del ordenador solo funciona en navegadores basados en Chromium (Chrome, Edge). En otros navegadores usa Google Drive.
- Las comisiones de los canales cambian con el tiempo; la fecha de la última comprobación aparece junto a cada una.
- Las facturas incluyen los datos que tú configures, pero la responsabilidad fiscal es de quien las emite: revisa los requisitos de tu país.
- Es un proyecto personal en evolución, publicado tal cual, sin garantías.

## Para quien quiera montar su propia copia

El código es un único archivo HTML (JavaScript sin dependencias), que se publica con GitHub Pages. Para guardar en tu propio Drive hace falta crear un ID de cliente de Google (OAuth, tipo aplicación web) con el permiso `drive.file` y poner tu origen de GitHub Pages como origen autorizado; después, pegarlo en Tarifas → «Dónde se guarda» o en la configuración de publicación. No se necesita ninguna base de datos ni servidor.

---

## English summary

**Tarifa 3D** is a browser-based price calculator, order tracker and invoicing tool for people who sell 3D-printed parts. It was built for a small 3D printing business (ConArte3D) that needed to price pieces properly.

- **Pricing:** cost = material + electricity + printer wear + failure allowance + labour + finishing + extras/accessories + design; price = cost × (1 + markup), with the sales channel's fees and VAT added backwards so the profit you want is what is left. Volume and friend discounts, rounding and a manual final price are supported.
- **Slicer import:** reads `.gcode` and `.gcode.3mf` files (grams, time and objects), including several different objects on one plate.
- **Orders, customers, invoices:** permanent order list, customer cards, sequentially numbered invoices and quotes as PDF, in the customer's language.
- **Inventory:** filament spools with real €/kg and automatic deduction.
- **Dashboard:** monthly revenue and profit charts, orders by status, where the money goes, and alerts.
- **Your data stays yours:** it is stored in a folder on your computer or in your own Google Drive (the app only sees the files it creates). Nothing is sent to any other server. Data is merged, never overwritten, so several devices can be used safely.
- **Phone:** installable as an app (PWA). English and Spanish UI, 22 currencies, custom branding, light/dark themes.

Open it at https://pablocasar.github.io/tarifa3d/Presupuestos/ — this repository contains only the program, never any business data.
