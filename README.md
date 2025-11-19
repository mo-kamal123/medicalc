# Insurance Installments Calculator

A comprehensive React-based web application for calculating and managing insurance plan premiums with flexible customization options for different age groups and coverage limits.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Data Flow](#data-flow)
- [Components](#components)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Contributing](#contributing)

## 🎯 Overview

This application enables insurance providers and HR departments to:

- Calculate insurance premiums for multiple plans across different age groups
- Customize employee distributions by age
- Compare different insurance plans side-by-side
- Import/export employee data via Excel
- Generate detailed coverage summaries

## ✨ Features

### Core Functionality

- **Multi-Plan Support**: Handle up to 10 different insurance plans simultaneously
- **Age-Based Premium Calculation**: Premiums calculated for 14 distinct age groups (0-17, 18-24, ..., 80+)
- **Two Operation Modes**:
  - **Summary Mode**: View pre-calculated premium rates
  - **Custom Mode**: Input employee counts manually or via Excel upload
- **Pagination**: Navigate through multiple plans with smooth transitions
- **Real-time Updates**: Instant recalculation as you modify employee counts

### User Experience

- Responsive design optimized for desktop and mobile
- Visual plan differentiation with color-coded icons
- Intuitive table-based interface
- Excel file compatibility for bulk data entry
- Loading states and error handling

## 📁 Project Structure

```
project-root/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── layout/
│   │   ├── routes/
│   │   ├── store/
│   │   └── App.jsx
│   ├── features/
│   │   ├── auth/
│   │   ├── client/
│   │   ├── costum-packages/
│   │   ├── home/
│   │   ├── location/
│   │   ├── packages/
│   │   └── ready-packags/
│   ├── shared/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── layout/
│   │   ├── store/
│   │   ├── UI/
│   │   └── utils/
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
└── config.fignic.js
```

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/insurance-calculator.git
   cd insurance-calculator
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Required packages**

   ```bash
   npm install react react-dom react-redux @reduxjs/toolkit
   npm install react-router-dom
   npm install react-icons
   ```

4. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Access the application**
   Open [http://localhost:5173](http://localhost:5173) in your browser

## 💡 Usage

### Summary Mode

View pre-calculated premium rates for different plans:

```javascript
// Navigate to summary page
<CustomPlanSummaryByAge />
```

- Browse through available plans
- Compare premium rates across age groups
- View plan metadata (icons, colors, limits)

### Custom Mode

Input employee counts for premium calculation:

```javascript
// Navigate to custom page
<CustomCustomizeByAge />
```

1. **Manual Entry**: Click on any cell and enter employee count
2. **Excel Upload**: Import employee distribution from spreadsheet
3. **Auto-calculation**: Total premiums calculated automatically

### Excel Import Format

Your Excel file should follow this structure:

| Age Group | Plan 1 | Plan 2 | Plan 3 |
| --------- | ------ | ------ | ------ |
| 0-17      | 5      | 3      | 2      |
| 18-24     | 10     | 8      | 6      |
| 25-29     | 15     | 12     | 10     |
| ...       | ...    | ...    | ...    |

## 🔄 Data Flow

### 1. API Response Structure

```json
{
  "calculationId": 110,
  "data": [
    {
      "name": "planOne",
      "limit": "_10000",
      "premiums": {
        "_0_17": 2179.32,
        "_18_24": 2622.81,
        "_25_29": 3061.11,
        ...
      }
    },
    {
      "name": "planTwo",
      "limit": "_10000",
      "premiums": {
        "_0_17": 1837.11,
        "_18_24": 2172.57,
        ...
      }
    }
  ]
}
```

### 2. Data Transformation

The `transformApiDataToPlans` function converts API data:

```javascript
// For Summary Mode (shows premiums)
const { plans, PLAN_META } = transformApiDataToPlans(apiData, 'summary');

// For Custom Mode (initializes with zeros)
const { plans, PLAN_META } = transformApiDataToPlans(apiData, 'custom');
```

**Output Structure:**

```javascript
plans = {
  planOne: {
    _0_17: 0,    // Custom mode: 0, Summary mode: 2179.32
    _18_24: 0,
    ...
  },
  planTwo: {
    _0_17: 0,
    _18_24: 0,
    ...
  }
}

PLAN_META = {
  planOne: {
    name: "Plan 1",
    limit: "_10000",
    color: "text-yellow-400",
    icon: <FaCrown />
  },
  ...
}
```

### 3. Redux Store Updates

```javascript
// Store calculation ID
dispatch(updateClientData({ calculationId: 110 }));

// Store employee counts (custom mode)
dispatch(addEmployeesAges({
  data: [
    {
      name: "Plan 1",
      employees: {
        _0_17: 5,
        _18_24: 10,
        ...
      }
    }
  ]
}));
```

## 🧩 Components

### PlanAgeTable

The main table component that displays plans and age groups.

**Props:**

- `plans` (Object): Premium or employee count data
- `PLAN_META` (Object): Plan metadata (icons, colors, names)
- `navigation` (String): Next page route
- `type` (String): 'summary' or 'custom'

**Features:**

- Pagination for multiple plans
- Editable inputs in custom mode
- Formatted number display in summary mode
- Responsive layout

### CustomPlanSummaryByAge

Displays pre-calculated premium rates.

**Key Functions:**

- Fetches calculation data from Redux store
- Transforms API data for display
- Shows formatted premium values

### CustomCustomizeByAge

Allows manual employee count entry.

**Key Functions:**

- Initializes all age groups with zeros
- Handles manual input changes
- Supports Excel data import
- Dispatches employee data to Redux store

## 🗄️ State Management

### Redux Slices

#### 1. calculationResult

Stores API response data:

```javascript
{
  calculationId: 110,
  data: [...]
}
```

#### 2. clientData

Stores client-specific information:

```javascript
{
  calculationId: 110,
  // other client data
}
```

#### 3. employeesAges

Stores employee distribution:

```javascript
{
  data: [
    {
      name: "Plan 1",
      employees: {
        _0_17: 5,
        _18_24: 10,
        ...
      }
    }
  ]
}
```

## 🔌 API Integration

### Expected Endpoints

```javascript
// Fetch calculation data
GET /api/calculations/:id

// Submit employee distribution
POST /api/calculations
Body: {
  calculationId: 110,
  employeeData: {...}
}
```

### Response Handling

The application expects:

- Valid JSON responses
- Consistent age group naming (`_0_17`, `_18_24`, etc.)
- Plan names in camelCase (`planOne`, `planTwo`, etc.)

## 🎨 Customization

### Adding New Plans

Update the configuration in `transformApiDataToPlans`:

```javascript
const planIcons = {
  planOne: <FaCrown />,
  planTwo: <FaMedal />,
  planEleven: <FaTrophy />, // Add new plan
};

const planColors = {
  planEleven: 'text-emerald-400', // Add new color
};

const planDisplayNames = {
  planEleven: 'Premium Plan', // Add display name
};
```

### Modifying Age Groups

Update `ageGroupMappings` in `PlanAgeTable.jsx`:

```javascript
const ageGroupMappings = [
  { display: '0-17', hyphen: '0-17', underscore: '_0_17' },
  { display: '18-25', hyphen: '18-25', underscore: '_18_25' }, // Modified
  // Add or modify age groups as needed
];
```

## 🐛 Troubleshooting

### Common Issues

**Problem:** Plans are overwriting each other

- **Cause:** Using `limit` as key when multiple plans share the same limit
- **Solution:** Use `name` as the unique key

**Problem:** Custom mode shows premium values instead of zeros

- **Cause:** Not passing `type='custom'` to transform function
- **Solution:** Ensure `transformApiDataToPlans(data, 'custom')`

**Problem:** Excel import not working

- **Cause:** Age group format mismatch
- **Solution:** Verify Excel headers match `ageGroupMappings`

## 📝 Best Practices

1. **Always use plan names as keys** instead of limits
2. **Pass the `type` parameter** to transformation functions
3. **Handle loading and error states** gracefully
4. **Validate user input** before dispatching to Redux
5. **Use consistent age group formatting** across the application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React Icons for icon components
- Redux Toolkit for state management
- Tailwind CSS for styling utilities

---

**Version:** 1.0.0  
**Last Updated:** November 2025
