import { test, expect } from '@playwright/test';

// Increase the timeout for all tests in this file
test.setTimeout(60000);

test.describe('Sign In page', () => {
    test('has title', async ({ page }) => {
        await page.goto('http://localhost:3000/signin');
    
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle('CareFinderProject');
  });

  test('should display sign-in form', async ({ page }) => {
    await page.goto('http://localhost:3000/signin');
    // Check if the sign-in form elements are present
    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In',  exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In with Google' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'New to CareFinder? Sign Up' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Go back to home page' })).toBeVisible();
  });

  test('should show error on invalid sign-in attempt', async ({ page }) => {
    await page.goto('http://localhost:3000/signin');
    // Fill in invalid credentials
    await page.getByPlaceholder('Email').fill('invalid@example.com');
    await page.getByPlaceholder('Password').fill('wrongpassword');

    // Click the sign-in button
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();

    // Check for error message
    await expect(page.getByText(/error/i)).toBeVisible();
  });

  test('should navigate to signup page', async ({ page }) => {
    await page.goto('http://localhost:3000/signin');

    await page.getByRole('link', { name: 'New to CareFinder? Sign Up' }).click();
    await expect(page).toHaveURL('http://localhost:3000/signup');
  });

  test('should navigate back to home page', async ({ page }) => {
    await page.goto('http://localhost:3000/signin');

    await page.getByRole('link', { name: 'Go back to home page' }).click();
  });

  test('should show forgot password message', async ({ page }) => {
    await page.goto('http://localhost:3000/signin');

    await page.getByPlaceholder('Email').fill('test@example.com');
    await page.getByRole('button', { name: 'Forgot Password?' }).click();
    await expect(page.getByText('Password reset email sent!')).toBeVisible();
  });

  // Note: Testing Google Sign-In might require mocking the authentication process
  test('should attempt Google sign-in', async ({ page }) => {
    await page.goto('http://localhost:3000/signin');

    const googleSignInPromise = page.waitForNavigation();
    await page.getByTestId('google-signin-button').click();
    await googleSignInPromise;
    // Here you might want to add assertions based on what happens after clicking the Google sign-in button
  });
});