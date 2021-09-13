# Personal Budget Calculator

Personal Budget Calculator (or PBC) helps the user calculate their personal finances over the course of a month. The calculator with give the user a visual representation of their finances with balances and a chart to show how much of their income they are saving or where overspending occurs. The results will show a percentage of each outgoing element so they can identify where they can make further savings. The form can also be manipulated further to show the impact of these savings after a recalculation. The form data can also be manipulated to calculate where savings could be made and offer tips to the user.

## Contents

## User Experience (UX)

### User Stories

#### External User Goals:
* The site users want a tool to easily calculate their monthly expenditure with results that make it easy to identify where savings can be made.

#### Site Owner Goals:
* The site owner’s goal is to provide the user with an easy-to-use tool to calculate their monthly expenditure.
* The site owner’s goal is to help the user to visualise where they can make savings by providing easy to read results and allowing them to adjust the form data to see where savings can be made.
* The site owner’s goal is to use the data provided by the user to suggest areas of expenditure where savings could be made.

## Design (UXD)

### Strategy
* Is the content culturally appropriate?
    * Yes. Content is supplied by the user and the results are a manipulation of the user’s data.
* Is the content relevant?
    * Yes. All content contains information about the subject matter.
* Can we track and catalogue the content in an intuitive way?
    * Yes. All content is stored as form data and is sectioned relative to the subject matter and to aid in the completion of the form.
* Is the technology appropriate?
    * Yes. Form data is the best way to collect user input. 
* Why are we so special? What sets us apart?
    * Every effort is being made to make the user’s experience as easy as possible.
* Tech considerations?
    * The site will be fully responsive and easily usable on all types of devices. The site will be created with HTML & CSS and controlled with JavaScript.
* Why would a user want this?
    * Users want this to aid in the calculation of their finances. This can be done in several ways by the user (writing info down and using a calculator or by creating a spreadsheet) but this site takes all the legwork out of it for them.

### Scope
* What does the user want to accomplish?
    * The user wants to work out their budget for the month.
* What does the user need to do in order to achieve their objective?
    * The user needs to input their data in an easy-to-use form and click the calculate button.
* What constraints does the site or app have to conform within?
    * Limited build time. No back end to store user data for a month-on-month review.
* What dynamic constraints do we have to meet?
    * Ensure calculations are correct.

### Structure

The structure plane uses the information gathered in the strategy and scope planes to design a user-friendly layout for the site incorporating the wants and needs of the user.

* Heading (Personal Budget Planner)
* How to use (dropdown)
* Currency Selector (user input)
<details>
<summary>Income Section (user input)</summary>
 
* Wages (after tax)
* Pension
* Rent (collected from lodgers/tenants)
* Child Support Received
* Investments
* Benefits
* Add box (option to add more boxes, name them and remove them)

</details>
<details>
<summary>Finances/Debt (user input)</summary>

* Personal Loan
* Student Loan
* Credit Cards
* Store Cards
* Hire Purchase
* Catalogue
* Child Support
* Add box (option to add more boxes, name them and remove them)
</details>
<details>
<summary>Savings/Investments (user input)</summary>

* Savings Account Payments
* ISA Payments
* Child Savings/Trust Fund
* Investments
* Add box (option to add more boxes, name them and remove them)
</details>
<details>
<summary>Household Bills (user input)</summary>
 
* Mortgage/Rent
* Council Tax/Rates
* Gas
* Electricity
* Other Fule Costs (Oil, Coal, Wood)
* Water
* Add box (option to add more boxes, name them and remove them)
</details>
<details>
<summary>Insurance (user input)</summary>
 
* Home Insurance
* Contents Insurance
* Life Insurance
* Pet Insurance
* Home Appliance Insurance
* Boiler Cover Insurance
* High Value Items Insurance
* Vehicle Insurance
* Add box (option to add more boxes, name them and remove them)
</details>
<details>
<summary>Subscriptions/Direct Debits (user input)</summary>
 
* Internet
* Home Phone
* TV Subscriptions (Sky, Virgin Media, BT etc)
* Streaming Services (Netflix, Now TV, Prime Video etc)
* TV Licence
* Mobile Phone
* Gym Membership
* Website Subscriptions
* Book Club
* Add box (option to add more boxes, name them and remove them)
</details>
<details>
<summary>Transport (user input)</summary>
 
* Vehicle Tax
* MOT
* Servicing
* Fuel
* Public Transport
* Add box (option to add more boxes, name them and remove them)
</details>
<details>
<summary>Living Costs</summary>
 
* Groceries
* Clothing & Footwear
* Personal Health (medical care)
* Beauty & Grooming
* Repairs/Household Maintenance
* Cleaning Services
* Add box (option to add more boxes, name them and remove them)
</details>
<details>
<summary>Family (user input)</summary>
 
* Child Care
* Birthdays
* Christmas
* Vet Bills
* Pet Food
* Add box (option to add more boxes, name them and remove them)
</details>
<details>
<summary>Leisure (user input)</summary>

* Eating Out
* Days Out (include parking costs, admission, activity costs, food, and drink)
* Nights Out
* Household Drinking (alcohol)
* Takeaway Food
* Tobacco
* Add box (option to add more boxes, name them and remove them)
</details>

* Calculate Button/Re-calculate Button
    * Return Income
    * Return Expenditure Sum
    * Return Outcome Balance (savings = green/negative equity = red)
    * Display expenditure in a pie chart
    * Offer tips on where savings can be made (build time permitting)
* Reset Form Data Button
* Footer
    * Copyright Info
Once calculated, the user has the option to manipulate the form data and re-calculate to see where savings could be made.
Each user input box has the option to enter values per day, week, month, or year. The calculate function takes these into consideration and calculates what the value would be per month.

### Skeleton
The site will be designed to look similar on all devices and will be displayed on one page. A wireframe mock-up layout has been made using [Balsamiq](https://balsamiq.com).