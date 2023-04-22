import React, {useState, useEffect } from 'react'
import { EducationalSupportContent } from '../components/EducationalSupportContent';
import { PageTitle } from '../components/PageTitle'
import { getData } from '../data/Axios'
import { FOOD_DONATION } from '../data/food_donation';
export const FoodNutrition = () => {
  return (
    <div className='col-12'>
        <PageTitle pageTitle="Food and Nutrition Donation"/>
        <p className='col-lg-9 col-sm-10 mx-auto text-center mt-4'>Most of the population in Karenni state have been refugees (second highest IDPs % of states in Myanmar) since the start of 2021. As a rural and low-developing place since before the coup, the locals have to struggle to get a decent meal with nourish nutrition. The coup and violent oppression of the military has made their lives even harder and many children are suffering diseases from not having enough nutrition. The Union tries to ease these and fill the void by sharing delicious meat curries and high-nutrition foods at IDPs camps.</p>
     
          {FOOD_DONATION.map(donation => 
            <EducationalSupportContent key={donation.id}
              title={donation.title}
              date={donation.date}
              description={donation.text}
              imgOne={donation.imgOne}
              imgTwo={donation.imgTwo}
            />
          )}
        
    </div>
  )
}
