import React from 'react'
import { useEffect, useState } from 'react';
import './OverviewList.css';
const api_base = 'http://localhost:3001';

function OverviewList() {
  const [shows, setShows] = useState([]);
  
  const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August",
  "September", "Oktober", "November", "Dezember"];

  useEffect(() => {
		GetShows();
	}, []);

  const GetShows = () => {
		fetch(api_base + '/shows')
			.then(res => res.json())
			.then(data => setShows(data))
      .then(console.log(shows))
			.catch((err) => console.error("Error: ", err));
	}

  console.log(shows);

  return (
    <table className='show_table'>
      <tbody>
       {shows.map((show, index) => (  
              <tr key={index} >  
                <td>{months[index]}</td>  
              </tr>  
            ))}  
      </tbody>
    </table>
  )
}

export default OverviewList