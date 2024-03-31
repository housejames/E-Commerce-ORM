# E-Commerce ORM

This project is an e-commerce application that uses an Object-Relational Mapping (ORM) framework to interact with a PostgreSQL database. It provides APIs for managing categories, products, and tags.

## Features

- Create, read, update, and delete categories
- Create, read, update, and delete products
- Create, read, update, and delete tags
- Associate products with categories and tags
- Retrieve products with associated category and tag data

## Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- Other dependencies (list them here)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/housejames/E-Commerce-ORM
```

2. Install dependencies:

```bash
cd E-Commerce-ORM
npm install
```

3. Set up environment variables:
   - Create a `.env` file based on the provided `.env.example` file.
   - Fill in the necessary environment variables, such as database credentials.

4. Run the application:

```bash
npm start
```

## Usage

- Access the API endpoints using a tool like Insomnia or Postman.
- Use the following routes:
  - `/api/categories`: Manage categories
  - `/api/products`: Manage products
  - `/api/tags`: Manage tags

## API Endpoints

- **GET** `/api/categories`: Get all categories
- **GET** `/api/categories/:id`: Get a single category by ID
- **POST** `/api/categories`: Create a new category
- **PUT** `/api/categories/:id`: Update a category by ID
- **DELETE** `/api/categories/:id`: Delete a category by ID

- **GET** `/api/products`: Get all products
- **GET** `/api/products/:id`: Get a single product by ID
- **POST** `/api/products`: Create a new product
- **PUT** `/api/products/:id`: Update a product by ID
- **DELETE** `/api/products/:id`: Delete a product by ID

- **GET** `/api/tags`: Get all tags
- **GET** `/api/tags/:id`: Get a single tag by ID
- **POST** `/api/tags`: Create a new tag
- **PUT** `/api/tags/:id`: Update a tag by ID
- **DELETE** `/api/tags/:id`: Delete a tag by ID

