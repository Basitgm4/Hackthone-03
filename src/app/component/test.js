import React from 'react';

const TestCaseReport = ({ testCases }) => {
  return (
    <div>
      <h1>Test Case Report</h1>
      <table>
        <thead>
          <tr>
            <th>Test Case ID</th>
            <th>Test Case Description</th>
            <th>Expected Result</th>
            <th>Actual Result</th>
            <th>Status</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {testCases.map((testCase) => (
            <tr key={testCase.id}>
              <td>{testCase.id}</td>
              <td>{testCase.description}</td>
              <td>{testCase.expected}</td>
              <td>{testCase.actual}</td>
              <td>{testCase.status}</td>
              <td>{testCase.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestCaseReport;

