# AlphaVerifyGraph
# The Graph Integration for Your Ethereum-Based Application

This repository contains the code for integrating our Ethereum-based application with The Graph network. The provided code snippet defines the GraphQL schema for the entities related to our application, such as `Certificate`, `CertificationApproved`, and `CertificateMinted`.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Key Components](#key-components)
5. [Deployment](#deployment)
6. [Testing](#testing)
7. [License](#license)

## Project Overview

The Graph integration in this repository aims to enable efficient and real-time querying of our Ethereum-based application's data.
## Getting Started

1. Install the required dependencies:
   - Install Node.js (version 12.18.3 or later)
   - Install Yarn (version 1.22.4 or later)
   - Install Docker (version 19.03.12 or later)
   - Install the Graph CLI (`graph-cli`) by running `yarn global add @graphprotocol/graph-cli`

2. Clone this repository:
   - Run `git clone https://github.com/Akpahsamuel/AlphaVerifyGraph
3. Navigate to the project directory:
   - Run `cd your-repository-name`

4. Install project dependencies:
   - Run `yarn`

5. Configure the project:
   - Update the `subgraph.yaml` file with your Ethereum network configuration, such as the network name, contract addresses, and event handlers.
   - Update the `schema.graphql` file with your GraphQL schema definition.

6. Generate the TypeScript code:
   - Run `yarn codegen`

7. Build the project:
   - Run `yarn build`

## Project Structure

The project structure is as follows:

```
your-repository-name/
├── abis/
│   └── YourContract.json
├── docker-compose.yml
├── package.json
├── schema.graphql
├── src/
│   └── mappings/
│       └── yourMappingHandler.ts
├── subgraph.yaml
├── tests/
│   └── yourTestFile.ts
├── tsconfig.json
└── yarn.lock
```

## Key Components

1. `subgraph.yaml`: This file defines the subgraph, including the data sources, mappings, and schema.
2. `schema.graphql`: This file defines the GraphQL schema for the entities related to our application.
3. `src/mappings/yourMappingHandler.ts`: This file contains the mapping handlers, which are responsible for transforming events emitted by your smart contracts into the corresponding entities in the graph.
4. `abis/YourContract.json`: This file contains the ABI (Application Binary Interface) of your smart contract, which defines the function signatures and data types used by the contract.

## Deployment

1. Create a new The Graph project:
   - Log in to the [The Graph Explorer](https://thegraph.com/explorer/) and create a new project.
   - Copy the project's subgraph deployment key.

2. Configure the project:
   - Update the `subgraph.yaml` file with your The Graph project's subgraph name and deployment key.
   - Update the `subgraph.yaml` file with your Ethereum network configuration, such as the network name, contract addresses, and event handlers.

3. Deploy the subgraph:
   - Run `yarn deploy`

## Testing

1. Start a local instance of The Graph network:
   - Run `yarn create-local`

2. Deploy the subgraph to the local network:
   - Run `yarn deploy --network local`

3. Run the test suite:
   - Run `yarn test`

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

