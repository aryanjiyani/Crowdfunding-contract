const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const seconds = 10368000;
  const deadline = currentTimestampInSeconds + seconds;

  const target = hre.ethers.utils.parseEther("1");

  const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");
  const crowdfunding = await Crowdfunding.deploy(target, deadline);

  await crowdfunding.deployed();

  console.log(
    `Crowdfunding with the target of gathering 1 ETH in the deadline of timestamp ${deadline} deployed to ${crowdfunding.address}`
  );                                                                                 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});