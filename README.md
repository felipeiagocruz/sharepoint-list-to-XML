# Sharepoint list to XML

This is a simple API to access data from one or more sharepoint lists within a sharepoint site.

Consumed content is returned in XML for external consumption.

To use this application you must create an .env file in your repository and fill in the following parameters.

That way you can consume sharepoint lists without having to be logged in.

This application was developed using node-sp-auth.
[Documentation can be found here.](https://github.com/s-KaiNet/node-sp-auth)

In addition, I also use SharePoint's RESP API.
[Documentation can be found here.](https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service?tabs=csom)

## :joystick: Running local

First you will need node and npm installed on your machine.

With the cloned repository use the `npm install` command to install the packages.

Create a file .env on the root.

Inside .env:

```
LOGIN="youremail@domain.com"
PASSWORD="Your password"
DOMAIN="The domain of your web site, you can find it inside the url of your sharepoint list"
PORT="Is used when hosting the API, for local or dev purposes you leave empty"
```

Then, use the command on terminal

```
node index.js
```

The api will be available on port 5000. Therefore, you can access it through the url:

```
localhost:5000
```

## :star: Passing name list has argument

You can use the argument passed in the api to define which list will be accessed, as long as it is within the same website content.

```
localhost:5000/'My list name'
```
