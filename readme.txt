open terminal

npx create-react-app amazon-clone 

in my case its not installing like this so i run this command in powershell windows in this folder


firebase setup start --------------------------------------------------------------->

on net search firebase.com 
it will give us database and also host our app on this 
today we are using it for hosting
go to console 
create project
write amazon-challenge
continue 
continue
i have selected the analytics location as india
click on empty tags icon
write name   amazon-challenge
tick the hosting box below it
register app
no need to this step and click next

open other terminal
 npm install -g firebase-tools
// they have putted sudo to grant access for global but in my this it run directly so not used sudo and terminal directory is amazon
// in windows mostly sudo is not  needed use only when not working
coninue to console by skipping that login commands 

in console go to menu 3 lines at left upper corner
setting 
project setting 
scroll and see code in config and get this code 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPcgu4Vq0mqpDYTfnZNXGQd4zA_ymaeUE",
  authDomain: "challenge-c2f36.firebaseapp.com",
  projectId: "challenge-c2f36",
  storageBucket: "challenge-c2f36.appspot.com",
  messagingSenderId: "1005703594087",
  appId: "1:1005703594087:web:d7cb2fccfd6bd505c394c2",
  measurementId: "G-257KHLM0GZ"
};

in src folder make a new file as firebase.js
and paste this code in this file






firebase part ends -------------------------------------------------------------------------------------------------------------------->>>>


clone part start --------------------------------------------------------->>>>>>>>>>>

if to change directory write cd amazon-clone
but i have built using powershell so i m already in that folder
so i made a different folder and put all the content in that
but for this first terminal directory is amazon-clone

npm start

now we will start making header file ===================================>

delete app.test.js ,logo.svg,setuptests.js 

gives error 

go in app.js

remove all things inside the div

inside div write

install extension :emojisense
now install it as per thapa technical by editing its setting.json file in extension
:rocket  will give u rocket sign if u want

and delete the import logo command present there

delete everything from app.css

inside index.css we will give universal margin:0

inside app.js
rename App to app in classname

this type of naming is called BEM CONVENTION  a good way of giving names


create file Header.js 
capital h as its component 

i used previously used es7 snippets

we are using rfce function
in my function header so i changed it to Header to make like file name

and make a css file for it and import

so we made the header and apply css on it


to make goof ui we are using 
MATERIAL-ui

it will help us to get all the icons

 npm install @material-ui/core
 // i have used --force after core in above command to install it forcefully
 // but when i made a new folder and replace this clone the above command ran without force
this command will install the material ui 


material ui--------------------------------->
search icons
npm install @material-ui/icons
// in this also i used force
search the full list of icons

click on icon we get a code for that
now put this code in the header.js file and use it easily


<SearchIcon className='header_searchIcon'/>

put icons like this 


header------------->
things not visible so style it again 


create home.js file to start making the body of the clone -------------<

i got the current image for background by inspect real amazon

to make product we are making a separate file called as product.js

 i used small and stroong tags as per text size 

 &#8377; i used this in html to get the rupees symbol


 now use the product.js in home.js file

 to use multiple objects in products we used props or objects in product.js file and passed them dunamically from home.js file
 so no need to use hard coded values
 now it will be different for each product

 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 nice method to show stars according to the rating

 we created an array of rating

 fill will fill the array as per start and end and map will return the modified values of array
 in map _ is also used as a value 

now we use router of react app to render multiple pages quickly
 npm i react-router-dom
 // in this i also used force to install it make it coporate with other things

 normal current installing command of router is 
 
 npm i -D react-router-dom

 i have used latest version of router so syntax changed


now wrap all things of app.js in router tag


now we will create the checkout page ================>


i made checkout.js file 

now we design it


we put links in amazon sign and other things

so used link tag to put image as a link in that tag

by using property to="/"

this will take us to the home page
similarly we use it for our cart logo

now we again make checkout components

so we made a Subtotal.js to make it dynamic

here we used 
npm i react-currency-format

in amazon-clone directory


as my all versions are mismatching so i also used here --force after the command

it will help in rendering money


import CurrencyFormat from 'react-currency-format'


