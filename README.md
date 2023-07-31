I am excited to share about my latest project, Zenbazaar - a full stack application for tech gadgets such as headphones, wireless earbuds, Bluetooth speakers, and smartwatches.

Using a range of technologies such as React, React Icons, SCSS, SCSS @mixin for media query, Context API, Axios, Strapi, Stripe, and Postgres for data storage, I have built a responsive and beautifully designed application with a fully functional backend and frontend. Cloudnary was used to host all the images used in the application.

With React Router DOM, I established routes for the home page, category page to choose products category-wise, single product page to show a single product, success page, rejected page after Stripe payment, and \* router to create redirection in case of a wrong URL. The header and footer were designed to make the application look more professional, and a beautiful loading indicator was added while fetching data from the server.

On the home page, there is a banner section, followed by the category section and then all the products. I used the useEffect hook to fetch the data from our Strapi server and show it on the home screen. The application has four categories of products, and all the category data is saved on the Strapi server with images and titles, and a relation is created with all the products.

For each product,I created a special route to display details on a separate page. In the product details section, I showed related products, filtered by their category ID and ensured that the product does not match with the existing product using [$ne]. Pagination was also added to ensure that only a maximum of six products is shown in the related products section.

To make the application more efficient, I created a custom hook named useFetch, which allows us to retrieve data from the Strapi servers easily. I also created a context page and several state variables to access category data, product data, cart items, cart count, and cart sub-total data, making it easy to access the data throughout the application.

The header section includes a search functionality that filters products by title using the onChange event. The onClick event is used to navigate to the product page and its id with the help of the useParam hook and useNavigate hook. Whenever a product is added to the cart, it is shown in the header section, making it easy for the user to track their shopping cart.

The cart section allows users to add or remove products from their cart, and the sub-total is displayed at the bottom. The checkout button uses Stripe payment gateway to handle payments. It first checks with Stripe's publishable key and then loads the stripePromise using async await function. Once the payment is made, it is redirected to the successful or rejected page.

The application was deployed using Render for the backend and Netlify for the frontend, with all the necessary environment variables added. After deployment, I faced some errors, but I managed to remove them one by one, and the application is now working seamlessly.

Overall, this project has been a great learning experience for me, and I am grateful for the knowledge and confidence it has given me.

![zenbazaar netlify app_ (7)](https://user-images.githubusercontent.com/113577106/227981108-e78eba01-0926-4e3f-95ae-48f96dff20be.png)
![zenbazaar netlify app_ (1)](https://user-images.githubusercontent.com/113577106/227981184-872a0e4b-83b8-43fa-918e-6fe28470cc2c.png)
![zenbazaar netlify app_ (2)](https://user-images.githubusercontent.com/113577106/227981209-34c8c7d8-2662-4a66-9ad8-0693be5eb8d8.png)
![zenbazaar netlify app_ (5)](https://user-images.githubusercontent.com/113577106/227981641-bef1c636-3ead-4a43-a09a-d8ec67f5f2df.png)
![zenbazaar netlify app_ (6)](https://user-images.githubusercontent.com/113577106/227981652-52758211-ca0b-4920-8b0c-fdf961033a34.png)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
