> Sponsor : [Trade Shifu](https://tradeshifu.net)  - Free Trading Journal Platform

# Bootstrap Advanced Toast by Rajendra
![img](https://i.imgur.com/QylYusC.png)
[Toast Examples](https://tonraj.github.io/bootstrap-4-advanced-toast/)
## Installation
Add the css and js file into the HTML file located as below.
```bash
css : /css/bs4Toast.css
js : /js/bs4-toast.js
```

## Usage

```javascript
bs4Toast.show( 'Toast Header', 'Toast Content', options);
bs4Toast.show('Toast with Button', 'This is toast with buttons example.', 
  {
    delay : 2000,
    headerClasses : [],
    bodyClasses : [],
    buttons: [
    {
      text : 'Button 1',
      class : 'btn btn-success btn-sm mr-2',
      callback : () => {
        alert('Button 1 clicked');
      }
    },
    {
      text : 'Button 2',
      class : 'btn btn-primary btn-sm',
      callback : () => {
        alert('Button 2 clicked');
      }
    }
    ],  
    icon : {
      type : 'fontawesome', // image or fontawesome
      src : 'https://via.placeholder.com/150', // src for image
      class : 'fa-bell' // class for image
    }

  }
```
## Methods
* show : **bs4Toast.show( 'Toast Header', 'Toast Content', options);**
* primary : **bs4Toast.primary( 'Toast Header', 'Toast Content', options);**
* error : **bs4Toast.error( 'Toast Header', 'Toast Content', options);**
* warning : **bs4Toast.warning( 'Toast Header', 'Toast Content', options);**

options object should follow the key and value.
Params Key | DataType
------------ | -------------
delay | Default : 2 secs, Fade out in Milli Seconds in int
headerClasses | Array, if you want to add some custom classes in header DOM.
bodyClasses | Array, if you want to add some custom classes in body DOM.
buttons | Array Object, each object should have text, class and callback method.
icon | Object, inside object thier should **typ**e with value **image** or **fontawesone**, if type is image then image url should be given in **src** key and for fontawesome **class** should be given.

