// src/app/test/Offer.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For additional matchers like `toBeInTheDocument`
import Offer from '../src/app/offer';
import { describe, it, expect } from 'vitest';;

// d
describe('Offer Component', () => {
    const sections = [
      { title: 'Sign Up', description: 'Create an account to unlock full features.' },
      { title: 'Click More', description: 'Quickly click more and start exploring.' },
      { title: 'Share', description: 'Easily share hospital information with friends and family.' },
      { title: 'Markdown Support', description: 'Use markdown to format your notes and documents.' },
      { title: 'Export Information', description: 'Export hospital details for offline use or sharing with others.' },
      { title: 'Search', description: 'Search for preferred hospital name, address or contact within your location.' },
    ];
  
    it('should render the main title', () => {
      // ...
    });
  
    it('should render all sections with correct titles and descriptions', () => {
      // ...
    });
  
    it('should render the correct number of sections', () => {
      render(<Offer />);
      
      // Check that the number of VStack components rendered matches the number of sections
      const sectionElements = screen.getAllByText((content, element) =>
        element?.tagName.toLowerCase() === 'p' &&
        sections.some((section) => section.description === content)
      );
      
      expect(sectionElements.length).toBe(6);
    });
  });