# Github Blog Challenge

Welcome to the solution of the Github Blog Challenge, part of the **ReactJS** track in **Ignite** by Rocketseat. This project uses the GitHub API to create a personal blog by fetching and displaying issues from a GitHub repository.

## Introduction

This challenge involves developing an application that utilizes the GitHub API to retrieve issues from a repository, display user profile data, and render these issues as blog posts.

## Features

- **Profile Information**: Display profile picture, follower count, name, and other details from GitHub.
- **Issue Listing and Filtering**: List all issues from the repository with a summary and provide a search/filter functionality.
- **Post Page**: Show a full post (issue) with its complete content.

## Technologies Used

- React
- Vite
- TypeScript
- Axios
- react-hook-form
- react-router-dom
- react-markdown

## Layout

The layout for the application is provided in Figma. Follow the steps below to access it:

1. Create a Figma account [here](https://www.figma.com/signup).
2. Duplicate the layout [here](https://www.figma.com/community/file/1138814951106121051).

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/github-blog.git
    ```

2. Install dependencies:

    ```bash
    cd github-blog
    npm install
    ```

### Running the Application

To start the development server:

    ```bash
    npm run dev
    ```

Visit `http://localhost:3000` to see the application in action.

## API Usage

This project uses several GitHub APIs:

- **GitHub Users API**: To fetch user profile data.
  - Endpoint: `https://api.github.com/users/${username}`
- **GitHub Search API**: To search for issues in the repository.
  - Endpoint: `https://api.github.com/search/issues?q=${query}+repo:${username}/${repo}`
- **GitHub Issues API**: To fetch the details of a specific issue.
  - Endpoint: `https://api.github.com/repos/${username}/${repo}/issues/${issue_number}`

## Rate Limiting

GitHub API has a rate limit of 10 requests per minute without authentication. For more requests, set up a personal access token by following [this guide](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api#using-your-own-access-token).

## Contributing

Feel free to fork this repository, submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

Made with 💜 by Rocketseat.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, feel free to reach out via [LinkedIn](https://www.linkedin.com/in/gb1994/).
