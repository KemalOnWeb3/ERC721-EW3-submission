const { ethers } = require("hardhat");

async function main() {
  const nftContract = await ethers.getContractFactory("AwesomeNFT");
  const deployedNFTContract = await nftContract.deploy();
  await deployedNFTContract.deployed();
  console.log("The address of the NFT Contract:", deployedNFTContract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });