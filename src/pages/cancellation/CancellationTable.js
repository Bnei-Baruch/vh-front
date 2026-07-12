import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    overflowX: 'auto',
  },
  headerCell: {
    backgroundColor: '#4a90c8',
    color: '#ffffff',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(14),
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
  },
  bodyCell: {
    fontSize: theme.typography.pxToRem(13),
    lineHeight: 1.6,
    verticalAlign: 'top',
    '& a': {
      color: '#2F6FB0',
    },
  },
}))

const COLUMN_WIDTHS = ['18%', '25%', '25%', '32%']

function CancellationTable({ columns, rows }) {
  const classes = useStyles()
  const { i18n } = useTranslation('common')
  const textAlign = i18n.language === 'il' ? 'right' : 'left'

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table size="small">
        <colgroup>
          {COLUMN_WIDTHS.map((w, i) => (
            <col key={i} style={{ width: w }} />
          ))}
        </colgroup>
        <TableHead>
          <TableRow>
            {columns.map((col, i) => (
              <TableCell key={i} className={classes.headerCell} style={{ textAlign }}>
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              {row.map((cell, j) => (
                <TableCell key={j} className={classes.bodyCell} style={{ textAlign }}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CancellationTable
