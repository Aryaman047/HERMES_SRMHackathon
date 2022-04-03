//https://eth-ropsten.alchemyapi.io/v2/s8BgkyMkoLiM4fxnoyBn_SAHSkGTeG0D

require('@nomiclabs/hardhat-waffle')

module.exports =
{
  solidity: '0.8.0',
  networks :
  {
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/s8BgkyMkoLiM4fxnoyBn_SAHSkGTeG0D',
      accounts:['3178392e611a1c86e118aef007f15a5b71aa8bf91ac067b5a610360b9ef3068d']
    }
  }
}