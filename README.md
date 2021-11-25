# MERNHotelBooking
MERN Stack Hotel Booking App

MongoDB Express React NodeJs

Get your **free** Apple Stock when sign up & deposit to Tiger Brokers 
[ClickHere](https://www.tigerbrokers.com.sg/activity/forapp/invitflow-intl/signup.html?template=invite202011&lang=en_US&invite=E9WV2L)

Use my referral link https://crypto.com/app/gmdvtgv38s to sign up for **Crypto.com** and we both get **$25 USD** :)

## Donation

If this project helped you reduce time to develop, please consider buying me a cup of coffee :)

<a href="https://www.buymeacoffee.com/ongyishen" 
target="_blank">
<img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" 
alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## Run Server [NodeJs at server folder]

##### DB Configuration

Please edit **db.js** mongodb connection string 

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/ServerDBConfig.PNG?raw=true" />

You may import the sample collections at **mongodb_collections** folder

**mongodb screenshot**

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/SampleDB.PNG?raw=true" />

##### Stripe API Key Configuration

Please edit **bookingRoute.js** and put your stripe **private api key**

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/StripePrivateAPIKey.PNG?raw=true" />

execute following command

```bash
npm i
```

start the server

```bash
nodemon server
```

##### npm package use:

- nodemon
- mongoose
- express
- router
- moment
- stripe
- uuid



## Run Client [ReactJs at client folder]

##### Server API Configuration

Please edit the **package.js** to correct Server API URL

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/ClientServerProxy.PNG?raw=true" />

##### Stripe API Key Configuration

Please edit Bookingscreen.js and put your stripe **public api key**

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/StripePublicAPIKey.PNG?raw=true" />

execute following command

```bash
npm i
```

start the client

```bash
npm start
```

##### npm package use:

- antd
- aos
- axios
- moment
- react-bootstrap
- react-router-dom
- react-stripe-checkout
- sweetalert2

## Sample Screenshots

#### Landing Page

username: user@gmail.com

password: 123456

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/Sample.gif?raw=true" />

#### Profile

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/SampleCancel.gif?raw=true" />

#### Admin Page

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/SampleAdmin.gif?raw=true" />
