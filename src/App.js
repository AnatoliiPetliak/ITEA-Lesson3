import React from "react";
import { Toggler, TogglerItem } from "./Task1_3/toggler";
import { Input } from "./Task1_3/Input";

class App extends React.Component {
  state = {
    gender: ["male", "female"],
    layout: ["left", "center", "right", "baseline"],
    genderStatus: "",
    layoutStatus: "",
    name: "",
    password: "",
    age: "",
    language: "",
  };

  changeToggler = (value) => (_) => {
    if (this.state.gender.includes(value)) {
      this.setState({ genderStatus: value });
    } else if (this.state.layout.includes(value)) {
      this.setState({ layoutStatus: value });
    }
  };

  changeHendler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(["state"], this.state);
  };

  //Func for reset values and set state to default condition?

  render = () => {
    const {
      gender,
      layout,
      genderStatus,
      layoutStatus,
      name,
      password,
      age,
      language,
    } = this.state;
    const { changeToggler, changeHendler, onSubmit } = this;

    return (
      <div className="App">
        <h1>FORM</h1>
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={changeHendler}
          />
          <br />
          <Input
            type="number"
            name="password"
            value={password}
            placeholder="Password"
            onChange={changeHendler}
          />

          <Toggler
            active={genderStatus}
            action={changeToggler}
            layout={layout}
            gender={gender}
            titleName="Sex"
            activestate="genderStatus">
            <TogglerItem value="male" />
            <TogglerItem value="female" />
          </Toggler>
          <Input
            type="number"
            name="age"
            value={age}
            placeholder="Age"
            onChange={changeHendler}
          />
          <Toggler
            active={layoutStatus}
            action={changeToggler}
            layout={layout}
            gender={gender}
            titleName="Layout"
            activestate="genderStatus">
            <TogglerItem value="left" />
            <TogglerItem value="center" />
            <TogglerItem value="right" />
            <TogglerItem value="baseline" />
          </Toggler>
          <Input
            type="text"
            name="language"
            value={language}
            placeholder="Language"
            onChange={changeHendler}
          />
          <br />
          <button>Send</button>
        </form>
      </div>
    );
  };
}
export default App;
