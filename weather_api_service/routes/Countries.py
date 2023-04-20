from flask import jsonify
from weather_api_service import app, db
import json

from weather_api_service.models.Analytics import CountryAnalytics

# APIs to print the list of countries and a list of cities within a country.
@app.route('/countries')
@app.route('/countries/<country_requested>')
def locations(country_requested=None):
    try:
        with open('./data/country_data.json', encoding="utf-8") as f:
            data = json.load(f)
        if not country_requested:
            unique_countries = set()
            for d in range(len(data)):
                unique_countries.add(data[d]["country"])
            resp = list(unique_countries)
        else:
            try:
                query = CountryAnalytics.query.filter_by(country=country_requested)
                if query.count() > 0:
                    curr = query.first()
                    curr.views += 1
                else:
                    country_analytics = CountryAnalytics(country=country_requested, views=1)
                    db.session.add(country_analytics)
                db.session.commit()
            except:
                print("Could not record the country analysis.")
            finally:
                cities = set()
                for d in range(len(data)):
                    if data[d]["country"] == country_requested:
                        cities.add(data[d]["name"])
                resp = list(cities)
        
        return jsonify(resp)
    except Exception as e:
        print(e)
        return jsonify("Sorry, we could not find data regarding countries!")