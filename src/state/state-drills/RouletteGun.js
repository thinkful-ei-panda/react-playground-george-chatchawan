import React from "react"


class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false
    };
  }

  componentDidMount() {
    

  }

  render() {
    return (
      <div>
        <p>{this.props.bulletInChamber}</p>
        <button>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
