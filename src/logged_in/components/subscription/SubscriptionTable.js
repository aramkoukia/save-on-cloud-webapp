import React, { useEffect, useState } from 'react';
import { withTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import SubscriptionService from '../../../services/SubscriptionService';

function SubscriptionTable() {
  const [subscriptionData, setSubscriptionData] = useState([]);
  const columns = [
    {
      title: 'Cloud Provider',
      field: 'cloudProvider',
      // defaultGroupOrder: 0
    },
    { title: 'Subscription Id', field: 'subscriptionId' },
    { title: 'Subscription Name', field: 'subscriptionName' },
    { title: 'Tenant Name', field: 'tenantName' },
    { title: 'Latest Bill', field: 'latestBill' },
    { title: 'Current Cycle Spending', field: 'currentCycleSpending' },
    { title: 'Current Cycle Forecast', field: 'currentCycleForecast' },
  ];

  const fetchData = () => {
    SubscriptionService.getSubscriptions()
      .then((result) => {
        setSubscriptionData(result);
      });
  };

  useEffect(() => {
    fetchData(subscriptionData);
  }, []);

  const options = {
    paging: true,
    pageSizeOptions: [5, 10, 50],
    pageSize: 5,
    columnsButton: true,
    exportButton: true,
    filtering: true,
    search: true,
    actionsColumnIndex: -1,
    // grouping: true,
  };

  return (
    <MaterialTable
      columns={columns}
      options={options}
      data={subscriptionData}
      title="Cloud Accounts"
      actions={[
        {
          icon: 'delete',
          tooltip: 'Delete Account',
          onClick: (event, rowData) => alert(`Deleted ${rowData.subscriptionName}`),
        },
      ]}
    />
  );
}

SubscriptionTable.propTypes = {
};

export default withTheme(SubscriptionTable);
