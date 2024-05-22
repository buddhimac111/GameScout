# GameScout

## Overview
GameScout is a web application created with modern technologies such as Next.js, Java 17/Spring Boot, Python, and MongoDB. This project aims to offer gaming enthusiasts a platform where they can recommend their favorite games and compare prices across various online retailers, helping them find the best deals and discounts. By doing so, GameScout also seeks to reduce the purchase of pirated games, benefiting the gaming industry. Additionally, the platform includes a review system and an admin contact feature, allowing gamers to communicate directly with administrators. Managed using agile methodology, the GameScout project plans to expand its features in the future, enhancing the suggestion system and adding new functionalities for both gamers and game publishers.

## Technology Stack
- **Next.js 13**
- **Node 20.11.0**
- **Python 3**
- **JavaScript / JSX**
- **Java 17**
- **Spring Boot 3.2.4**
- **MongoDB**

## System Requirements
To run this project on a local machine, the following hardware and software requirements should be met:
- **Core 2 Duo Processor (Minimum)**
- **4GB RAM (Minimum)**
- **3GB Disk Storage (Minimum)**
- **Python 3**
- **Node 20 or higher**
- **Java SE Development Kit 17**
- **MongoDB Management tool (Any)**

## Setup and Run

### ★ Clone project to Local Machine
1. Clone this repository to your local machine.
   
   ```bash
   git clone <repository_url>

2. change directory to local project repository.
   
   ```bash
   cd <local repository path>

### ★ MongoDB Setup
1. install your MongoDB management tool and create a database with name you like
2. import provided sample data collections in database-sample-data folder tou your database
3. copy MongoDB URI for next Steps

### ★ Scrape updated data from stores

1. Open a Terminal from the project directory then switch to the scrape directory.

   ```bash
   cd scrape
   ```

2. Create a virtual environment:

   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:

   - On Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - On MacOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. Install the required packages from `requirements.txt`:

   ```bash
   pip install -r requirements.txt
   ```

5. Add your MongoDB URI in the `mongo.py` file:

   - Open `mongo.py` in a text editor.
   - Replace the placeholder string with your actual MongoDB URI.

6. Run `main.py` to start the scraping process:

   ```bash
   python main.py
   ```

This will scrape the updated data from the stores and save it to your MongoDB database.


### ★ Run Spring Boot API Using Maven

1. Open a Terminal in project directory and navigate to the backend directory.

   ```bash
   cd backend
   ```

2. Ensure that Maven is installed. You can check by running:

   ```bash
   mvn -v
   ```

   If Maven is not installed, follow the instructions from the [official Maven installation guide](https://maven.apache.org/install.html).

3. Add your MongoDB URI in the `application.properties` file:

   - Open `src/main/resources/application.properties` in a text editor.
   - Add or update the MongoDB URI:
     ```
     spring.data.mongodb.uri=mongodb://your_username:your_password@host:port/database
     ```

4. Compile your project and install dependencies:

   ```bash
   mvn clean install
   ```

5. Run your Spring Boot application:

   ```bash
   mvn spring-boot:run
   ```


### ★ Run Next.js Frontend

1. Open a Terminal in project directory and navigate to the frontend directory.

   ```bash
   cd frontend
   ```

2. Ensure that Node.js and npm (or yarn) are installed. You can check by running:

   ```bash
   node -v
   npm -v
   ```

   If these are not installed, follow the instructions from the [official Node.js website](https://nodejs.org/).

3. Create a `.env` file in the root of your project directory:

   - Open your text editor and create a new file named `.env`.
   - Add the following line to specify the API URL:
     ```
     NEXT_PUBLIC_API_URL=https:<your-api-url>
     ```

4. Install the necessary packages:

   ```bash
   npm install
   ```

   Or if you are using yarn:

   ```bash
   yarn
   ```

5. Run your Next.js application:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

This will start your application on the default port (usually 3000), and you can access it by navigating to `http://localhost:3000` in your web browser.





