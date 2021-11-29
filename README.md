# TIENDA ONLINE SIMILAR A AMAZON

La idea era armar una tienda on-line similar a Amazon al inicio del proyecto, como puede apreciarse en el menú de navegación.
Luego el proyecto fue mutando y tomando su propio estilo a medida que me interiorizaba de las posibilidades con material UI y que los tiempos del curso no daban para un proyecto de tal embergadura.

Las funcionalidades que tenemos del ecommerce desarrollado son:

Página principal donde se visualizantodos los productos, con una breve descripciòn de cada uno en su card. 

Contamos con la posibilidad de fltrar los mismo por categorías, pudiendo visualizar todos los productos, solo computadoras o solo monitores, tal cual pueden apreciarse, respectivamente, en las siguientes imágenes.


![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/home_all.jpg)


![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/home_computers.jpg)


![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/home_monitors.jpg)


Seleccionado un producto podemos ver el detalle del mismo


![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/itemDetail.jpg)


Donde podemos realizar alguna de las siguientes acciones:

- Ver el detalle del mismo
- Indicar la cantidad de unidades (incrementar o disminuir la cantidad)
- Ir directamente al Carrito para consultarlo sin agregar el producto
- Agregar el producto al carrito, con lo cual lo agrega al carrito y nos lleva al carrito para ver la composiciòn actualizada del mismo. A su vez, también actualiza el contador en el CartWidget del navbar
- Volver al Home


![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/Cart01.jpg)


Si le indicamos proceder con la compra presionando el botón de CHECKOUT, nos aparece un formulario para cargar los datos del comprador y dirección de entrega


![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/cart2.jpg)


Después de completar los datos del comprador se presiona el botón de BUYER y se genera la orden de compra en Firebase, mostrando el siguiente mensaje por pantalla, en donde nos indica el Id de la Orden de Compra.


![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/ordenCompra.jpg)


Y en Firebase podemos corroborar que la misma está creada


![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/firebase.jpg)


Caso de fallar la creación de la Orden de Compra en Firebase, aparecerá un mensaje de error.

En caso de presionar el botón de vaciar el carrito o ir ala carrito sin tener ningún producto seleccionado, aparecerá un menaje de warning, tal como puede pareciarse en la siguiente imagen


![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/emptyCart.jpg)


Esto es a grandes rasgos la navegabilidad el portal de ecommerce, voy a adjuntar a esta documentación un video donde se muestra la navegabilidad completa.

# Diagrama de relaciones entre Componentes


![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/Diagrama.jpg)


De acuerdo a lo aprendido en el curso, cada componente tiene su propia funcionalidad y no existe superposición entre las competencias y responsabilidades de cada uno.

Por ejemplo, 

- ItemListContainer se encarga de toda la lógica para obtener y administrar los datos.
- ItemList se encarga de iterar los datos obtenido por el componente previo
- Item se encarga de mostrar visualmente el dato de un elemento en particular

El CartWidget es un componente que forma parte del navbar, pero su competencia es exclusivamente mostar la cantidad de elementos agregados al carrito y la posibilidad de acceder al mismo.

CustomProvider es donde tenemos definados elementos y funciones del entorno que se comparten entre varios componentes, independientemente de su ubicación y nivel en el árbol de rutas.

ItemCount es un componente que se encarga exclusivamente del selector de cantidades de productos que está incluido dentro de 

ItemDetail, que es el componente que muestra la información detallada de un producto.

Y así para cada componente que forma parte del modelo. La idea es modularizar en componentes que tengan determinada función específica, de manera tal, de permitir su reutilización dentro de la app y su utilización por otros componentes de manera transparente y unívoca.

# Video con navegación detallada
link [Video con Navegación Completa](https://drive.google.com/drive/folders/1R9ihk6yP4MX6vCdmOXbuL_rWyYP4ytCo).

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

## License

MIT

**Free Software!**

| | |
|----|----------|
|Curso | React JS 
|Camada | 16975 |
|Profesor|Horacio Gutierres Esteves|
|Alumno |Guillermo A Ballester

