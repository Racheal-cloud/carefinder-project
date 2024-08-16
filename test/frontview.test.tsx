// src/app/user/__tests__/FrontView.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For additional matchers like `toBeInTheDocument`
import FrontView from '../src/app/frontview';
import { describe, it, expect } from 'vitest';
import { parse } from 'url';
import React from 'react';

describe('FrontView Component', () => {
  it('should render the image with correct src and alt attributes', () => {
    render(<FrontView />);
    
    // Find the image element by its alt text
    const imageElement = screen.getByAltText('carefinder');
    
    // Check if the image is rendered
    expect(imageElement).toBeInTheDocument();

    // Extract the src attribute
    const src = imageElement.getAttribute('src');

    // Parse the URL to check its components
    const { query } = parse(src || '', true);
    
    // Ensure the URL contains the correct image path
    expect(query.url).toBe('/images/CareAbout.jpg');

    // Check if the image has the correct alt attribute
    expect(imageElement).toHaveAttribute('alt', 'carefinder');
  });

  it('should have the correct layout styles', () => {
    render(<FrontView />);
    
    // Find the container element
    const containerElement = screen.getByRole('img'); // The Image component should have a role of img

    // Check if the container has the correct class names for layout
    expect(containerElement.parentElement).toHaveClass('relative w-full h-[600px]');
  });
});
