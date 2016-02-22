import os
import jinja2
import webapp2

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainPage(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('index.html')
        self.response.headers["X-Frame-Options"] = "DENY"
        self.response.write(template.render({}))

class DevPage(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('dev.html')
        self.response.headers["X-Frame-Options"] = "DENY"
        self.response.write(template.render({}))

application = webapp2.WSGIApplication([
	('/dev', DevPage),
    ('/', MainPage),
], debug=True)