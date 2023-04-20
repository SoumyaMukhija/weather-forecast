from flask import request, jsonify
from weather_api_service import app

from weather_api_service.models.Analytics import UserAnalytics, CityAnalytics, CountryAnalytics

# End point for analytics.
@app.route('/analytics/<queryname>')
def analytics(queryname):
    n = request.args.get('n')
    if not n:
        n=1
    if queryname == 'users':
        result = jsonify(UserAnalytics.query.order_by(UserAnalytics.views).limit(n).all())
        user_name = []
        for res in result:
            str_res = str(res)
            user_name.append(str_res.split()[1][:-1])
        return jsonify(user_name)
    elif queryname == 'countries':
        result = CountryAnalytics.query.order_by(CountryAnalytics.views).limit(n).all()
        country_name = []
        for res in result:
            str_res = str(res)
            country_name.append(str_res.split()[1][:-1])
        return jsonify(country_name)
    elif queryname == 'cities':
        result = jsonify(CityAnalytics.query.order_by(CityAnalytics.views).limit(n).all())
        city_name = []
        for res in result:
            str_res = str(res)
            city_name.append(str_res.split()[1][:-1])
        return jsonify(city_name)
    else:
        return jsonify('Incorrect query for analytics!')