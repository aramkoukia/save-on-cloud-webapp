import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import { MaterialTable } from 'material-table';
// import ReportService from '../../../services/ReportService';


function MostExpensiveResources(props) {
  // const [azureCost, setAzureCost] = React.useState([]);
  const { selectMostExpensiveResources } = props;
  selectMostExpensiveResources();
  // setAzureCost([]);
  // ReportService.getAzureCost()
  //   .then((result) => {
  //     setAzureCost(result);
  //   });

  // const columns = [
  //   { title: 'Order Id', field: 'orderId' },
  //   { title: 'Order Date', field: 'orderDate' },
  //   { title: 'Sub Total', field: 'subTotal' },
  //   { title: 'Total', field: 'total' },
  //   { title: 'PO Number', field: 'poNumber' },
  //   { title: 'Paid Amount', field: 'paidAmount' },
  //   {
  //     title: 'Payment Type',
  //     field: 'paymentTypeName',
  //   },
  //   { title: 'Due Date', field: 'dueDate' },
  //   { title: 'Company Name', field: 'companyName' },
  // ];

  // const options = {
  //   paging: true,
  //   pageSizeOptions: [25, 50, 100],
  //   pageSize: 25,
  //   columnsButton: true,
  //   exportButton: true,
  //   filtering: true,
  //   search: true,
  // };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        Most Expensive Resources
        {/* <MaterialTable
          columns={[
            { title: 'Adı', field: 'name' },
            { title: 'Soyadı', field: 'surname' },
            { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
            {
              title: 'Doğum Yeri',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]}
          data={[
            {
              name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63,
            },
          ]}
          title="Demo Title"
        /> */}
      </Grid>
    </Grid>
  );
}

MostExpensiveResources.propTypes = {
  selectMostExpensiveResources: PropTypes.func,
};

MostExpensiveResources.defaultProps = {
  selectMostExpensiveResources: () => {},
};

export default MostExpensiveResources;
