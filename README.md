# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a hydration mismatch bug in Next.js 15 when combining `fetch` within a `useEffect` hook, a `Link` component and a slow API response.  The issue arises because the client-side rendering using `fetch` might not complete before the server-side rendered content is hydrated, leading to inconsistencies and potential errors.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.
5. Observe the loading behavior and any potential hydration errors.

## Solution

The solution involves using a loading state to manage the asynchronous data fetching and prevent hydration mismatches. This ensures that the UI updates only after the data has been fetched successfully.  The provided solution uses React's suspense feature for improved user experience.