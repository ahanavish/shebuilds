# SheBuilds Hackathon

<img src="UpHire.jpeg" alt="Banner" height='340' width='1000'/>
<hr>

## Problem we aim to solve

Employee retention is a major concern in the workplace. It's not only about keeping your employees happy; it's also about retaining your talent and ensuring the presence of the finest individuals on your team for the longest time possible.

One-third of new employees depart within six months, according to data. According to the Job Openings and Labor Turnover Survey, 3 to 4.5 million Americans leave their employment each month (JOLTS).

Employee turnover has been increasing in recent years, according to statistics. Employers are not only losing great talent, but they are also dealing with the challenges of hiring, training, and replacing lost staff. Finding the finest personnel often entails advertising job ads, recruiting agencies, screening, interviewing, and hiring. This amounts to a significant investment of time, money, and energy in replacing people who could have been maintained with an effective employee retention plan.

Employee retention rates of 90% or above are considered adequate, and a firm should aspire for a turnover rate of 10% or below. The greatest method to retain employees is to make them feel appreciated, provide them with training programs or mentorship opportunities that will aid in the development of new skill sets for advancement within your firm, and encourage them in communicating their ideas to management on a regular basis. Employee retention also boosts morale, lowers expenses, maintains a positive client experience, and lowers total costs.

## Our solution

Our project, UpHire will assist firms in determining how many of their applicants are searching for a job move following the training period with up to 98% accuracy, saving them time, money, and energy. The corporation may then carefully, and successfully plan its courses and invest in long-term retention plans.

## Skills used

* Machine Learning (Streamlit, Pickle, Pandas, Numpy, Plotly, Matplotlib.pyplot, Seaborn)
* React
* Django

## Dataset overview
There are a total 19,158 number of observations or rows. We have used 10 factors:

* gender: Gender of the candidate
* relevent_experience: Relevant experience of the candidate
* enrolled_university: Type of University course enrolled if any
* education_level: Education level of candidate
* major_discipline: Education major discipline of the candidate
* experience: Candidate total experience in years
* company_size: No of employees in current employer’s company
* company_type: Type of current employer
* last_new_job: Difference in years between previous job and current job
* training_hours: Training hours completed

It is designed to understand the factors that lead a person to leave their current job. Model(s) uses the current credentials, demographics, and experience data to predict the probability of a candidate looking for a new job or will work for the company and interpret affected factors on employee decision.

## Challenges we faced
Challenges we ran into involved the integration of Django with React and ML models. 
Major issues with Django were setting it up and getting our REST API on work as we tried Django for the first time. Also, there were many errors involved with creating models then making the respective views. 

## How to run the application 
* Clone the repo
* Open the command prompt and change directory to the location where the repo is cloned.
* Run streamlit `run Strealit.py` command
