import React, { useEffect, useState } from 'react';
import { withTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import BillingService from '../../../services/BillingService';

function BillingInformation() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = () => {
      BillingService.getBillingInformation()
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, []);

  const columns = [
    { title: 'Company Name', field: 'companyName' },
    { title: 'Country', field: 'country' },
    { title: 'Province', field: 'province' },
    { title: 'City', field: 'city' },
    { title: 'Address', field: 'address' },
    { title: 'Postal Code', field: 'postalCode' },
    { title: 'Email', field: 'email' },
  ];

  const options = {
    paging: false,
    columnsButton: true,
    exportButton: false,
    search: false,
    actionsColumnIndex: -1,
  };

  return (
    <MaterialTable
      columns={columns}
      options={options}
      data={data}
      title="Billing Information"
      editable={{
        // onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
        // }),
      }}
    />
  );
}

BillingInformation.propTypes = {
};

export default withTheme(BillingInformation);
