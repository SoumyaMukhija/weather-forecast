# weather_forecast_api_service
Weather Forecast API Service

A weather forecast application which can interact with the weather api and show a weather forecast
for a particular city. The application would allow the users to login, select a country and city from the list
and extract forecast information for a particular date range. It also allows the app maintainers to perform
analytics and display top n users who have access forecast service and most commonly queried city and
country.

This application has a dependency on SQL Lite.
To set this application in your local machine, follow the instructures
1. Create a new virtual environment
```
python3 -m venv venv
```
2. Activate virtual environment
```
source venv/bin/activate
```
3. Pip install all the requirements
```
pip install -r requirements.txt
```
4. Run the application
```
FLASK_RUN_PORT=5900 flask run
```
5. Invoke `http://127.0.0.1:5900/` on chrome to verify the launch. 


# Frontend
1. Traverse to frontend folder.
2. Run `npm start` or `yarn start`.

Note- Database should be connected for the APIs to work.

# Scope for future improvement
1. Adding flask-login as a dependency to track sessions of users and add their analytics on the basis of time spent on app.
2. Adding Next-Day forecast data to frontend.
3. Unit and integration testing.

