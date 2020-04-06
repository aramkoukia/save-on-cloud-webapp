import React from 'react';
import { withTheme } from '@material-ui/core';
import MaterialTable from 'material-table';

function SubscriptionTable() {
  const [azureCost, setAzureCost] = React.useState([]);
  const columns = [
    { title: 'Subscription Id', field: 'subscriptionId' },
    { title: 'Subscription Name', field: 'subscriptionName' },
    { title: 'Latest Bill', field: 'latestBill' },
    { title: 'Current Cycle Spending', field: 'currentCycleSpending' },
  ];

  const options = {
    paging: true,
    pageSizeOptions: [25, 50, 100],
    pageSize: 25,
    columnsButton: true,
    exportButton: true,
    filtering: true,
    search: true,
  };

  return (
    <MaterialTable
      columns={columns}
      options={options}
      data={azureCost}
      title="Cloud Accounts"
    />
  );
}

SubscriptionTable.propTypes = {
};

export default withTheme(SubscriptionTable);
