# React Azure Entra Integration Demo

This repository demonstrates the integration of a React application with Azure Entra ID (formerly Azure Active Directory) for authentication and authorization. The project uses modern React with TypeScript and Vite as the build tool.

## Project Overview

This application serves as a demonstration of how to implement authentication in a React application using Azure Entra ID. The project consists of two main parts:

1. A React frontend application that integrates with Azure Entra ID for authentication
2. Terraform infrastructure code for setting up the required Azure resources

## Technology Stack

### Frontend
- React: ^18.3.1
- React DOM: ^18.3.1
- TypeScript: ~5.7.2
- Vite: ^6.3.1
- MSAL Browser: ^4.11.0
- MSAL React: ^3.0.10

### Infrastructure
- Terraform for Azure resource provisioning
- Azure Entra ID (formerly Azure Active Directory)

## Important Version Compatibility Note

This project uses specific versions of React and MSAL libraries to ensure compatibility:
- React v18.3.1
- MSAL Browser v4.11.0
- MSAL React v3.0.10

Using different versions may cause compatibility issues, particularly with the MSAL libraries and React.

## Project Structure

### React Application (`/src`)
- `main.tsx`: The entry point of the application
- `App.tsx`: The main application component
- `authConfig.ts`: Configuration for Azure Entra ID authentication
- `/components`: React components including authentication-specific components
  - `AuthProvider.tsx`: Context provider for authentication state
  - `Login.tsx`: Login component
  - `LogoutBtn.tsx`: Logout button component
  - `Nav.tsx`: Navigation component

### Infrastructure (`/infra`)
- `provider.tf`: Terraform provider configuration
- `app_registration.tf`: Azure Entra ID app registration
- `app.tf`: Application configuration
- `variables.tf`: Variable definitions for the infrastructure
- `output.tf`: Output definitions
- Other Terraform files for additional resources

## Setup and Installation

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/react-aws-cognito-entra.git
   cd react-aws-cognito-entra
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure Azure Entra ID**
   - Update the `src/authConfig.ts` file with your Azure Entra ID client ID and tenant ID
   - Ensure the redirect URI matches your application URL

4. **Infrastructure Setup (optional)**
   - Navigate to the infra directory: `cd infra`
   - Authenticate with Azure CLI:
     ```
     az login
     ```
   - If you have multiple subscriptions, select the one you want to use:
     ```
     az account set --subscription "Your-Subscription-ID"
     ```
   - Initialize Terraform: `terraform init`
   - Apply the configuration: `terraform apply`

5. **Run the application**
   ```
   npm run dev
   ```

## Authentication Flow

1. User accesses the application
2. If not authenticated, the Login component is displayed
3. User clicks login and is redirected to Azure Entra ID login page
4. After successful authentication, the user is redirected back to the application
5. The application then displays authenticated content and provides logout functionality

## Development

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run lint`: Run ESLint to check code quality
- `npm run preview`: Preview the production build locally

## License

[MIT](https://choosealicense.com/licenses/mit/)
