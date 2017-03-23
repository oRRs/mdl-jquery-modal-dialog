# Material Design Light jQuery Modal Dialog
Basic modal dialogs using MDL and jQuery

## Dependencies
- [jQuery](https://jquery.com) (tested with v3.1.1)
- [Material Design Lite](http://www.getmdl.io) (tested with v1.2.1)

## Usage / Configuration

```javascript
showDialog({
    id: 'dialog-id',
    title: 'Title',
    text: 'Text',
    negative: {
        id: 'cancel-button',
        title: 'Cancel',
        onClick: function() { ... }
    },
    positive: {
        id: 'ok-button',
        title: 'OK',
        onClick: function() { ... }
    },
    cancelable: true,
    contentStyle: {'max-width': '500px'},
    onLoaded: function() { ... },
    onHidden: function() { ... }
});
```
Most parameters are optional.

## Demo
- [demo.html in the project](https://github.com/oRRs/mdl-jquery-modal-dialog/blob/master/demo.html)
- [JSFiddle (missing the Roboto font)](https://jsfiddle.net/w5cpw7yf/)

## License
© Oliver Rennies, 2015. Licensed under an [MIT](https://github.com/oRRs/mdl-jquery-modal-dialog/blob/master/LICENSE) license.