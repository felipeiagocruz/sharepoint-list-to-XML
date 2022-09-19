# Sharepoint list to XML

This is a simple API to access data from one or more sharepoint lists within a sharepoint site.

Consumed content is returned in XML for external consumption.

To use this application you must create an .env file in your repository and fill in the following parameters.

## :joystick: Running local

Inside .env:

```
LOGIN="youremail@domain.com"
PASSWORD="Your password"
DOMAIN="The domain of your web site, you can find it inside the url of your sharepoint list"
PORT="Is used when hosting the API, for local or dev purposes you leave empty"
```

## :star: Passing name list has argument

You can use the argument passed in the api to define which list will be accessed, as long as it is within the same website content.

```
localhost:8000/'My list name'
```
