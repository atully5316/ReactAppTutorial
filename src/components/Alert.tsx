import { ReactNode } from "react"; //using react library for ReactNode

interface Props {
  //ReactNode allows for extra html to be written inside the children string without causing errors
  children: ReactNode;
  onClose: () => void; //This function will close the alert
}

const Alert = ({ children, onClose }: Props) => {
  return (
    //Specific string in className found in bootstrap, primary controls color and dismissible makes it go away
    //Must have div to treat component as its own section
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close" //specifically for closing
        onClick={onClose} //passes the closing function through the onClick attribute of the button
        data-bs-dismiss="alert" //More syntax from bootstrap
        aria-label="Close" //More syntax from bootstrap
      ></button>
    </div>
  );
};

export default Alert;
