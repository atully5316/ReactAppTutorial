interface Props {
  children: string; //message within the tags of the button --> <Button>insert children string</Button>
  color?: "primary" | "secondary" | "danger"; //optional color entry, can only choose from listed options
  onClick: () => void; //Only performs an action, does not return, used for button click event
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  //insert interface in function parameter and list attributes
  return (
    //button takes the color parameter and uses it (specific syntax found in bootstrap) to change button color
    //button also takes onClick function and passes it to the buttons built it onClick attribute
    //button tag does not need to be wrapped in div tag since a button is its own element
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
