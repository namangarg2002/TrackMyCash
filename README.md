# TrackMyCash - Expense Tracker

![TrackMyCash Logo](https://via.placeholder.com/150) 
![Upload<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.455 102.855c0 25.177 39.647 105.629 77.265 105.629h.001c37.619 0 77.397-76.894 77.397-108.531 0-20.003-18.606-52.373-77.62-52.373-59.013 0-77.043 35.758-77.043 55.275zm50.039 5.634C86.402 93.277 77.656 77.857 77.656 77.857s14.41-7.175 23.824-9.091c.802-.163 1.62-.338 2.458-.516 8.997-1.916 20.189-4.298 36.328 1.496 33.579 12.056 47.896 34.606 47.896 34.606s-21.609-17.401-45.404-20.895c-13.707-2.013-39.203 6.152-39.203 6.152s8.862 9.38 16.075 23.114c1.137 2.165 2.245 4.147 3.306 6.045 5.668 10.137 9.974 17.838 9.974 37.93 0 14.659-11.08 36.443-11.08 36.443s6.223-28.383 1.204-50.825c-3.627-16.223-6.425-18.719-13.02-24.603-2.528-2.255-5.615-5.008-9.52-9.224z"/>
</svg>ing logo-reaper-svgrepo-com.svg…]()



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
