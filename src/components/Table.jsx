import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
    root: {
        '&:nth-of-type(even)': {
            fontWeight: "bold",
            textAlignLast: "center",
        },
    },
    head: {
        backgroundColor: "#bebebe",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#3f51b51c",
            //fontVariant: "unicase"
        },
    },
}))(TableRow);

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        textAlign: ""
    },
}));

export default function CustomizedTables(props) {
    const classes = useStyles();

    let rows = props.items;

    return (
        <Paper style={{ maxHeight: '265px', overflow: 'auto' }} className={classes.root}>
            <Table className={classes.table} aria-label="customized table">
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={Math.random()}>
                            {row.map(field => (
                                <StyledTableCell key={Math.random()} component="th" scope="row">
                                    {field.field}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
