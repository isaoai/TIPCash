<h1>TIPCash</h1>
<p>
  TIP CASH is a mobile wallet or "e-wallet" that allows user or student to pay tuition fees and other school expenses for Technological Institute of the Philippines (TIP). It is accepted in both TIP Quezon City and TIP Manila campus. It is designed to give convenience of paying school bills anywhere and anytime without the need to withdraw money. Additionally, TIPCash offers a hassle-free, secure and comes with quick email confirmation of the transactions.
</p>

## To run the application, follow these steps: 
<ol>
  <li>Open your command prompt or terminal.</li>
  <li>In the terminal, navigate to the directory path of the TIPCash folder on your local machine using the "cd" command followed by the location path.</li>
  <li>Once you've located the folder, ensure that npm is already installed. If not, type <b>"npm install"</b> in the terminal. Additionally, install the Expo CLI globally by running " <b>npm install --global expo-cli".</b></li>
  <li>Finally, choose the platform on which you want to run the application. If you prefer to run it on the web, type "npm run web" in the terminal. If you want to run it on a mobile device, type "npm run android".</li>
</ol>

## Screens:
<div style="text-align: center;">
    <img src="https://github.com/angstvra/TIPCash/assets/93997417/6394b9dd-9fd7-4b06-af82-6bcfd0ca1e51" width="200" height="450">
    <img src="https://github.com/angstvra/TIPCash/assets/93997417/1fe38edc-0a6e-46c9-900c-046a120c2620" width="200" height="450">
    <img src="https://github.com/angstvra/TIPCash/assets/93997417/1c25319a-30d0-4b76-8379-7694ff3f5a21" width="200" height="450">
    <img src="https://github.com/angstvra/TIPCash/assets/93997417/e13ac1d6-c448-4273-98a3-631cbe8271a6" width="200" height="450">
    <img src="https://github.com/angstvra/TIPCash/assets/93997417/f9700dfb-c31f-46a8-84f6-1408bad45e59" width="200" height="450">
    <img src="https://github.com/angstvra/TIPCash/assets/93997417/555c7ad1-fa68-4aed-ad01-38cdd6f1f025" width="200" height="450">
    <img src="https://github.com/angstvra/TIPCash/assets/93997417/332e656f-a067-45ea-8937-cbdf4338d24d" width="200" height="450">
    <img src="https://github.com/angstvra/TIPCash/assets/93997417/acbbf86e-d20d-44da-be9a-95f6c4592167" width="200" height="450">
</div>


## Issues
<ul>
  <li>The login page lacks a proper backend, allowing access to the home page without entering account data.</li>
  <li>Balance data is not being saved due to the absence of a database to store the balance information.</li>
  <li>The "add balance" and "withdraw" functionalities are not working correctly. When adding balance, the current balance returns null if the user doesn't specify an amount. When withdrawing, the current balance returns a negative number. Additionally, the implemented conditional check for withdrawing an amount greater than the balance is not functioning as intended.</li>
  <li>The "report problem" feature lacks functionality.</li>
</ul>

## Goals: 
<ul>
  <li>Implement a database to store user account information.</li>
  <li>Connect balance data to the database, associating it with specific user accounts.</li>
  <li>Implement checks to prevent adding a null amount and to prevent users from withdrawing more than their balance.</li>
  <li>Enhance the "report problem" feature to notify the admin whenever a user submits an issue within the app.</li>
</ul>

