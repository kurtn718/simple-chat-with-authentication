# Simple Chat App with Authentication

This is a simple base chat app that uses Clerk for sign-in/sign-up and a free OpenRouter model (currently free as of 12/20/2024)

To run the app you need to signup for account on [clerk.com](https://clerk.com) and [openrouter.ai](https://openrouter.ai) 

You also need to get API keys and store them somewhere safe, and then add them to a .env.local file


- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `OPENAI_API_KEY`

Also add the following entries:

- `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/chat`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/chat`

Then finally to run locally execute these commands:

npm install  
npm run dev

You should be able to navigate to http://localhost:3000 to get to the main page



