import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: "49%",
    marginTop: 10,
    marginRight: 3,
    backgroundColor: "#ffffff4f"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputLabel: {
    padding: 15
  },
  select: {
    paddingLeft: 15,
    paddingTop: 10
  }
}));

export default function SimpleSelect(props) {
  const classes = useStyles();

  return (
    <div>
      {props.filters.map((filter, index) => (
          <FormControl key={index} className={classes.formControl}>
            <InputLabel className={classes.inputLabel}>{filter.filter}</InputLabel>
            <NativeSelect
              className={classes.select}
              defaultValue=""
              input={<Input />}>
              {filter.items.split("|").map((item, index) => (
                <option key={index} value={index}>{item}</option>
              ))}
            </NativeSelect>
          </FormControl>
        )
        )}
    </div>
  )
}
