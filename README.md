In this project mainly used React+React-Router4+Redux+Redux-thunk+Immutable  

1 technology stack and Component Library  
  
Redux  
  
* Redux-thunk：Redux Middleware  
* Immutable：Ensure that the data is immutable  
* Loadable：Asynchronous loading component  
* Transition-group：Animation implementation  
* styled-components：Componentized style  
* axios： AJAX  
  
2 Architecture description  
  
┣━ build   // Package file  
┣━ public   // Package file  
>>┣━ api   //False data storage  
>>>>┣━ detail.json   //Article page data  
>>>>┣━ headerList.json   //Header popular search data  
>>>>┣━ home.json   //Home data  
>>>>┣━ homeList.json   //Home page loading more article data  
>>>>┣━ login.json   //Login data  
┣━ src //Development directory  
>>┣━ common   //Common component  
>>>>┣━ header   //Header component  
>>>>>>┣━ store   //Redux  
>>>>>>>>┣━ actionCreators.js   //action creator  
>>>>>>>>┣━ constants.js   //action.type  
>>>>>>>>┣━ index.js   //Entry document  
>>>>>>>>┣━ reducer.js   //reducer  
>>>>>>┣━ index   //UI component  
>>>>>>┣━ style   //Header style  
>>┣━ pages   // pages  
>>>>┣━ detail   // article page  
>>>>>>┣━ ...  
>>>>┣━ home   //home  
>>>>>>┣━ ...  
>>>>┣━ detail   //login  
>>>>>>┣━ ...  
>>>>┣━ detail   // write article  
>>>>>>┣━ ...  
>>┣━ statics   // statics file  
>>>>┣━ ...  
>>┣━ store   //Redux data  
>>>>┣━ ...  
>>┣━ App.js   //entry and router  
>>┣━ index.js   //js entry  
>>┣━ style.js   //style  
┣━ .gitignore   //git  
┣━ package.json  
┣━ README.md  
┣━ yarn.lock  
  
3 Achieve some functions:  
  
* Login, logout and unlogin intercept  
  
* Click to load more articles  
  
*  Get popular key word searching and changing on Header page   
  
*  Dynamic router of article page data, pass ID  
  
4 Operation of development  environment  
  
Install dependencies:  
  * npm install  
  
Run project, run it on: localhost:3000  
  * npm run start  
  * yarn start  
  
Login username and password: anything will work  