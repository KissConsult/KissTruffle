pragma solidity ^0.5.0;

import "../client/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

contract Token is ERC20Mintable {
        string public name;
        string public  symbol;
        uint8 public  decimals;
    constructor(
        string  memory _name,
        string  memory _symbol,
        uint8   _decimals
    )public ERC20Mintable(){
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
    }
    
}
