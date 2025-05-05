# Smart Parking Management System

## Overview

This project implements an automated parking management system using a Raspberry Pi 3, IR sensors, and vehicle number plate recognition. The system aims to reduce the need for manual labor in parking lots, provide efficient parking management, and improve the overall parking experience.

## Features

* **Automated Vehicle Identification:** Uses vehicle number plate recognition to identify vehicles entering and exiting the parking lot.
   
* **Real-time Parking Slot Availability:** Web application shows free parking slots.
   
* **Automated Bill Generation:** Calculates parking fees based on entry and exit times.
   
* **User-Friendly Interface:** Provides a web application for users to view parking availability and manage their parking sessions.
   
* **Hardware Efficiency:** Employs IR sensors for accurate vehicle detection and a Raspberry Pi 3 for processing and control. [cite: 590, 591, 592, 593, 594, 673, 674]

## System Design

The system operates in the following phases:

1.  **Image Acquisition:** Captures the image of the vehicle. [cite: 596, 597, 598, 599, 600, 601]
   
2.  **Image Processing:**
   
    * Converts the image to gray-scale. [cite: 596, 597, 598, 599, 600, 601]
    * Removes noise from the image. [cite: 596, 597, 598, 599, 600, 601]
    * Segments characters from the license plate. [cite: 596, 597, 598, 599, 600, 601]
    * Recognizes the characters. [cite: 596, 597, 598, 599, 600, 601]
3.  **Data Storage:** Stores the license plate number and entry time in the database. [cite: 596, 597, 598, 599, 600, 601]
   
4.  **Bill Generation:** Calculates and generates the parking bill upon exit. [cite: 596, 597, 598, 599, 600, 601]

## Hardware Requirements

* Raspberry Pi 3
   
* IR Sensors
   
* Vehicle Number Plate Camera
   
* Buzzer
   
* RFID reader [cite: 673]

## Software Requirements

* PHP
   
* HTML
   
* Python
   
* Wi-Fi, Internet [cite: 673]

## Setup Instructions

1.  **Hardware Setup:**
   
    * Connect the IR sensors and camera to the Raspberry Pi. [cite: 673, 674]
    * Set up the RFID reader and buzzer as required. [cite: 673]
2.  **Software Installation:**
   
    * Install the necessary libraries and dependencies on the Raspberry Pi.
    * Configure the web application (PHP, HTML) to run on a web server.
    * Set up the database to store vehicle information.
3.  **Configuration:**
   
    * Calibrate the IR sensors and camera for accurate detection.
    * Configure the parking rates and billing logic in the system.

## Usage

1.  **Entry:**
   
    * When a vehicle enters, the camera captures the image, and the system recognizes the license plate. [cite: 678, 679, 680, 681, 682, 683, 684, 685]
    * The entry time and vehicle details are stored. [cite: 678, 679, 680, 681, 682, 683, 684, 685]
2.  **Parking:**
   
    * IR sensors detect the availability of parking slots. [cite: 674, 675, 676, 677]
    * The web application displays the free slots to the user. [cite: 673]
3.  **Exit:**
   
    * When the vehicle exits, the system calculates the parking fee based on the entry and exit times. [cite: 668, 669, 670]
    * The bill is generated. [cite: 668, 669, 670]

## Contributing

Contributions to this project are welcome. Please follow these guidelines:

1.  Fork the repository.
   
2.  Create a new branch for your feature or bug fix.
   
3.  Make your changes and commit them.
   
4.  Push your changes to your fork.
   
5.  Submit a pull request.

## License

This project is licensed under the [Specify License].

## Acknowledgements

* We would like to thank the developers of Raspberry Pi OS, PHP, Python, and other open-source tools used in this project.

## Contact

For any questions or inquiries, please contact:

[Your Name]

[Your Email]
