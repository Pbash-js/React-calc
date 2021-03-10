const App = () => {



  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('0');

  const keyPress = e => {
    if (output == '0') {
      setOutput(e.target.innerHTML);
    } else if (e.target.innerHTML == '.') {
      if (output.match(/\.[\d]+[\-\+\\\*]\d+/) || !output.match(/\./)) {
        setOutput(prevState => prevState + e.target.innerHTML);
      }
    } else if (/[\-\+\*\\]/.test(output[output.length - 1])) {
      if (/[\+\*\\]/.test(e.target.innerHTML)) {
        if (output[output.length - 1] == '-' && /[\-\+\*\\]/.test(output[output.length - 2])) {
          setOutput(output.replace(/[\-\+\\\*]+/, e.target.innerHTML));
        } else
        {
          setOutput((prevState) =>
          {let res = prevState.split('');
            res.pop();
            res.push(e.target.innerHTML);
            return res.join('');});

        }

      } else

      {
        setOutput(prevState => prevState + e.target.innerHTML);
      }
    } else

    {
      setOutput(prevState => prevState + e.target.innerHTML);
    }
  };

  const equals = () => {
    setOutput(eval(output) + '');
    setInput(output);

  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "calc-body" }, /*#__PURE__*/
    React.createElement("div", { id: "display-area" }, /*#__PURE__*/
    React.createElement("div", { id: "expression" }, input), /*#__PURE__*/
    React.createElement("div", { id: "display" }, output)), /*#__PURE__*/

    React.createElement("div", { id: "clear", onClick: () => {
        setInput(''),
        setOutput('0');
      }, class: "numkey" }, "AC"), /*#__PURE__*/
    React.createElement("div", { id: "add", class: "numkey", onClick: keyPress }, "+"), /*#__PURE__*/
    React.createElement("div", { id: "one", class: "numkey", onClick: keyPress }, "1"), /*#__PURE__*/
    React.createElement("div", { id: "two", class: "numkey", onClick: keyPress }, "2"), /*#__PURE__*/
    React.createElement("div", { id: "three", class: "numkey", onClick: keyPress }, "3"), /*#__PURE__*/
    React.createElement("div", { id: "subtract", class: "numkey", onClick: keyPress }, "-"), /*#__PURE__*/
    React.createElement("div", { id: "four", class: "numkey", onClick: keyPress }, "4"), /*#__PURE__*/
    React.createElement("div", { id: "five", class: "numkey", onClick: keyPress }, "5"), /*#__PURE__*/
    React.createElement("div", { id: "six", class: "numkey", onClick: keyPress }, "6"), /*#__PURE__*/
    React.createElement("div", { id: "multiply", class: "numkey", onClick: keyPress }, "*"), /*#__PURE__*/
    React.createElement("div", { id: "seven", class: "numkey", onClick: keyPress }, "7"), /*#__PURE__*/
    React.createElement("div", { id: "eight", class: "numkey", onClick: keyPress }, "8"), /*#__PURE__*/
    React.createElement("div", { id: "nine", class: "numkey", onClick: keyPress }, "9"), /*#__PURE__*/
    React.createElement("div", { id: "divide", class: "numkey", onClick: keyPress }, "/"), /*#__PURE__*/

    React.createElement("div", { id: "decimal", class: "numkey", onClick: keyPress }, "."), /*#__PURE__*/

    React.createElement("div", { id: "zero", class: "numkey", onClick: keyPress }, "0"), /*#__PURE__*/
    React.createElement("div", { id: "equals", class: "numkey", onClick: equals }, "=")));



};


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app-container"));