"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const AppDays = () => {
  const [dailyNotes, setDailyNotes] = useState([]);
  const fetchDailyNotes = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}transciption/notes/daily`);
      setDailyNotes(response.data.notes);
    } catch (error) {
      console.error("Error fetching daily notes:", error);
    }
  };

  useEffect(() => {
    fetchDailyNotes()
    console.log(dailyNotes)
  }, []);
  return (<>
    
    {
        dailyNotes.map(({item,index}:any) => (
            <div key={index}>
                {item}
            </div>
        ) )
    }
  
  </>);
};

export default AppDays;
