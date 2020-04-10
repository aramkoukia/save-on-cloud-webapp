import RestUtilities from './RestUtilities';

export default class ReportService {
  static async getAzureCost() {
    try {
      const response = await RestUtilities.get(
        'azure/cost',
      );
      return response.content;
    } catch (err) {
      return false;
    }
  }

  static async getAzureCostDaily() {
    return [{ date: '3/15/2020', value: '5.208354518656' }, { date: '3/16/2020', value: '5.208354553831474' }, { date: '3/17/2020', value: '5.208354851856' }, { date: '3/18/2020', value: '5.208366491923044' }, { date: '3/19/2020', value: '5.208362839057691' }, { date: '3/20/2020', value: '5.621073600784793' }, { date: '3/21/2020', value: '6.560061831205427' }, { date: '3/22/2020', value: '9.481388726093621' }, { date: '3/23/2020', value: '9.503393817049536' }, { date: '3/24/2020', value: '9.503175161658788' }, { date: '3/25/2020', value: '9.503968625675322' }, { date: '3/26/2020', value: '9.502881485459846' }, { date: '3/27/2020', value: '9.515279956269771' }, { date: '3/28/2020', value: '9.235172790848698' }, { date: '3/29/2020', value: '4.890549962671144' }, { date: '3/30/2020', value: '6.634572721631483' }, { date: '3/31/2020', value: '6.634191978239234' }, { date: '4/1/2020', value: '6.637530328688948' }, { date: '4/10/2020', value: '0.212371979429586' }, { date: '4/2/2020', value: '6.646456190186201' }, { date: '4/3/2020', value: '6.296717531755086' }, { date: '4/4/2020', value: '3.434036772220257' }, { date: '4/5/2020', value: '3.428700009121728' }, { date: '4/6/2020', value: '3.427395894807661' }, { date: '4/7/2020', value: '3.425507540914198' }, { date: '4/8/2020', value: '3.425879725716732' }, { date: '4/9/2020', value: '3.330645606835135' }];
    // try {
    //   const response = await RestUtilities.get(
    //     'azure/cost/daily',
    //   );
    //   return response.content;
    // } catch (err) {
    //   return false;
    // }
  }

  static async getMostExpensiveResources() {
    return [
      {
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'App Service',
        resourceName: 'Lights and Parts Web App',
        dateCreated: '10/04/2020',
        avgDailyCost: 30.50,
        avgMonthlyCost: 1120,
      },
      {
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'Azure SQL Server',
        resourceName: 'Lights and Parts Server',
        dateCreated: '10/04/2020',
        avgDailyCost: 12.90,
        avgMonthlyCost: 600,
      },
      {
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'Azure SQL DB',
        resourceName: 'Lights and Parts DB',
        dateCreated: '10/04/2020',
        avgDailyCost: 19.90,
        avgMonthlyCost: 700,
      },
      {
        subscriptionName: 'Production Agreement',
        resourceType: 'Function App',
        resourceName: 'Test Function Serverless',
        dateCreated: '10/04/2020',
        avgDailyCost: 18.90,
        avgMonthlyCost: 30,
      },
      {
        subscriptionName: 'Dev/Test Subscription',
        resourceType: 'Storage Account',
        resourceName: 'Save On Cloud Blob Storage',
        dateCreated: '10/04/2020',
        avgDailyCost: 19.90,
        avgMonthlyCost: 600,
      },
    ];
  }
}
