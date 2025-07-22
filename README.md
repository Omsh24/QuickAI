सर्व.AI (ServAI)

A unified AI SaaS platform built with the PERN Stack (PostgreSQL, Express, React, Node.js). Experience a single space for modern AI-powered tools including image processing, text generation, resume analysis, and much more.
🚀 Features

    All-in-One AI Workspace: Access multiple AI services (image, text, PDF, resume, etc.) from one place.

    Modern Web App: Built with React, Express, PostgreSQL, and Node.js for full-stack robustness.

    User Authentication: Secure registration, login, and profile management.

    Role-based Access: Premium and standard tiers for feature access.

    Image AI Tools: Background removal, object removal, and more via Cloudinary and custom endpoints.

    Document AI: Resume analysis and review, PDF conversion, and content extraction.

    Real-Time Dashboard: Track your requests and see results instantly.

    Responsive Design: Optimized for desktop and mobile.

🏗️ Tech Stack
Frontend	Backend	Database	Cloud & AI	Auth
React.js	Node.js	PostgreSQL	AWS, Cloudinary	Clerk.dev
TailwindCSS	Express.js	Prisma ORM	OpenAI, Other APIs	JWT/OAuth
✨ Getting Started
Prerequisites

    Node.js (v18+)

    PostgreSQL (running instance)

    Cloudinary account

    Clerk.dev account for authentication (or update to your auth provider)

Installation

    Clone the repository

bash
git clone https://github.com/Omsh24/ServAI.git
cd ServAI

Install dependencies

bash
npm install
cd client && npm install # for frontend dependencies

Set up environment variables
Copy .env.example to .env and fill in your configs (DB, API keys, Cloudinary, Clerk, etc.)

Migrate the database

bash
npx prisma migrate dev

Start the server

    bash
    npm run dev
    cd client && npm run dev # in a separate terminal for the frontend

Project Structure

text
/server     # Express API, PostgreSQL, auth and AI endpoints
/client     # React app (Vite/Tailwind)

🛠️ Key Endpoints & Usage
Endpoint	Method	Description
/api/ai/remove-image-background	POST	Remove background from images
/api/ai/remove-image-object	POST	Remove objects from images
/api/ai/review-resume	POST	Resume review and feedback
/api/ai/generate-text	POST	Generate/Analyze text

See the frontend for usage examples and UI integration.
📝 Customization

    Add or modify AI tools by expanding /api/ai/* backend routes.

    Change permissions and pricing logic in the middleware/controllers.

    Update styling or components in the React frontend as needed.

💡 Contributing

    Fork this repository.

    Create your branch: git checkout -b feature/my-feature

    Commit your changes: git commit -am 'Add new feature'

    Push to the branch: git push origin feature/my-feature

    Open a Pull Request.

📄 License

This project is open-sourced under the MIT License.
🙌 Acknowledgements

    PERN stack

    Cloudinary for image processing AI

    Clerk.dev for authentication

    OpenAI/other APIs for advanced content analysis

For questions, feature requests, or support, please open an issue or contact the maintainer through the repository.

Let your users and contributors know that "सर्व.AI" combines every essential AI product into one powerful, modern workspace!
