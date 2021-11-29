# TIENDA ONLINE SIMILAR A AMAZON

La idea es armar una tienda on-line similar a Amazon al inicio del proyecto, como puede apreciarse en el menú de navegación.
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
agregar al carrito, con lo cual agrega el producto en el carrito y nos lleva al carrito para ver la composiciòn actualizada del mismo, y actualiza el contador en el CartWidget del navbar
- O volver al home

![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/Cart01.jpg)

Si le indicamos proceder con la compra presionando el botón de CHECKOUT, nos aparece un formulario para cargar los datos del comprador y dirección de entrega

![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/cart2.jpg)

Después de completar los datos del comprador se presiona el botón de BUYER y se genera la orden de compra en Firebase, mostrando el siguiente mensaje por pantalla

![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/ordenCompra.jpg)

Y en Firebase tendremos la misma creada

![alt text](https://github.com/gaballester/amazon_ballester/blob/main/doc/img/firebase.jpg)

Caso de fallar la creación de la Orden de Compra en Firebase, aparecerá un mensaje de error.

Esto es a grandes rasgos la navegabilidad el portal de ecommerce, voy a adjuntar a esta documentación un video donde se muestra la navegabilidad completa.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Aditional install Frameworks 

Install te new version of material-ui mui. The command line is:

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @mui/styles

npm install react-hook-form

npm i --save react-select

this site always use matrial-ui/core and material-ui/icons


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
