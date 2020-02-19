# Autocomplete
Add an interface to give options to complete entered text.

## Methods
### .create()
Processes user settings, builds UI elements, adds event listeners.
Called on instantiation if `autoCreate` is set to `true` (default).

### .show()
Display the UI elements. Triggered when minimum number of characters are entered.

### .hide()
Remove the UI elements from view. Triggered when the number of characters fall below the minimum or when one of the options displayed are selected.

## Options
### minimum | int, 2
Sets the minimum number of characters which determines if the UI is displayed or not.

### matchRequired | bool, true
If set to `false`, any text may be entered.

### input | selector, null
A selector for the input that the UI will be bound to.

### target | selector, null
A selector for the (hidden) input that the UI will set the value of.

### width | int, null
Determines the width of the UI in pixels.

### height | int, null
Determines the height of the UI in pixels.

### url | url, null
A URL that returns a filtered list that will be parsed and used to populate the selectable options.

### choices | array, null
An array that will be used to create the list of selectable options.

### autoCreate | bool, true
If true (default), create is called upon instantiation of a new Autocomplete object.

### handleSelectItem | function(selected)
A function that will be run on whichever option is selected.

### handleQueryData | function(array, query)
A function run on the data provided (via choices array or url) to put it in the proper format for use.

```javascript
[
    {
        id: '123',
        display: 'One Two Three'
    },
    { ... }
]
```

## Usage Example
```javascript
let autocomplete = new Autocomplete({
    input: '#autocomplete',
    target: '#autocompleteId',
    choices: [
        { ID: '123', DisplayName: 'Ed Link' },
        { ID: '234', DisplayName: 'Ed Jones' },
        { ID: '345', DisplayName: 'Tom Link' },
        { ID: '456', DisplayName: 'Tom Jones' }
    ],
    handleQueryData: (data, query) => data.filter(d => d.DisplayName.includes(query)).map(d => ({ id: d.ID, display: d.DisplayName })),
    handleSelectItem: (item) => alert(item.display)
});
```
