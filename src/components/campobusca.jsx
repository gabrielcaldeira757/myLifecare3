import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class CampoBusca extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this. handleChange = this.handleChange.bind(this)
      
    this.state = {     
      inputplace: '',
    };
  }
  
  handleClick(){
    this.setState({inputplace: this.state.inputplace})
  }

  handleChange(value){
    this.setState({inputplace: this.value})
    
  }
  
  render() {
     
    console.log(this.state.inputplace);

      return (
        <div className="CampoBusca">
          <input 
            //type='text' 
            value={this.state.inputplace}
            onChange={ this.handleChange(value) }
          />
          <Button   
            bsStyle="primary"
            //onClick={() => this.props.pegaCep( this.state.inputplace )} 
            onClick={this.handleClick}
          >Busca Cep</Button>
        </div>
      );
  }
}

export default CampoBusca;
