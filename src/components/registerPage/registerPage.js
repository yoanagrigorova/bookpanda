import React, {Component} from 'react';

class registerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          error: '',
        };

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        const name = event.target.name;
        this.setState({
          [name]: event.target.value,
          error: ''
        });
      }


      render() {
          return(
              <div> dssfds </div>
          )
      }
}

export default registerPage