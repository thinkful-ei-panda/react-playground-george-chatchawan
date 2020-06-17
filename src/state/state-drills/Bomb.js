import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, bombMessage: 'Tik'};
  }

  componentDidMount() {
    let interval = setInterval(() => {

      if (this.state.count <= 6) {

        if (this.state.count % 2 === 0) {

            this.setState({bombMessage: 'Tok'}) 

        } else {

            this.setState({bombMessage: 'Tik'})

        }

      } else {

        this.setState({bombMessage: 'BOOM!!!'})
        clearInterval(interval)
        console.log(interval)

      }

      this.setState({

        count: this.state.count + 1,

      });

    }, 1000);

  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <p>{this.state.bombMessage}</p>
      </div>
    );
  }
}

export default Bomb;
