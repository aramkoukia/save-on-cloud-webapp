import React, { useEffect, useState } from 'react';
import { withTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import BillingService from '../../../services/BillingService';

function PaymentHistoryTable() {
  const [data, setData] = useState([]);
  const columns = [
    { title: 'Date', field: 'date' },
    { title: 'Plan', field: 'plan' },
    { title: 'Amount $', field: 'amount' },
  ];

  const fetchData = () => {
    BillingService.getPaymentHistory()
      .then((result) => {
        setData(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const options = {
    paging: true,
    pageSizeOptions: [5, 10, 50],
    pageSize: 5,
    columnsButton: true,
    exportButton: true,
    filtering: true,
    search: true,
  };

  return (
    <MaterialTable
      columns={columns}
      options={options}
      data={data}
      title="Payment History"
    />
  );
}

PaymentHistoryTable.propTypes = {
};

export default withTheme(PaymentHistoryTable);
