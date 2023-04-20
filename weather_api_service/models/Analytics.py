from weather_api_service import db
from weather_api_service.models.User import User

# Model that stores data enabling user analytics.
class UserAnalytics(db.Model):
    __tablename__ = 'user_analytics'
    username = db.Column('username',  db.String(255), db.ForeignKey(User.username), primary_key=True)
    views = db.Column('views', db.Integer)

    def __init__(self, username, views):
        self.username = username
        self.views = views

    def to_json(self):
        return dict(
            username = self.username,
            views = self.views
        )

# Model that stores data enabling country analytics.
class CountryAnalytics(db.Model):
    __tablename__ = 'country_analytics'
    country = db.Column('country', db.String(255), primary_key=True)
    views = db.Column('views', db.Integer)

    def __init__(self, country, views):
        self.country = country
        self.views = views

    def to_json(self):
        return dict(
            country = self.country, 
            views = self.views
        )

# Model that stores data enabling city analytics.
class CityAnalytics(db.Model):
    __tablename__ = 'city_analytics'
    city = db.Column('city', db.String(255), primary_key=True)
    views = db.Column('views', db.Integer)

    def __init__(self, city, views):
        self.city = city
        self.views = views

    def to_json(self):
        return dict(
            city = self.city,
            views = self.views
        )
