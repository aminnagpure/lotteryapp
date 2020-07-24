pragma solidity >=0.4.22 <0.7.0;

contract winlottery{
    address _owner;
    address[]  users;
    
    event won(address bidder);
    
    constructor() public {
        _owner = msg.sender;
    }
    
     modifier onlyOwner () {
        require(msg.sender == _owner);
        _;
    }
    
  function  enterlottery()public payable  {
      require(msg.value > 0.01 ether);
            users.push(msg.sender);          
    
  }
    function viewbal() public view  returns(uint256){
        return address(this).balance;
    }
    function numberofmembers()public view  returns(uint256){
       return  uint256  (users.length);
        
    }
    function declarewinner()external onlyOwner{
        winner();
    } 
    
    function winner()internal  {
        uint index = randmno() % users.length;
        address sendadr = users[index];
       address(uint160(sendadr)).transfer(address(this).balance);
       
       emit won(users[index]);
       users=new address[](0);
       
        
    }
    
    function randmno()internal view returns(uint256){
        return  uint(keccak256(abi.encodePacked(block.timestamp, msg.sender,block.number))) % 90;
    }
    
}