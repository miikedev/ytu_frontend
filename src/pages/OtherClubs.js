import React,{useEffect,useState} from 'react'
import { Associations } from '../components/Associations'
import { clubs } from '../data/Club'
import { BsCalendarWeek } from 'react-icons/bs'


//component
import { Component } from '../components/AssociationComponent'

//data
import { GET_OTHER_CLUB_API } from "../services/CONSTANTS";
import { getApiDataService } from '../services/apiServices'

export const OtherClubs = () => {
// <<<<<<< HEAD
//   const Component = () => {
//     return(
//        clubs.filter(club => club.id > 21)
//             .map(club => 
//                 <div key={club.id} className='d-flex flex-column flex-wrap justify-content-evenly align-items-center col-lg-3 col-sm-12 col-md-3'>
//                     <img src={club.logo}/>
//                     <h5 className='text-wrap text-center text-color'>{club.club_name}</h5>
//                     <p className='text'><BsCalendarWeek/><span className='ms-2' style={{color: "#2F2E2E"}}>Established Year - {club.established_year}</span></p>
//                 </div>
//             )
//     )
//   }
// =======
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getApiDataService(GET_OTHER_CLUB_API(10))
      .then((res) => {
        console.log("other-club component data =", res);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("axios err=", err);
        setIsLoading(false);
        setData([]);
      });
    return () => {
      console.log("axios cleanup.");
    };
  }, []);
  
  
  return (
    <div>
        <Associations 
            associationName="Others Clubs"
            component={<Component associations={data} />}
        />
    </div>
  )
}
