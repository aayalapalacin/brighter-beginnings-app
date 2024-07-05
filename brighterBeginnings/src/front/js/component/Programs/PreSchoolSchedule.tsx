import React from "react";
import "../../../styles/schedule.css";



const PreSchoolSchedule = () =>{
  return (
    <div className="table-container">
          <table>
        <thead>
          <tr className="bg-gradient-grass ">
            <th>Time</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Time">6:45 - 7:30</td>
            <td data-label="Activity">Supervised quiet activities</td>
          </tr>
          <tr>
            <td data-label="Time">7:30 - 8:00</td>
            <td data-label="Activity">Breakfast</td>
          </tr>
          <tr>
            <td data-label="Time">8:00 - 9:00</td>
            <td data-label="Activity">Free Choice</td>
          </tr>
          <tr>
            <td data-label="Time">9:00 - 9:30</td>
            <td data-label="Activity">Circle/Wash up for Snack</td>
          </tr>
          <tr>
            <td data-label="Time">9:30 - 9:45</td>
            <td data-label="Activity">Snack</td>
          </tr>
          <tr>
            <td data-label="Time">9:45 - 10:45</td>
            <td data-label="Activity">Teacher Directed Activity</td>
          </tr>
          <tr>
            <td data-label="Time">11:00 - 11:30</td>
            <td data-label="Activity">Outdoor Play/Indoor Large Muscle Activity</td>
          </tr>
          <tr>
            <td data-label="Time">11:45 - 12:00</td>
            <td data-label="Activity">Wash Up for Lunch</td>
          </tr>
          <tr>
            <td data-label="Time">12:00 - 12:30</td>
            <td data-label="Activity">Lunch</td>
          </tr>
          <tr>
            <td data-label="Time">12:30 - 1:00</td>
            <td data-label="Activity">Story/Wash Up/Bathroom/Get Ready for Nap</td>
          </tr>
          <tr>
            <td data-label="Time">1:00 - 2:30</td>
            <td data-label="Activity">Nap Time</td>
          </tr>
          <tr>
            <td data-label="Time">2:30 - 3:00</td>
            <td data-label="Activity">Circle/Wash Up for Snack</td>
          </tr>
          <tr>
            <td data-label="Time">3:00 - 3:15</td>
            <td data-label="Activity">Snack</td>
          </tr>
          <tr>
            <td data-label="Time">3:15 - 4:00</td>
            <td data-label="Activity">Teacher Directed Group Activity</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  );
};

export default PreSchoolSchedule;
