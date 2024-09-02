# Hirrd - Full-Stack Job Portal App

Hirrd is a full-stack job portal application that allows users to post jobs as recruiters, apply to jobs as candidates, and track the status of applications. The app features user authentication via Google and custom email/password through Clerk, making it easy and secure for users to sign in and interact with the platform.

<img src="https://github.com/user-attachments/assets/85875034-e9a9-414d-92c9-f06ea34515f3" alt="Hirrd Screenshot" width="600"/>


## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Authentication**: Secure sign-in using Google and custom email/password via Clerk.
- **Job Posting**: Recruiters can post job listings, including job title, description, location, company, and requirements.
- **Job Application**: Candidates can search for jobs, apply to them, and track the status of their applications.
- **Wishlist Jobs**: Save jobs to a wishlist for future reference.
- **Application Tracking**: Keep track of all your job applications in one place.

## Tech Stack

- **Frontend**: ReactJS, Shad CN UI
- **Backend**: Supabase
- **Authentication**: Clerk
- **Deployment**: Vercel

## Installation

To get started with Hirrd locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ImAtharva4907/Hirrd.git
    cd Hirrd
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up the environment variables**: Create a `.env.local` file in the root of your project and add the following environment variables:

    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    ```

    Replace the placeholders with the actual keys from your Supabase and Clerk accounts.

4. **Run the development server**:
    ```bash
    npm run dev
    ```

    Your app should now be running on `http://localhost:5173`.

## Usage

- **Finding Jobs**: After logging in, navigate to the job listings, search for jobs based on location, company, or keyword, and apply to the ones that interest you.
- **Posting Jobs**: If you're a recruiter, you can post jobs by providing the necessary details such as job title, description, location, and requirements.
- **Tracking Applications**: Both candidates and recruiters can track the status of job applications directly from their dashboard.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
