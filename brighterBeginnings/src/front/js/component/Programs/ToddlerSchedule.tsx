import React from "react";
import "../../../styles/schedule.css";



const ToddlerSchedule = () =>{
  return (
    <div className="table-container">
      <table>
        <thead>
        <tr className="bg-sky">
            <th>Time</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Time">6:45 - 7:30</td>
            <td data-label="Activity">Arrival/Quiet Play</td>
          </tr>
          <tr>
            <td data-label="Time">7:30 - 7:45</td>
            <td data-label="Activity">Breakfast</td>
          </tr>
          <tr>
            <td data-label="Time">7:45 - 8:45</td>
            <td data-label="Activity">Free Choice</td>
          </tr>
          <tr>
            <td data-label="Time">8:45 - 9:00</td>
            <td data-label="Activity">Diaper Check/Wash Hands/Toilet Learning</td>
          </tr>
          <tr>
            <td data-label="Time">9:00 - 9:15</td>
            <td data-label="Activity">Circle</td>
          </tr>
          <tr>
            <td data-label="Time">9:15 - 9:30</td>
            <td data-label="Activity">Diaper Check/Wash Hands/Toilet Learning</td>
          </tr>
          <tr>
            <td data-label="Time">9:30 - 10:00</td>
            <td data-label="Activity">Snack</td>
          </tr>
          <tr>
            <td data-label="Time">10:00 - 10:30</td>
            <td data-label="Activity">Teacher Directed Activity - Science, Music, Large Motor</td>
          </tr>
          <tr>
            <td data-label="Time">10:30 - 11:30</td>
            <td data-label="Activity">Outdoor Play/Indoor Free Play/Large Motor</td>
          </tr>
          <tr>
            <td data-label="Time">11:30 - 11:45</td>
            <td data-label="Activity">Diaper Check/Wash Hands/Toilet Learning</td>
          </tr>
          <tr>
            <td data-label="Time">11:45 - 12:15</td>
            <td data-label="Activity">Lunch</td>
          </tr>
          <tr>
            <td data-label="Time">12:15 - 12:30</td>
            <td data-label="Activity">Diaper Check/Wash Hands/Toilet Learning</td>
          </tr>
          <tr>
            <td data-label="Time">12:30 - 12:45</td>
            <td data-label="Activity">Story Time</td>
          </tr>
          <tr>
            <td data-label="Time">12:45 - 2:45</td>
            <td data-label="Activity">Nap</td>
          </tr>
          <tr>
            <td data-label="Time">2:45 - 3:15</td>
            <td data-label="Activity">Diaper Check/Wash Hands/Toilet Learning</td>
          </tr>
          <tr>
            <td data-label="Time">3:15 - 3:30</td>
            <td data-label="Activity">Afternoon Snack</td>
          </tr>
          <tr>
            <td data-label="Time">3:30 - 4:00</td>
            <td data-label="Activity">Afternoon Activity (open ended) - play dough etc...</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
};

export default ToddlerSchedule;
