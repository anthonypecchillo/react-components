// ----------------------------------------
// Creating and rendering a React component
// ----------------------------------------

// This is a GroceryList represented in JSX
// var GroceryList =  () => (
//   <ul>
//     <li>Eggs</li>
//     <li>Milk</li>
//     <li>Coffee</li>
//     <li>Half and Half</li>
//   </ul>
// );

// ReactDOM.render( <GroceryList />, document.getElementById('app') );


// ----------------------------------------------
// Creating and rendering nested React components
// ----------------------------------------------

// var GroceryList = () => (
//   <ul>
//     <Eggs />
//     <Milk />
//     <Coffee />
//     <Half_and_Half />
//   </ul>
// );

// var Eggs = () => (
//   <li>Eggs</li>
// );

// var Milk = () => (
//   <li>Milk</li>
// );
// var Coffee = () => (
//   <li>Coffee</li>
// );
// var Half_and_Half = () => (
//   <li>Half and Half</li>
// );

// ReactDOM.render( <GroceryList />, document.getElementById('app'));


// ----------------------------------------------
// Component Properties aka "props"
// ----------------------------------------------

// var groceryListItems = ['Milk', 'Eggs', 'Coffee', 'Half and Half'];

// var  GroceryList = (props) => (
//   <ul>
//     <li>{props.groceryListItems[0]}</li>
//     <li>{props.groceryListItems[1]}</li>
//     <li>{props.groceryListItems[2]}</li>
//     <li>{props.groceryListItems[3]}</li>
//   </ul>
// );

// ReactDOM.render( <GroceryList groceryListItems={groceryListItems} />, document.getElementById('app'));


// ---------------------------------------------
// Handling User Events
// ---------------------------------------------

// var groceryListItems = ['Milk', 'Eggs', 'Coffee', 'Half and Half'];

// var onListItemClick = (event) => {
//   console.log('I got clicked!');
// }

// var  GroceryList = (props) => (
//   <div>
//     <h2>My Grocery List:</h2>
//     <ul>
//       <li onClick={onListItemClick}>{props.groceryListItems[0]}</li>
//       <li onClick={onListItemClick}>{props.groceryListItems[1]}</li>
//       <li onClick={onListItemClick}>{props.groceryListItems[2]}</li>
//       <li onClick={onListItemClick}>{props.groceryListItems[3]}</li>
//     </ul>
//   </div>
// );

// ReactDOM.render( <GroceryList groceryListItems={groceryListItems} />, document.getElementById('app'));


// ---------------------------------------------
// Making applications interactive with state
// ---------------------------------------------

var groceryListItems = ['Milk', 'Eggs', 'Coffee', 'Half and Half'];

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.groceryListItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryListItems.map(groceryListItem => 
      <GroceryListItem groceryListItem={groceryListItem}/> 
    )}
  </ul>
);

ReactDOM.render( <GroceryList groceryListItems={groceryListItems} />, document.getElementById('app'));








// var GroceryListItem = () => (
//   <li>{groceryListItem[i]}</li>
// );

// {for (var i = 0; i < groceryListItems.length; i++) {
//       (<GroceryListItem />)
//     } }