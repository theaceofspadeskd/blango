# Blango

Installation:

1. Download this project
    ```
    git clone https://github.com/theaceofspadeskd/blango.git
    ```
2. Install all necessary dependencies
    ```
    pip install -r requirements.txt
    ```
3. Make migrations
    ```
    python manage.py makemigrations
    ```
4. Migrate
    ```
    python manage.py migrate
    ```


Advanced Django /coursera.org/

Course 1: Building a Blog

    Django Admin setup.
    Generic relationships, and the ContentType framework, for relating different models together generically.
    The Bootstrap framework, for quickly building good-looking websites.
    Custom template tags and filters, and how to use them safely.
    Crispy Forms, to make it easier to work with Django Forms and render them with Bootstrap classes.
    12-factor apps for reusable deployment, how to use Django Configurations and logging to achieve this.
    Django’s security features.
    An overview of deployment.
    Performance and caching, how to vary the response on different headers.
    Finding and optimizing slow database queries using Django Debug Toolbar and SQL EXPLAIN.
    Authenticating with email.
    Verifying email address with Django Registrations.
    Social auth with Django Allauth.

Course 2: Introduction to DRF

    Introduction to REST APIs and HTTP verbs.
    How to set up Postman.
    Django REST Framework introduction with serializers and views.
    Different DRF authentication methods.
    Custom DRF permissions.
    How to render related fields differently using DRF.
    Customizing the browsable UI, and how to set up Swagger.
    Cutting down on code with Viewsets and Routers.

Course 3: Advanced DRF

    How to test Django and DRF, with mock request and the requests module.
    Adding caching, throttling and filtering to DRF.
    Third-party DRF libraries, SimpleJWT, Django Filters and Versatile Image Field.
    An introduction to JavaScript.
    Integrating React and JSX into your project.
    Fetching resources in JavaScript, using fetch()

Course 4: External APIs and Task Queuing 

    An overview of how to integrate external APIs into Django models.
    Making requests with requests.
    Integrating using a 3rd-party library instead of raw requests.
    How to queue/run tasks asynchronously using Celery.
    Fetching the results of tasks later.
    Scheduling tasks with Celery beat.
