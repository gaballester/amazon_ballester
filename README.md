# TIENDA ONLINE SIMILAR A AMAZON

La idea era armar una tienda on-line similar a Amazon al inicio del proyecto, como puede apreciarse en el menú de navegación.
Luego el proyeacto fue tomando su propio estilo a través de material UI

Dentro de las funcionalidades tenemos:

Página principal donde se visualizantodos los productos, con una breve descripciòn de cada uno en su card y contamos con la posibilidad de fltrar los mismo por categorías. Pudiendo visualizar todos los productos, solo monitores o solo computadoras.

![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/home_all.jpg)
![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/home_computers.jpg)
![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/home_monitors.jpg)

Seleccionado un producto podemos ver el detalle del mismo

![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/itemDetail.jpg)

Donde podemos:

- Ver el detalle del mismo
- Indicar la cantidad de unidades 
- Ir directamente al Carrito para consultarlo sin agregar el producto
- agregar al carrito, con lo cual agrega el producto en el carrito y nos lleva al carrito para ver la composiciòn actualizada del mismo, y actualiza el contador en el CartWidget del navbar
- O volver al home

![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/Cart01.jpg)

Si le indicamos proceder con la compra presionando el botón de CHECKOUT, nos aparece un formulario para cargar los datos del comprador y dirección de entrega

![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/cart2.jpg)

Después de completar los datos del comprador se presiona el botón de BUYER y se genera la orden de compra en Firebase, mostrando el siguiente mensaje por pantalla

![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/ordenCompra.jpg)

Y en Firebase tendremos la misma creada

![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/firebase.jpg)

Caso de fallar la creación de la Orden de Compra en Firebase, aparecerá un mensaje de error.

En caso de presionar el boton de vaciar el carrito o ir ala carrito sin tener ningún producto seleccionado, aparecerá un menaje de warning, tal como puede pareciarse en la siguiente imagen

![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/emptyCart.jpg)
emptyCart.jpg

Esto es a grandes rasgos la navegabilidad el portal de ecommerce, voy a adjuntar a esta documentación un video donde se muestra la navegabilidad completa.

# Este proyecto se creó usando Create React App
link [Create React App](https://github.com/facebook/create-react-app).
## Como armar entorno para usar los fuentes
 Para instalar Node.js hay que descargarse el instalador desde pagina oficial  https://nodejs.org/es/
### Instalar react y crear app
```sh
npm install -g create-react-app
create-react-app my-app
```
## Instalación de Frameworks adicionales
### Instalar material-ui mui. 
```sh
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @mui/styles
```
### Instalar react-hook-form para el formulario y validaciones
```sh
npm install react-hook-form
```
### Instalar firebase
```sh
npm install firebase@8.9.1 --save
```
> consultar en firebase como configurar la conexion a sus propios datos, 
> deberá modificar la configuración en el archivo firebase.config.js 
> para usar su propia base
### Instalar react-router-dom para manejo de rutas
```sh
npm install  react-router-dom
```
## Correr la app 
para levantar  el entorno de desarrollo se debe ejecutar el comando 
```sh
    npm start
```
que corre la app en modedesarrollo en la siguiente url 
http://localhost:3000
## Generar un Build de la app
Para generar un build de la app se debe correr el siguiente comando:
```sh
npm run build
```