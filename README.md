# NEXTOPICHost

NEXTOPICHost is the backend service for the [NEXTOPIC](https://github.com/lacser/NEXTOPIC) chatbot application. It's designed to work with the NEXTOPIC frontend and handle interactions with the OpenAI API.

## Features

- Serves as a proxy between the NEXTOPIC frontend and the OpenAI API
- Handles API key management for secure OpenAI API calls
- Provides necessary endpoints for the NEXTOPIC frontend

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or later)
- npm (usually comes with Node.js)
- An OpenAI API key

## Quick Start

To set up and run NEXTOPICHost, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/lacser/NEXTOPICHost.git
   ```

2. Navigate to the project directory:
   ```
   cd NEXTOPICHost
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set your OpenAI API key as an environment variable:

   On Unix-like systems (Linux, macOS):
   ```bash
   export OPENAI_API_KEY=your_api_key_here
   ```

   On Windows (Command Prompt):
   ```
   set OPENAI_API_KEY=your_api_key_here
   ```

   On Windows (PowerShell):
   ```powershell
   $env:OPENAI_API_KEY = "your_api_key_here"
   ```

5. Start the server:
   ```
   npm start
   ```

The server should now be running on `http://localhost:3000` (or another port if configured differently).

## Usage with NEXTOPIC Frontend

To use NEXTOPICHost with the NEXTOPIC frontend:

1. Ensure NEXTOPICHost is running.
2. Configure the NEXTOPIC frontend to send requests to the NEXTOPICHost server address.
3. Start the NEXTOPIC frontend application.

For more details on setting up the frontend, please refer to the [NEXTOPIC README](https://github.com/lacser/NEXTOPIC).

## Contributing

NEXTOPICHost is a personal project created for demonstration purposes. While not actively seeking contributions, you're welcome to fork the repository and modify it for your own use or learning purposes.

If you have suggestions or find issues, feel free to open an issue in the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
