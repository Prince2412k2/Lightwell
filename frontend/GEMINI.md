# Project Overview

This is a Next.js application bootstrapped with `create-next-app`. It appears to be a dashboard-style application with features for viewing projects and notifications, as well as user authentication. The application uses TypeScript, Tailwind CSS for styling, and `lucide-react` for icons. State management is handled by `jotai`, and `recharts` is used for displaying charts.

## Building and Running

To get the application running locally, follow these steps:

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

    This will start the Next.js development server, and you can view the application in your browser at the address provided (usually `http://localhost:3000`).

3.  **Build for Production:**

    ```bash
    npm run build
    ```

    This command builds the application for production. The output will be in the `.next` directory.

4.  **Run in Production:**

    ```bash
    npm run start
    ```

    This command starts the application in production mode.

5.  **Lint the Code:**

    ```bash
    npm run lint
    ```

    This command runs ESLint to check for code quality and style issues.

6.  **Format the Code:**
    ```bash
    npm run format
    ```
    This command runs Prettier to format the code.

## Development Conventions

- **Styling:** The project uses Tailwind CSS for styling. Utility classes are used directly in the components.
- **State Management:** `jotai` is used for state management. The theme state is managed by a `jotai` atom in `src/features/common/store/theme_toggle.ts`.
- **Icons:** `lucide-react` is used for icons.
- **Charts:** `recharts` is used for charts.
- **Validation:** `zod` is used for validation.
- **Routing:** The application uses the Next.js App Router. Routes are defined by the directory structure in `src/app`. There is a redirect from `/` to `/home`. Authentication-related pages are grouped under the `(auth)` route group.
- **Components:** Reusable components are located in the `src/components` directory.
- **Features:** Feature-specific components and logic are located in the `src/features` directory. For example, authentication components are in `src/features/auth/components`.
- **Hooks:** Custom hooks are located in the `src/hooks` directory. The `useIsMobile` hook in `src/hooks/use-mobile.ts` is used to detect mobile devices.
