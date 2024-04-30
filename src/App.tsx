import { useState } from "react"; //Using react library to update state of alert visibility
import Alert from "./components/Alert"; //calling alert component
import Button from "./components/Button"; //calling button component
import ListGroup from "./components/ListGroup";

function App() {
  //alertVisible is the actual state of the alert's visibility
  //setAlertVisibility is the function which updates the state
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "Paris", "Athens", "Warsaw"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {alertVisible && ( //syntax allows alertVisible to change the visibility of the Alert
        <Alert onClose={() => setAlertVisibility(false)}>Alert!</Alert> //onClose hides alert
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      <ListGroup items={items} heading="List" onSelectItem={handleSelectItem} />
    </div> //onClick opens Alert
  );
}

export default App;
