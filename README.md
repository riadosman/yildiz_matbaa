# Project Name

This project was a proposal for the company Yıldız matbaa to help increase its sales better showcase its business on Google 
and enable customers to order its products through the website

![App Screenshot](screenshots/main-screenshot.png)

## Table of Contents

- [Screenshots](#screenshots)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [Contact](#contact)

## Screenshots

### Home Page

![Home Page](screenshots/home-page.png)

## Features

- Feature 1: Basic website For Print shop (Yıldız matbaa)

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (version 16.0 or higher)
- npm (version 8.0 or higher) or yarn (version 1.22 or higher)

### Steps

1. Clone the repository

   ```bash
   git clone https://github.com/riadosman/yildiz_matbaa.git
   ```

2. Navigate to the project directory

   ```bash
   cd yildiz_matbaa
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the development server

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Usage

### Development

Start the development server:

```bash
npm start
# or
yarn start
```

The app will open in development mode at [http://localhost:3000](http://localhost:3000).

### Production Build

Create a production build:

```bash
npm run build

```

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Categorys/
│   ├── Footer/
│   ├── Products/
│   └── Header/
├── pages/
|
├── assets/             # Images, fonts, etc.
├── App.js              # Main App component
└── index.js            # Entry point
```

## Configuration

### Package.json Scripts

Custom scripts you can add to your `package.json`:

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint src/",
    "format": "prettier --write src/"
  }
}
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Testing

```bash
# Run tests
npm test
# or
yarn test

# Run tests with coverage
npm test -- --coverage
```

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Create React App](https://create-react-app.dev/) - React toolchain
- [React Router](https://reactrouter.com/) - For routing (if used)

## Contact

Riad osman - riyados973@gmail.com

Project Link: [https://github.com/riadosman/yildiz_matbaa](https://github.com/riadosman/yildiz_matbaa)
