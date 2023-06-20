import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TransactionPage from './TransactionPage';
import BudgetPage from './BudgetPage';
import SummaryPage from './SummaryPage';
import ReminderPage from './ReminderPage';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="transaction" element={<TransactionPage />} />
      <Route path="budget" element={<BudgetPage />} />
      <Route path="summary" element={<SummaryPage />} />
      <Route path="reminder" element={<ReminderPage />} />
    </Routes>
  );
}

export default Routing;
