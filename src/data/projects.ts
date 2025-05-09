export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Auction Contracts",
    description: "This project aims to create a decentralized auction system using the Hardhat framework and the Solidity programming language for smart contracts. The system will include functionalities for minting NFT tokens, conducting auctions, and accepting bids.",
    technologies: ["Solidity", "Hardhat", "JavaScript", "Smart Contracts"],
    githubUrl: "https://github.com/ronylucca/auction-contracts"
  },
  {
    id: 2,
    title: "Proposal Management",
    description: "Simple Project for Managing New Users, Customers, Products, and Composing Proposals. Built with NestJS using TypeScript and Prisma",
    technologies: ["NestJS", "TypeScript", "Prisma", "Redis", "BullMQ", "Swagger"],
    githubUrl: "https://github.com/ronylucca/proposal-management"
  },
  {
    id: 3,
    title: "Go Multithreading Kafka",
    description: "A simple project using multithreading in Go, consuming Kafka and serving an API endpoint.",
    technologies: ["Go", "Kafka", "Multithreading", "Docker"],
    githubUrl: "https://github.com/ronylucca/go-multithreading-kafka"
  },
  {
    id: 4,
    title: "Auction API & Contracts",
    description: "Backend NestJS Typescript project integrating with Solidity smart contracts for auctions",
    technologies: ["NestJS", "Prisma ORM", "TypeScript", "Solidity"],
    githubUrl: "https://github.com/ronylucca/auction-api"
  },
  {
    id: 5,
    title: "NFT Dungeons Slayers",
    description: "NFT game where users connect wallet using MetaMask and mint NFT characters to fight against monsters",
    technologies: ["JavaScript", "Ethereum", "Web3", "NFTs"],
    githubUrl: "https://github.com/ronylucca/nft-dungeons-slayers",
    demoUrl: "https://nft-dungeons-slayers.vercel.app/"
  },
  {
    id: 6,
    title: "Buy Me A Coffee DApp",
    description: "A NextJS fullstack project using Hardhat and ethers for Solidity. Users can send messages and transfer funds for coffee",
    technologies: ["NextJS", "Hardhat", "Solidity", "Ethers.js"],
    githubUrl: "https://github.com/ronylucca/buymeacoffee-dapp",
    demoUrl: "https://buymeacoffee-dapp.vercel.app/"
  },
  {
    id: 7,
    title: "Solana Pay Checkout",
    description: "A point-of-sale web app that allows taking payments from customers through QR Code using Solana Pay",
    technologies: ["TypeScript", "Solana", "Web3"],
    githubUrl: "https://github.com/ronylucca/solana-pay-checkout"
  },
  {
    id: 8,
    title: "Web3 Forum Polygon",
    description: "A web3 forum on Polygon made with Hardhat, Solidity and NextJS using Chakra-UI and Wagmi",
    technologies: ["TypeScript", "Polygon", "Hardhat", "Solidity", "NextJS"],
    githubUrl: "https://github.com/ronylucca/web3-forum-polygon"
  }
]; 