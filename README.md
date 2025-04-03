# TrackMyCash - Expense Tracker

![TrackMyCash Logo]



![logo-reaper-svgrepo-com](https://github.com/user-attachments/assets/fa0cc9af-bdbb-4a55-b1c2-494e194e04ce)

## Live Demo

🔗 [https://trackmycash-expense-tracker.netlify.app/](https://trackmycash-expense-tracker.netlify.app/)

## Features

### Core Functionality
- 💰 **Transaction Management**: Add, edit, delete, and view all transactions
- 📊 **Dashboard Overview**: View current balance, total income, and total expenses
- 📈 **Visual Analytics**: Interactive charts showing financial data
- 📅 **Monthly Reports**: Filter transactions by month and view detailed reports
- 🔄 **Data Reset**: Clear all transaction data with one click
- 💡 **Inspirational Quotes**: Get motivational quotes about finance and life

### Transaction Features
- ✏️ **Edit Transactions**: Modify existing transactions
- 🗑️ **Delete Transactions**: Remove unwanted entries
- 📝 **Detailed View**: See all transaction details in a clean table format
- 🗓️ **Date Filtering**: View transactions by specific months

### Visualization
- 📊 **Bar Charts**: Compare income vs expenses
- 🥧 **Pie Charts**: View expense distribution by category
- 📉 **Category Analysis**: Understand spending patterns

## Technologies Used

### Frontend
- **Framework**: React.js
- **State Management**: React Hooks
- **Routing**: React Router
- **Charting**: Chart.js
- **Icons**: React Icons
- **Styling**: CSS

### Hosting
- **Platform**: Netlify

## Components Structure

### Main Components
1. **App.js**: Root component with routing configuration
2. **Navbar.jsx**: Navigation bar with logo, links, and utility buttons
3. **Dashboard.jsx**: Main dashboard with financial overview
4. **Transaction.jsx**: Transaction management view
5. **AddTransaction.jsx**: Form for adding/editing transactions
6. **Report.jsx**: Financial reports and analytics
7. **NotFound.jsx**: 404 error page

### Sub-Components
1. **TransactionCards.jsx**: Displays balance, income, and expense totals
2. **RecentTransactions.jsx**: Shows last 10 transactions
3. **NoTransactions.jsx**: Placeholder when no transactions exist

## Installation

```bash
git clone https://github.com/your-username/TrackMyCash.git
cd TrackMyCash
npm install
npm start

```



## Usage Guide

### Adding Transactions:
1. Navigate to Dashboard or Transaction page
2. Click "+ Add Transaction" button
3. Fill in the transaction details
4. Click "Add Transaction" to save

### Editing Transactions:
1. Go to the Transaction page
2. Click "Edit" button on the transaction
3. Make changes in the form
4. Click "Update Transaction" to save

### Viewing Reports:
1. Navigate to the Report page
2. Select a month from the dropdown
3. View financial charts and breakdowns

## API Used
**Quotes API**: `https://quotes-api-self.vercel.app/quote`

## Future Enhancements
- [ ] User authentication system
- [ ] Cloud synchronization
- [ ] Budget tracking
- [ ] Export/Import data
- [ ] Dark mode
- [ ] Recurring transactions

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

Developed with ❤️ by Naman Garg
