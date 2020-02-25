import React, { Component } from "react";
import testContract from "./components/testContract";


import getWeb3 from "./utils/getWeb3";

import "./App.css";





class App extends Component {
  
  state={

    web3: null, 
    accounts: null, 
    contract: null };

componentDidMount = async () => {
  try {
    // Get network provider and web3 instance.
    const web3 = await getWeb3();
    this.setState({web3 : web3});
    // Use web3 to get the user's accounts.
    const accounts = await web3.eth.getAccounts();
    this.setState({accounts : accounts});
    // Get the contract instance.
    
    // Set web3, accounts, and contract to the state, and then proceed with an
    // example of interacting with the contract's methods.
   // this.setState({ web3, accounts, contract: instance }, this.runExample);
  } catch (error) {
    // Catch any errors for any of the above operations.
    alert(
      `Failed to load web3, accounts, or contract. Check console for details.`,
    );
    console.error(error);
  }
};
  
    
  render() {
    
    return (
      <div>
      
      <testContract
      web3FromParent = {this.state.web3}
      accountsFromParent= {this.state.accounts}
      contractFromParent= {this.state.contract}/>
  
      </div>
    );
  }
}

export default App;
