import * as React from "react";

import { DatePicker, DayOfWeek, mergeStyleSets } from "office-ui-fabric-react";

const DayPickerStrings = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],

  shortDays: ["S", "M", "T", "W", "T", "F", "S"],

  goToToday: "Go to today",
  prevMonthAriaLabel: "Go to previous month",
  nextMonthAriaLabel: "Go to next month",
  prevYearAriaLabel: "Go to previous year",
  nextYearAriaLabel: "Go to next year",
  closeButtonAriaLabel: "Close date picker",
  monthPickerHeaderAriaLabel: "{0}, select to change the year",
  yearPickerHeaderAriaLabel: "{0}, select to change the month",
};

const controlClass = mergeStyleSets({
  control: {
    margin: "auto",
    maxWidth: "300px",
  },
});

const Calendar = (props) => {
  const [firstDayOfWeek, setFirstDayOfWeek] = React.useState(DayOfWeek.Sunday);

  return (
    <div>
      <DatePicker
        label="Set Due date"
        className={controlClass.control}
        firstDayOfWeek={firstDayOfWeek}
        strings={DayPickerStrings}
        placeholder="Select a date..."
        ariaLabel="Select a date"
        allowTextInput
        onSelectDate={(e) => {
          var str =
            DayPickerStrings.days[e.getDay()] +
            "," +
            e.getDate() +
            " " +
            DayPickerStrings.months[e.getMonth()] +
            " " +
            e.getFullYear();
          props.onChange(str);
        }}
      />
    </div>
  );
};

export default Calendar;
