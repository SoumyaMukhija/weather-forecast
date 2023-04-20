from weather_api_service import app, db, weatherapi_key, API_URL, ERR_DATA_NOT_FOUND, NUM_DAYS
from flask import jsonify, request
import json
import requests
import calendar
from datetime import datetime

from weather_api_service.models.Analytics import CityAnalytics

# API to get the forecast for a particular city. Number of days = today + 5.
@app.route('/forecast')
def forecast():
    data = {}
    city_requested = request.args.get('city')
    api_url = API_URL.format(city_requested, NUM_DAYS)

    try:
        query = CityAnalytics.query.filter_by(city=city_requested)
        if query.count() > 0:
            curr = query.first()
            curr.views += 1
        else:
            city_analytics = CityAnalytics(city=city_requested, views=1)
            db.session.add(city_analytics)
        db.session.commit()
    except:
        print("Could not record the user analysis.")

    try:
        res = requests.get(url=api_url, headers={'key': weatherapi_key})
        json_res = res.json()
        data["current"] = {}
        data["current"]["temp_c"] = json_res["current"]["temp_c"]
        data["current"]["temp_f"] = json_res["current"]["temp_f"]
        data["current"]["condition"] = json_res["current"]["condition"]
        data["current"]["wind_mph"] = json_res["current"]["wind_mph"]
        data["current"]["precip"] = json_res["current"]["precip_in"]
        data["current"]["pressure"] = json_res["current"]["pressure_in"]

        today = json_res["forecast"]["forecastday"][0]
        data["today"] = {}
        data["today"]["sunrise"] = today["astro"]["sunrise"]
        data["today"]["sunset"] = today["astro"]["sunset"]
        data["today"]["moonrise"] = today["astro"]["moonrise"]
        data["today"]["moonset"] = today["astro"]["moonset"]

        data["today"]["max_c"] = today["day"]["maxtemp_c"]
        data["today"]["max_f"] = today["day"]["maxtemp_f"]
        data["today"]["min_c"] = today["day"]["mintemp_c"]
        data["today"]["min_f"] = today["day"]["mintemp_f"]
        data["today"]["avg_c"] = today["day"]["avgtemp_c"]
        data["today"]["avg_f"] = today["day"]["avgtemp_f"]
        data["today"]["maxwind"] = today["day"]["maxwind_mph"]
        data["today"]["precip"] = today["day"]["totalprecip_in"]

        times_needed = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"]

        vars = ["temp_c", "temp_f", "condition", "wind_mph", "precip_in", "cloud", "humidity"]
        for v in vars:
            data["today"][v] = {}

        for h in today["hour"]:
            time = h["time"].split()[1]
            if time in times_needed:
                for v in vars:
                    data["today"][v][time] = h[v]

        for date in range(1,6):
            curr_date_obj = json_res["forecast"]["forecastday"][date]
            curr_date = curr_date_obj["date"]

            datetime_obj = datetime.strptime(curr_date, '%Y-%m-%d')
            dayname = calendar.day_name[datetime_obj.weekday()]

            data[dayname] = {}
            data[dayname]["temp_c"] = curr_date_obj["day"]["avgtemp_c"]
            data[dayname]["temp_f"] = curr_date_obj["day"]["avgtemp_f"]
            data[dayname]["condition"] = curr_date_obj["day"]["condition"]

        return json.dumps(data)

    except:
        return jsonify(ERR_DATA_NOT_FOUND)
