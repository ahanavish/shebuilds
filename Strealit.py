
import streamlit as st
import pickle
import pandas as pd
import numpy as np

st.set_page_config(
    page_title='My App',
    layout='wide',
    page_icon=':rocket:',
)


st.markdown("<h1 style='text-align: center; color: red;'> Predictor App</h1>", unsafe_allow_html=True)
st.markdown("<h2 style='text-align: center; color: black;'>Enter Details Below</h1>", unsafe_allow_html=True)
col1, col2 = st.columns(2)
global location , character , nausea ,family_bg , tinnitus , vomit, vertigo, age

with col1:

    first_name = st.text_input("First Name")

    last_name= st.text_input("Last Name")
    email = st.text_input("Email")
    phone= st.text_input("Phone")
    city_code = st.text_input("City Code")
    city_dev_index = st.text_input("City dev Index")
    gender= st.radio("Gender ",('Male','Female','Other'))
    if gender== 'Male':
        gender=1
    elif gender== 'Female':
        gender=0
    elif gender== 'Other':
        gender=2

    university= st.radio("University Course ",('Full time course' ,'no_enrollment' ,'Part time course'))
    if university== 'Full time course':
        university=0
    elif university== 'no_enrollment':
        university=2
    elif university== 'Part time course':
        university=1
   
    education= st.radio("Education Level",('Graduate' ,'High School' ,'Masters','Phd' ,'Primary School'))
    if education== 'Graduate':
        education=0
    elif education== 'High School':
        education=1
    elif education== 'Masters':
        education=2
    elif education== 'Phd':
        education=3
    elif education== 'Primary School':
        education=4

    Experienced_not=st.radio("Experienced?",('Has relevent experience' ,'No relevent experience'))
    if Experienced_not== 'Has relevent experience':
        Experienced_not=0
    elif Experienced_not== 'No relevent experience':
        Experienced_not=1

   


    

    

with col2:
    company_Size=st.radio("What's your company size",('<10','10-49', '10000+', '100-500' ,'50-99' ,'1000-4999' ,'500-999','5000-9999'))
    if company_Size== '<10':
        company_Size=7
    elif company_Size== '10-49':
        company_Size=0
    elif company_Size== '10000+':
        company_Size=3
    elif company_Size== '100-500':
        company_Size=1
    elif company_Size== '50-99':
        company_Size=4
    elif company_Size== '1000-4999':
        company_Size=2
    elif company_Size== '500-999':
        company_Size=5
    elif company_Size== '5000-9999':
        company_Size=6

    company_Type=st.radio("What's your company type",('Pvt Ltd' ,'Funded Startup', 'Other' ,'Public Sector',
 'Early Stage Startup', 'NGO'))
    if company_Type== 'Pvt Ltd':
        company_Type=5
    elif company_Type== 'Funded Startup':
        company_Type=1
    elif company_Type== 'Other':
        company_Type=3
    elif company_Type== 'Public Sector':
        company_Type=4
    elif company_Type== 'Early Stage Startup':
        company_Type=0
    elif company_Type== 'NGO':
        company_Type=2

    last_new_job=st.radio("How many years since your last job",('1' ,'never', '>4', '2', '4', '3'))
    if last_new_job== '1':
        last_new_job=0
    elif last_new_job== 'never':
        last_new_job=5
    elif last_new_job== '>4':
        last_new_job=4
    elif last_new_job== '2':
        last_new_job=1
    elif last_new_job== '4':
        last_new_job=3
    elif last_new_job== '3':
        last_new_job=2
   
    Major_Subject=st.radio("Major Subject",('STEM','Other', 'Business Degree', 'Arts', 'Humanities', 'No Major'))
    if Major_Subject== 'STEM':
        Major_Subject=5
    elif Major_Subject== 'Other':
        Major_Subject=4
    elif Major_Subject== 'Business Degree':
        Major_Subject=1
    elif Major_Subject== 'Arts':
        Major_Subject=0
    elif Major_Subject== 'Humanities':
        Major_Subject=2
    elif Major_Subject== 'No Major':
        Major_Subject=3
    training_hours=st.text_input("Training hours")
    experience = st.text_input("Has Experience of (In years)")
   


try:
    df = np.array(
    [
        
       
       
         gender
        
        , Experienced_not
        , university
        , education
        , Major_Subject
        , experience
        , company_Size
        , company_Type
        , last_new_job
        , training_hours

   
    ]
    )

    with open(r"model.h5", "rb") as f:
        model = pickle.load(f)

    pred = model.predict(df.reshape(1, -1))
    if pred == 0:
        st.markdown("<h2 style='text-align: center; color: green;'>Employee will not leave the job after training</h2>", unsafe_allow_html=True)
      
    elif pred == 1:
        st.markdown("<h2 style='text-align: center; color: green;'>Employee will leave the job after training</h2>", unsafe_allow_html=True)
       
    

except ValueError:
    st.error("Please enter a valid Details")


