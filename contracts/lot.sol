pragma solidity >=0.4.22 <0.7.0;

contract winlottery{
    address _owner;
    address[]  users;
    
    event won(address bidder);
    
    constructor() public payable{
        _owner = msg.sender;
    }
    
     
    
  function  enterlottery()public payable  {
        users.push(msg.sender);
    }
    
    function viewbal() public view  returns(uint256){
        return address(this).balance;
    }
    
    function winner()public  {
        uint index = randmno() % users.length;
        address sendadr = users[index];
       address(uint160(sendadr)).transfer(address(this).balance);
       emit won(users[index]);
        
    }
    
    function randmno()public view returns(uint256){
        return  uint(keccak256(abi.encodePacked(block.timestamp, msg.sender,block.number))) % 900;
    }
    
}