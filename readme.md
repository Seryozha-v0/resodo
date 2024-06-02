# Resodo

## Instructions

### _Installation and Running_

If you want to run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Seryozha-v0/resodo.git .

   ```

1. Navigate to the project directory:

   ```bash
   cd <folder_name>

   ```

1. Install dependencies:

   ```bash
   npm install

   ```

1. Run the project in development mode:

   ```bash
   npm run dev
   ```

### _Bulding the project_

- To build the project for deployment, execute the following command:
  ```bash
  npm build
  ```

## Project structure

```
├── dist/                  # Folder with the build
├── src/                   # Source code of the project
│   ├── fonts/             # Fonts
│   ├── img/               # Images and icons
│   ├── js/                # JavaScript files
│   ├── pages/             # Website pages
│   ├── scss/              # Project styles
│   │   ├── base/          # Base styles, including  styles for responsiveness
│   │   ├── components/    # Styles for reusable components
│   │   ├── sections/      # Styles for sections on pages
│   │   └── main.scss      # Import of all styles
│   └── index.js           # Entry point of the JavaScript code
├── .appveyor.yml          # AppVeyor configuration
├── .babelrc               # Babel configuration
├── .browserslistrc        # Browserslist configuration
├── .eslintignore          # ESLint ignore configuration
├── .eslont.json           # ESLint configuration
├── .gitignore             # Git ignore configuration
├── package.json           # npm configuration file
├── webpack.common.js      # Common project configuration file
├── webpack.dev.js         # Configuration file for development mode
└── webpack.prod.js        # Configuration file for project build
```
