import classes from "../pages/MainNavigation/MainNavigation.module.css"

export function DarkSvg({ onclick }) {
  return (
    <button onClick={onclick} className={classes["svg-button"]}>
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 15.00 15.00"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" ></g>
        <g
          id="SVGRepo_tracerCarrier"
         
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path d="M7 0V2H8V0H7Z" fill="#000000"></path>{" "}
          <path
            d="M3.35355 3.64645L1.85355 2.14645L1.14645 2.85355L2.64645 4.35355L3.35355 3.64645Z"
            fill="#000000"
          ></path>{" "}
          <path
            d="M12.3536 4.35355L13.8536 2.85355L13.1464 2.14645L11.6464 3.64645L12.3536 4.35355Z"
            fill="#000000"
          ></path>{" "}
          <path
            d="M7.49998 3C5.52977 3 3.85938 4.44872 3.58075 6.39913L3.5707 6.46949C3.41148 7.58398 3.73042 8.64543 4.36009 9.45895C4.74345 9.95426 5 10.427 5 10.9013V12.5C5 12.7761 5.22386 13 5.5 13H9.5C9.77614 13 10 12.7761 10 12.5V10.9013C10 10.427 10.2565 9.95423 10.6399 9.45893C11.2696 8.64541 11.5885 7.58397 11.4293 6.4695L11.4192 6.39914C11.1406 4.44873 9.4702 3 7.49998 3Z"
            fill="#000000"
          ></path>{" "}
          <path d="M0 8H2V7H0V8Z" fill="#000000"></path>{" "}
          <path d="M13 8H15V7H13V8Z" fill="#000000"></path>{" "}
          <path d="M6 15H9V14H6V15Z" fill="#000000"></path>{" "}
        </g>
      </svg>
    </button>
  );
}
