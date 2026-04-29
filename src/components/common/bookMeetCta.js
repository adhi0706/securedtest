const BookMeetCta = () => {
  return (
    <button
      onClick={() =>
        window.open("https://calendar.app.google/DwaR8QDDAotwnafu5")
      }
      className=" fixed bottom-4 right-4 w-12 h-12 bg-tertiary flex justify-center items-center   rounded-full "
    >
      <img
        className="w-6 h-6 bg-tertiary"
        src="/assets/images/google-calendar-icon.svg"
      />
    </button>
  );
};

export default BookMeetCta;
