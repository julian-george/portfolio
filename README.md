## Description
This is my portfolio site, designed and coded by me. I wanted this site to be unique, efficient, and interactive, so I fit all relevant content into one fairly small, distinct one-page app. It took more time than it probably looks like, but I am pretty proud of it. 

One large goal was for it to be maintainable for the foreseeable future, as I add more projects and skills to my repertoire. I accomplished this goal using Django and storing my projects/skills in a small Postgres DB.

There are a lot more aspects to this site, from my exploration into 3D modeling to all of the animations I utilized for the first time. To sum it all up, I experimented with a ton of new technologies and I endeavored to use best practices to showcase my development skills.

### **Visit it at [www.juliangeorge.net](www.juliangeorge.net)**


## Stack
### Frontend
React (used heavily), three.js, Material UI, react-spring.
### Backend
Django and Postgres

## Local Deployment (on Windows)
### Apologies if the app isn't well-suited for local deployment, I will improve this in the future.
1. Things you need to have
    - Python 3 (I used 3.9)
    - pip
    - npm
    - Postgres
2. Set up a virtual Python environment 
    - Good tutorial here: https://pythonbasics.org/virtualenv/
3. Within the virtual environment, `git clone` this repo
4. In the root portfolio folder, run `pip install -r requirements.txt` in the command line to install Python packages
5. Run `npm i` to install npm packages
6. Create a `.env` file in the root and add a "SECRET_KEY" environment variable
    - e.g `SECRET_KEY=mysecretkeydontsteal`
    - actual key doesn't matter
7. In `./portfolio/settings.py`, replace the details for the `default` database with those from your Postgres DB
8. To create an admin user to create Skills and Projects, run `python manage.py createsuperuser`
9. Run `npm run-script start` or `python manage.py runserver` to initialize app
    - Every time you edit files in `./src`, run `npm build` to update the site.
10. Go to `localhost:8000` to view the site
    - It will likely not work until you add some Skills and Projects, go to step 11 to do so.
11. Go to `localhost:8000/admin` to add Skills and Projects
    - Use user details from step 8
    - Add Skills and Projects as desired


