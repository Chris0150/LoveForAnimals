import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  let type = props.type;
  let labelDate;
  let labelTime;

  if (type === "Inicial") {
    labelDate = "Fecha de llegada"; labelTime = "Hora de llegada";
  }

  if (type === "Final") {
    labelDate = "Fecha de recogida"; labelTime = "Hora de recogida";
  }

  return (


    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container style={{display: "contents"}} justify="space-around">
        {/* <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label={labelDate}
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'cambiar fecha',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label={labelTime}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'cambiar hora',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
