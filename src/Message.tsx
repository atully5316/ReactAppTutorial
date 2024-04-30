//this file is not being used, it was created as an example in the beginning

//Message displays either a default message or a message with a name
function Message() {
  //JavaScript XML (JSX)
  const name = "";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;
