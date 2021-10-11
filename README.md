# Personal Budget Calculator

Personal Budget Calculator (or PBC) helps the user calculate their personal finances over the course of a month. The calculator with give the user a visual representation of their finances with balances and a chart to show how much of their income they are saving or where overspending occurs. The results will show a percentage of each outgoing element so they can identify where they can make further savings. The form can also be manipulated further to show the impact of these savings after a recalculation.

![Am I Responsive image](assets/readme_images/pbc_air.png)

## Contents
* [Description](#personal-budget-calculator)
* [User Experience (UX)](#user-experience-ux)
    * [User Stories](#user-stories)
* [Design (UXD)](#design-uxd)
    * [Strategy](#strategy)
    * [Scope](#scope)
    * [Structure](#structure)
    * [Skeleton](#skeleton)
    * [Surface](#surface)


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

View wireframes [here](assets/readme_images/pbc_wireframes.pdf)

### Surface
The final design plane looks at the aesthetic of the site. The goal is to create a visually appealing site whilst maitaining readability and accessability.

#### **Colour Palette**

![Colour Palette](assets/readme_images/pbc_pp2_palette.png)

I chose this simple palette from [coolors](https://coolors.co) to highlight positive and negative equity on the site.

#### **Typography**

All fonts have been imported from [Google Fonts](https://fonts.google.com/).

The Poppins font was chosen for headings for readability purposes and the Roboto font for all other text. This was also for readability and Roboto is a recommended pairing for the Poppins font.

#### **Iconography**

Favicon ![icon](assets/images/pbc_icon.ico) created by myself as a .png file then coverted to an .ico file using [image.online-convert.com](https://image.online-convert.com/convert-to-ico).

## Features
### **Existing Features**
#### **How to use**
![How to use drop down](assets/readme_images/pbc_how_to_use.png)
At the top of the screen there is a how to use drop down giving a short description of how the calculator works.
#### **Currency drop down**
![Currency drop down](assets/readme_images/pbc_currency_drop.png)
The currency drop down allows the user to select one of 3 currencies. This places the selected currency symbol as a placeholder in each input box and prefixes the results totals.
#### **Period drop down**
![Period drop down](assets/readme_images/pbc_period_drop.png)
The period drop down allows the user to select options of daily, weekly, monthly (default), and yearly for each number input box. This means, for instance, if the user is paid weekly, the weekly option can be selected for the wages row and when the form is calculated this value will be multiplied to a monthly value.
On calculating the form, all period selectors return to monthly to allow further calculations if the user wishes to amend form data after calculation.
#### **Add more boxes**
![Add boxes](assets/readme_images/pbc_add_box.png)
The Add more boxes button allows the user to add more data rows if needed. The boxes can also be named and removed with the Remove box button if not needed.
#### **Income only output**
![Income only](assets/readme_images/pbc_income_only.png)
If only income data is issued, the form will only output total income data at the bottom of the form and wil hide the chart section.
#### **Expenditure pie chart**
![Pie chart](assets/readme_images/pbc_pie.png)
The pie chart is populated with user expenditure data and gives the user a visual representation of their monthly spend. Each section corresponds to the collapsable sections of the form. If the user feels they could adjust their spending for the month in order to save more, they can adjust data and recalculate to see the amended outcome.

#### **Collapsable sections**
Each section of the form is collapsable to keep the page tidy and not overwhelm the user with loads of form data all at once. Upon expanding the sections the form autoscrolls the section header to the top of the page to keep all form data in view.
Not all form data needs to be filled in for the form to be calculated. Any empty fields are calculated with zero value. 

### **Future Features**
#### **Money saving tips**
User data could be used to evaluate if there are any areas in which they could save money and money saving tips could be displayed on calculation. For instance, if the user enters data in a personal loan field as well as credit cards, the output could display a tip for consolidating the debts into one affordable consolidation loan.
## Testing

## Deployment

## Credits