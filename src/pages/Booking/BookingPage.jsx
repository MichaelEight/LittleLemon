import { useCallback, useState, useReducer, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Main, Heading, ProgressBar, Button, Icon } from '../../components';
import './BookingPage.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { BookingForm } from './components';
import { FormContextProvider } from '../../context';
import { submitAPI } from '../../utilities';
import Calendar from 'react-calendar'; // Assuming 'react-calendar' is installed
import 'react-calendar/dist/Calendar.css'; // Default styling for the calendar
import { faTimes, faArrowLeft, faCalendar } from '@fortawesome/free-solid-svg-icons';

import { bookingFormReducer, STAGES, loadInitialState } from '../../actions';

export const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(bookingFormReducer, loadInitialState());
  const [calendarVisible, setCalendarVisible] = useState(false);

  const openCalendar = () => setCalendarVisible(true);
  const closeCalendar = () => setCalendarVisible(false);
  const handleDateChange = (date) => {
    closeCalendar();
    dispatch({ type: 'setDate', payload: date });
  };

  // Define callbacks unconditionally at the top level of your component
  const goNextStage = useCallback(() => {
    const stageIndex = STAGES?.indexOf(state.stage) ?? STAGES.length;
    if (stageIndex < STAGES.length - 1) {
      dispatch({ type: 'setStage', payload: STAGES[stageIndex + 1] });
    }
  }, [state.stage, dispatch]);

  const goPreviousStage = useCallback(() => {
    const stageIndex = STAGES?.indexOf(state.stage) ?? 0;
    if (stageIndex > 0) {
      dispatch({ type: 'setStage', payload: STAGES[stageIndex - 1] });
    } else {
      navigate('/');
    }
  }, [state.stage, navigate, dispatch]);

  useEffect(() => {
    if (location?.state?.from === 'navigation') dispatch({ type: 'reset' });
  }, [location?.state?.from]);

  // Conditional rendering or early returns should come after all hook calls
  if (!state || typeof state.stage === 'undefined') {
    // Possibly set a loading state or handle the error appropriately
    return <div>Loading...</div>;
  }

  const submitForm = e => {
    e.preventDefault();
    try {
      // Loop through the state.formErrors object and find if any fields have errors
      if (Object.values(state.formErrors).find(val => val.length > 0)) {
        throw new Error('Form could not be submitted - contains errors!');
      }

      // Submit Form
      const response = submitAPI({
        booking_id: state.booking_id,
        ...state.formData,
      });
      if (response) {
        goNextStage();
        navigate('thank-you');
      } else throw new Error('Form could not be submitted to the server.');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Main className="reservation-main">
      <ProgressBar
        value={((STAGES.indexOf(state.stage) + 1) / STAGES.length) * 100}
      />
      
      <nav className="LL-BookingPageNavigation">
        {STAGES[STAGES.length - 1] !== state.stage && (
          <Button ariaLabel="Go Back" unstyled onClick={goPreviousStage}>
            <Icon src={faArrowLeft} size="2x" />
          </Button>
        )}
        <Heading tag="h1" size="xl" align="center">
          {state.stage}
        </Heading>
        {STAGES[STAGES.length - 1] !== state.stage && (
          <Button ariaLabel="Exit" unstyled onClick={() => {}}>
            <Icon src={faTimes} size="2x" />
          </Button>
        )}
      </nav>

      {state && (
        <FormContextProvider value={{ state, dispatch }}>
        <div className="LL-BookingPageLayout">

          {/* Right Side: Form */}
          <BookingForm onSubmit={submitForm} openCalendar={openCalendar} />

          {/* Left Side: Calendar or Image */}
          {calendarVisible ? (
              <Calendar onChange={handleDateChange} />
            ) : (
              // <img
              // src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
              // alt="Little Lemon - Seating"
              //   className="LL-BookingPageImage"
              //   style={{maxWidth:'50%'}}
              // />
              <></>
            )}

          {/* Calendar Icon
          {!calendarVisible && (
            <Button ariaLabel="Pick Date" unstyled onClick={openCalendar}>
              <Icon src={faCalendar} size="2x" />
            </Button>
          )} */}
        </div>

        <Outlet
          context={{
            data: { booking_id: state.booking_id, ...state.formData },
            stage: state.stage,
          }}
        />
      </FormContextProvider>
      )}

      
    </Main>
  );
};
