import axios from 'axios';
import Map from '../components/Map';
import Loader from '../components/Loader';
import EventsFilter from '../components/events-filter';
// import Loader from '../Components/Loader';
// import Search from '../Components/Search';
import { useState, useEffect } from 'react';
//Main Context
import { useMainContext } from '../context/Context';

function App() {
  const { setEventData, reRenderMarkers } = useMainContext();
  const [loading, setLoading] = useState(false);

  const [bounds, setBounds] = useState(null);

  //Event to render
  const [renderEvent, setRenderEvent] = useState([]);

  // FILTER EVENTS
  const today = new Date();
  const todayISO = today.toISOString().split('T')[0];

  const sett = today.setDate(today.getDate() + 7);
  const oneWeek = new Date(sett);
  const oneWeekISO = oneWeek.toISOString().split('T')[0];

  const [firstDate, setFirstDate] = useState(todayISO);
  const [lastDate, setLastDate] = useState(oneWeekISO);
  const [categoryCheck, setCategoryCheck] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/events/`);
      //Extract the Array contained in the 'events' field.
      const events = res.data;
      console.log(events);
      //Event data is globally accessible. But 'renderEvent' is just to render out the MAP with the markers
      setEventData(events);
      setRenderEvent(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  //   useEffect(() => {
  //     if (reRenderMarkers !== null) {
  //       setRenderEvent(reRenderMarkers);
  //     }
  //   }, [reRenderMarkers]);

  useEffect(() => {
    // if (bounds) {
    if (bounds !== null) {
      const getEvents = async () => {
        // console.log('RCCOTI I BOUNDSSSS');
        // console.log(bounds);
        //     const blLat = bounds.sw.lat;
        //     const trLat = bounds.ne.lat;
        //     const blLong = bounds.sw.lng;
        //     const trLong = bounds.ne.lng;

        const tlLng = bounds[0]; // bounds.nw.lng;
        const brLat = bounds[1]; //bounds.se.lat;
        const brLng = bounds[2]; //bounds.se.lng;
        const tlLat = bounds[3]; //bounds.nw.lat;

        const types = categoryCheck.map((tipo, index) => {
          if (tipo) {
            return index;
          } else {
            return 1000;
          }
        });

        const filterParams = {
          firstDate,
          lastDate,
          tlLng,
          brLat,
          brLng,
          tlLat,
          types,
        };

        // console.log(filterParams);
        try {
          const retrievedEvents = await axios.post(
            `${process.env.NEXT_PUBLIC_API}/events/`,
            filterParams
          );
          //   console.log(retrievedEvents);
          setRenderEvent(retrievedEvents.data);
        } catch (err) {
          console.log(err);
        }
      };
      getEvents();
    }
  }, [firstDate, lastDate, bounds, categoryCheck]);

  return (
    <div>
      <div className="appRow">
        <EventsFilter
          categoryCheck={categoryCheck}
          setCategoryCheck={setCategoryCheck}
          firstDate={firstDate}
          setFirstDate={setFirstDate}
          lastDate={lastDate}
          setLastDate={setLastDate}
        />
      </div>
      {!loading ? (
        <Map
          eventData={renderEvent}
          categoryCheck={categoryCheck}
          bounds={bounds}
          setBounds={setBounds}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
