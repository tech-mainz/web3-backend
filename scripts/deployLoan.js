const hre = require("hardhat");

async function main() {
  const LoanContract = await hre.ethers.getContractFactory("LoanContract");
  const loanContract = await LoanContract.deploy();

  await loanContract.deployed();

  console.log(`LoanContract deployed to ${loanContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});