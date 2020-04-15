# Table
Build a sortable, scrollable table for a given dataset.

## Methods
### .create()
Processes user settings, builds UI elements, adds event listeners.
Called on instantiation if `autoCreate` is set to `true` (default).

## Options
### target | selector, null
A selector for the element that will contain the table when rendered.

### width | int, null
Determines the width of the table in pixels.

### height | int, null
Determines the height of the table in pixels.

### id | string, null
The ID you want to assign to the table.

### desc | array (of objects)
An array to describe the data that will be passed in the data array.

```javascript
const desc = [
  {
    name: 'First',
    type: 'string',
    sortable: true
  },
  {
    name: 'Last',
    type: 'string',
    sortable: true,
    defaultSort: true,
    defaultOrderAsc: true // ascending
    // defaultOrderAsc: false // descending
  },
  {
    name: 'Age',
    type: 'number',
    sortable: true
  }
];
```

### desc | array (of arrays)
An array of data that will be displayed in the table body.

```javascript
const data = [
  ['Tim', 'Taylor', 55],
  ['Sally', 'Shank', 35],
  ['Pat', 'Patronus', 20],
  ['Marcia', 'Mandalorian', 40],
  ['Daniel', 'Dinkworthy', 45],
  ['Tina', 'Thompson', 30]
];
```

## Usage Example
```javascript
let table = new Table({
  data: data,
  desc: desc,
  width: '750px',
  height: '100px',
  target: '#put-it-here'
});
```
