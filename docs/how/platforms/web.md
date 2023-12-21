# Set up a web environment

## Install Vite

Follow the [getting started](https://vitejs.dev/guide/) instuctions for Vite React. For example,

```bash
pnpm create vite webapp --template react-swc-ts
```

## Change the server

Add the following to vite.config.js located at the top of the webapp folder.

```js
export default defineConfig({
  ...
  server: {
    host: 'localhost',
    port: 3000
  }
  ...
});
```

## Install Fast and Fast React Wrapper

```bash
pnpm add -D @microsoft/fast-foundation @microsoft/fast-element @microsoft/fast-react-wrapper
```

## Setup testing

* ### Install Playwright

Follow the installation steps for [Playwright](https://playwright.dev/docs/intro). For example,

```bash
pnpm create playwright
```

* ### Write your first test

Let's write a simple test that follows our [e2e test systax](/docs/what/e2e.md) .

```js
import { test, expect } from '@playwright/test';

test.describe('Visuals', () => {

  test('Heading reads "Login"', async ({ page }) => {
    await page.goto('/');
    // Expect a title "to contain" a substring.
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  });
});
```

* Pass the test

In `./webapp/src/App.tsx`:

```js
function App(){
    return(
        <>
            <h1>Login</h1>
        </>
    )
}
```