used this in Subtotal.js file

i have copied the snippeet for currency

we just copied the snippet and now we have modified it according to our choice

after subtotal we used


REACT CONTEXT API / Redux   they are different things but quite use similar patterns


help in functionality of adding and removing itens fron the cart

so we used the state provider

so made StateProvider.js

so we copied the state provider snippet and then modified it easily

so components and get props and subscribe to context changes



here we import many things and pass them in react as props using the tag provider

export will export that thing to react and used as props by provider

stateprovider will provide these things to the other components

and statecontext.provider will subscribe the context to any type of changes
use and create context will pass the props from parent to child
usereducer will help in separate the state management from the rendering logic of the component it accepts arguments and returns an array of that items

================== very important above part ======>

initial state tell us how data will look at the trting and reducer will tell us how we want to manipulate that data

STATE TELL US THE SITUATION OF THE OBJECT AND ARE PRESERVED BY THE REACT 



so now in index.js file wwe need to wrap our components
and wrapped inside of stateprovider 

so now everycomponent can acess to the data layer

now we create that reducer.js

and import it in index.js file


==========Reducer=============>

it tell us how we want to dispatch this data in the action layer

so when we click on add to cart like button how the data is pushed inside the data layer and then how it pulled inside the cart

it is taking state of the object and action that is to be performed on it

action like adding and removing from the basket

action.type tell us which type of action it is

it will return whatever the state origin it was

but we want to change the basket what it currently was and the action.items mean whatever wwe want to add in the basket

now we will export the reducer


in product.js

now we connect add to basket to the data layer


now when we click on button


so it is a function
in which we will pass all the props values



==================================>



now we want to dynamically update the numbers before cart


so now we are using header component

we use basket length instead of hard coded value
so it will update dynamically

to get subtotal dynamically so we will make a selector in reducer.js file 

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SELECTORS ARE VERY HIGLY USED IN PRODUCTION

so we made it in reducer.js file

we used the reduce function 

we made a function and call it in value of subtotal.js 

for more info see that file



checkout page left part================>

here we will dynamicALLY ADD PRODUCT


so we made CheckoutProduct.js

to take things we used useStateValue hook to make things easy

now we use css 

now we make delete function working using a function to delete the items from the cart

so made this function inside CheckoutProduct.js

and we dispatch the type and listen it in reducer.js file
=============================>

findIndex function will find the index of that item and then returns index otherwise return -1


now we made the login page +++++++++++++++++++++>



route it in the app.js file

first we made frontend and then we build the login page

wrap inside the link in header 


GLOBAL HEADER IS GIVING ISSUE AS PER LOGIN PAGE SO WE PUT HEADER ONLY IN THE ROUTING PAGES WHERE IT IS ACTUALLYT NEEDED


we made the login.js  file and its css file

we made and design this so now i have added some focus feature to get the input fields glowing by my own 

now we add function to track the iput tags

in most of my codei have used usestatehook==========>

now we have terget for email and password after taking its value and listening to the events 

now for signin and create a account we need to link 2 functions to the buttons


after making functions we used firebase =================>

firebase setup for signin and login ===================>







user authentication==================================================================================================================




go to firebase.com

go to authentication

go to signin method (inside get started option)

go to email and password

enable it (disable the passwordless option)

save


open the second terminal of our vs code

cd-amazon
cd amazon-clone

npm i firebase
(keep in mind that i have already instaled and setted it globally in the starting of the project)

due to version mismatch its not working prperly so like previously i used --force at the end of the command


now go in firebase.js 


add before config

 //import firebase from 'firebase'  but it will not work as firebase is updated so use these instead


 import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



we are use using useHistory feature of react 
so need to import it in login.js file

but ============>


 useHistory is updated as useNavigate

so everytime we make a account we are redirected to the home page


now similarly we will make it for the signiIn option



now we will try to keep the track of the person that are signing in so go inside the app.js

so we will create a listener that will always keep a track of people signing in

so we will use the useEffect

instead of writing import statement again for the useEffect i have imported it inside  the with the react in the first line of the code
also import auth


























