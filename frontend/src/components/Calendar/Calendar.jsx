import React, { useEffect, useState } from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import './calendar.css';
import axios from 'axios';

const Calendar = ({entries}) => {
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/jobs/")
  //       setEvents(response.data);
  //       console.log("EVENT DATA:", response.data)
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   };
  //   fetchEvents();
  // }, []);

  return (
    <> 
      <FullCalendar 
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialView='dayGridMonth'
        editable={true}
        selectable={true}
        selectMirror={true}
        events={entries}/>
    </>
  );
  }
  export default Calendar;