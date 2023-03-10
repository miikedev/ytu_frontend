import React, {useState, useEffect } from 'react'
import { EducationalSupportContent } from '../components/EducationalSupportContent';
import { PageTitle } from '../components/PageTitle'
import { getData } from '../data/Axios'
export const FoodNutrition = () => {
  const [state, setState] = useState([]);
  const api = "http://localhost:3006/food-nutrition"
  useEffect(() => {
    getData(api).then(res => {
        setState(res.data)
    })
  }, [])
  return (
    <div>
        <PageTitle pageTitle="Food and Nutrition Donation"/>
        <p className='col-lg-9 col-sm-10 mx-auto text-center mt-4'>Most of the population in Karenni state have been refugees (second highest IDPs % of states in Myanmar) since the start of 2021. As a rural and low-developing place since before the coup, the locals have to struggle to get a decent meal with nourish nutrition. The coup and violent oppression of the military has made their lives even harder and many children are suffering diseases from not having enough nutrition. The Union tries to ease these and fill the void by sharing delicious meat curries and high-nutrition foods at IDPs camps.</p>
        <div>
            {state.map(item => 
                <div key={item.id}>
                    <EducationalSupportContent 
                        id={item.id} date={item.date} imgOne={item.imgOne} imgTwo={item.imgTwo}
                        heading={item.heading} description={item.description}
                    />
                </div>    
            )}
        </div>
    </div>
  )
}
