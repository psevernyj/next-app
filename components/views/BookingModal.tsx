import React, { FC, useState } from 'react';

const BookingModal: FC = (): JSX.Element => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className={'bookingModal'}>
      <div className={'backdropShadow'} />
      <div className={'modalContent'}>
        <button className={'closeButton'}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.31456 6.58065L6.43934 6.43934C6.98007 5.89861 7.83091 5.85702 8.41935 6.31456L8.56066 6.43934L18 15.8775L27.4393 6.43934C28.0251 5.85355 28.9749 5.85355 29.5607 6.43934C30.1464 7.02513 30.1464 7.97487 29.5607 8.56066L20.1225 18L29.5607 27.4393C30.1014 27.9801 30.143 28.8309 29.6854 29.4193L29.5607 29.5607C29.0199 30.1014 28.1691 30.143 27.5807 29.6854L27.4393 29.5607L18 20.1225L8.56066 29.5607C7.97487 30.1464 7.02513 30.1464 6.43934 29.5607C5.85355 28.9749 5.85355 28.0251 6.43934 27.4393L15.8775 18L6.43934 8.56066C5.89861 8.01993 5.85702 7.16909 6.31456 6.58065Z"
              fill="#383680"
            />
          </svg>
        </button>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://outlook.office365.com/owa/calendar/UDSSYSTEMSLTD@uds.systems/bookings/"
        ></iframe>
      </div>
    </div>
  );
};

export default BookingModal;
