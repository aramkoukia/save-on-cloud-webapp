import React, { useEffect, useState } from 'react';
import { withTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import SubscriptionService from '../../../services/SubscriptionService';

function SubscriptionTable() {
  const [subscriptionData, setSubscriptionData] = useState([]);
  const columns = [
    { title: 'Subscription Id', field: 'subscriptionId' },
    { title: 'Subscription Name', field: 'subscriptionName' },
    { title: 'Latest Bill', field: 'latestBill' },
    { title: 'Current Cycle Spending', field: 'currentCycleSpending' },
  ];

  const fetchData = () => {
    SubscriptionService.getSubscriptions()
      .then((result) => {
        setSubscriptionData(result);
      });
  };

  useEffect(() => {
    fetchData(subscriptionData);
  }, [subscriptionData.length]);

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
      data={subscriptionData}
      title="Cloud Accounts"
    />
  );
}

SubscriptionTable.propTypes = {
};

export default withTheme(SubscriptionTable);
