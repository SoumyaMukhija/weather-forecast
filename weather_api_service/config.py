import os

app_config_dict = {
    'SQLALCHEMY_DATABASE_URI': f'sqlite:///weather_api_service.db',
    'SQLALCHEMY_TRACK_MODIFICATIONS': True
}

secret_key = os.environ.get('secret_key', 'FT8H9ylGnZcfhCI5SX7Q2VL46IZd1vL1')
weatherapi_key = os.environ.get('key', 'cf15305c2a99407caca221632232101')

#constants
API_URL = "https://api.weatherapi.com/v1/forecast.json?q={}&days={}"
ERR_DATA_NOT_FOUND = "Sorry, the data you requested was not found!"
NUM_DAYS = 6

LOCAL_DATABASE = "127.0.0.1:5432"