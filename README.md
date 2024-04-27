# Appointment Scheduler Web Application

This is a web application for scheduling appointments. Users can select a date and time for their appointment, view available time slots, and submit their appointment details. The application also includes a navigation bar for easy access to different sections.
<br><br>
![Scheduler](./src/image/Scheduler.png)

## Features
- <strong>Date Selection</strong>: Users can select a date for their appointment using a date picker. 
![select-date](./src/image/select-date.png) 
- <strong>Time Slot Selection</strong>: Time slots are dynamically generated based on the selected date, allowing users to choose their preferred appointment time. 
    - Before selecting: <br>
    ![before](./src/image/before.png)
    - For weekdays: <br>
    ![weekday](./src/image/weekday.png)
    - For weekends: <br>
    ![weekend](./src/image/weekend.png)
    - For current day, it will only show the time slots after current local time. <br>
    ![after-current-localtime1](./src/image/after-current-localtime1.png) <br>
    ![after-current-localtime2](./src/image/after-current-localtime2.png) 
- <strong>Form Validation</strong>: The application validates user input to ensure that all required fields are filled and terms are agreed upon before submission.
- <strong>Navigation Bar</strong>: A navigation bar provides access to different sections of the application, including information about the clinic, locations, doctors, and patient resources.
    - Main menu: <br>
    ![menu](./src/image/menu.png) 
    - Submenu: <br>
    ![submenu](./src/image/submenu.png)

## Getting Started
To run the application locally, follow these steps:
1. Clone this repository to your local machine.
2. Open the index.html file in a web browser.
3. Select a date for your appointment and choose a time slot.
4. Fill in the required information in the appointment form.
5. Click the "Submit" button to schedule your appointment.

## Technologies Used
- HTML5
- CSS3
- JavaScript
