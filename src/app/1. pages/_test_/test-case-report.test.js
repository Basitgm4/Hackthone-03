import React from 'react';
import TestCaseReport from '../components/test';

describe('Test Case Report', () => {
  it('renders correctly', () => {
    const testCases = [
      {
        id: 'TC001',
        description: 'Validate product listing page',
        expected: 'Products displayed correctly',
        actual: 'Products displayed correctly',
        status: 'Passed',
        severity: 'Low',
      },
      <test />
      // Add more test cases here
    ];

    const { container } = render(<TestCaseReport testCases={testCases} />);
    expect(container).toMatchSnapshot();
  });
});
