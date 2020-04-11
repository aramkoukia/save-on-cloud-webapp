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

  static async getAzureCostDailyDetail() {
    return [
      {
        date: '3/15/2020',
        value: '5.208354518656',
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'App Service',
        resourceName: 'Lights and Parts Web App',
        cost: 99,
        avgDailyCost: 9.50,
      },
      {
        date: '3/15/2020',
        value: '5.208354518656',
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'App Service',
        resourceName: 'Lights and Parts Web App',
        cost: 55,
        avgDailyCost: 6,
      },
      {
        date: '3/15/2020',
        value: '5.208354518656',
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'App Service',
        resourceName: 'Lights and Parts Web App',
        cost: 45,
        avgDailyCost: 4.50,
      },
      {
        date: '3/15/2020',
        value: '5.208354518656',
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'App Service',
        resourceName: 'Lights and Parts Web App',
        cost: 85,
        avgDailyCost: 8.50,
      },
      {
        date: '3/15/2020',
        value: '5.208354518656',
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'App Service',
        resourceName: 'Lights and Parts Web App',
        cost: 90,
        avgDailyCost: 9,
      },
      {
        date: '3/15/2020',
        value: '5.208354518656',
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'App Service',
        resourceName: 'Lights and Parts Web App',
        cost: 122,
        avgDailyCost: 7.5,
      },
      {
        date: '3/15/2020',
        value: '5.208354518656',
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'App Service',
        resourceName: 'Lights and Parts Web App',
        cost: 150,
        avgDailyCost: 9.30,
      },
      {
        date: '3/15/2020',
        value: '5.208354518656',
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'App Service',
        resourceName: 'Lights and Parts Web App',
        cost: 166,
        avgDailyCost: 11,
      },
    ];
  }

  static async getAzureCostDaily() {
    return [{ date: '3/15/2020', value: '5.208354518656' }, { date: '3/16/2020', value: '5.208354553831474' }, { date: '3/17/2020', value: '5.208354851856' }, { date: '3/18/2020', value: '5.208366491923044' }, { date: '3/19/2020', value: '5.208362839057691' }, { date: '3/20/2020', value: '5.621073600784793' }, { date: '3/21/2020', value: '6.560061831205427' }, { date: '3/22/2020', value: '9.481388726093621' }, { date: '3/23/2020', value: '9.503393817049536' }, { date: '3/24/2020', value: '9.503175161658788' }, { date: '3/25/2020', value: '9.503968625675322' }, { date: '3/26/2020', value: '9.502881485459846' }, { date: '3/27/2020', value: '9.515279956269771' }, { date: '3/28/2020', value: '9.235172790848698' }, { date: '3/29/2020', value: '4.890549962671144' }, { date: '3/30/2020', value: '6.634572721631483' }, { date: '3/31/2020', value: '6.634191978239234' }, { date: '4/1/2020', value: '6.637530328688948' }, { date: '4/10/2020', value: '0.212371979429586' }, { date: '4/2/2020', value: '6.646456190186201' }, { date: '4/3/2020', value: '6.296717531755086' }, { date: '4/4/2020', value: '3.434036772220257' }, { date: '4/5/2020', value: '3.428700009121728' }, { date: '4/6/2020', value: '3.427395894807661' }, { date: '4/7/2020', value: '3.425507540914198' }, { date: '4/8/2020', value: '3.425879725716732' }, { date: '4/9/2020', value: '3.330645606835135' }];
  }

  static async getAzureCostDayOverDay() {
    return [{ date: '3/15/2020', value: '5.208354518656' }, { date: '3/16/2020', value: '6.208354553831474' }, { date: '3/17/2020', value: '9.208354851856' }, { date: '3/18/2020', value: '12.208366491923044' }, { date: '3/19/2020', value: '16.208362839057691' }, { date: '3/20/2020', value: '19.621073600784793' }, { date: '3/21/2020', value: '25.560061831205427' }, { date: '3/22/2020', value: '30.481388726093621' }, { date: '3/23/2020', value: '33.503393817049536' }, { date: '3/24/2020', value: '40.503175161658788' }, { date: '3/25/2020', value: '49.503968625675322' }, { date: '3/26/2020', value: '60.502881485459846' }, { date: '3/27/2020', value: '65.515279956269771' }, { date: '3/28/2020', value: '70.235172790848698' }, { date: '3/29/2020', value: '90.890549962671144' }, { date: '3/30/2020', value: '95.634572721631483' }, { date: '3/31/2020', value: '98.634191978239234' }, { date: '4/1/2020', value: '99.637530328688948' }];
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

  static async getMostExpensiveResourcesChart() {
    return [
      {
        name: '1/3/20', resource1: 4000, resource2: 2400, resource3: 3500, resource4: 0, resource5: 2344,
      },
      {
        name: '2/3/20', resource1: 3000, resource2: 1398, resource3: 2210, resource4: 0, resource5: 2344,
      },
      {
        name: '3/3/20', resource1: 2000, resource2: 9800, resource3: 2290, resource4: 0, resource5: 2344,
      },
      {
        name: '4/3/20', resource1: 2780, resource2: 3908, resource3: 2000, resource4: 0, resource5: 2344,
      },
      {
        name: '5/3/20', resource1: 1890, resource2: 4800, resource3: 2181, resource4: 0, resource5: 2344,
      },
      {
        name: '6/3/20', resource1: 2390, resource2: 3800, resource3: 2500, resource4: 0, resource5: 1232,
      },
      {
        name: '7/3/20', resource1: 3490, resource2: 4300, resource3: 3500, resource4: 6788, resource5: 1233,
      },
      {
        name: '8/3/20', resource1: 4500, resource2: 5455, resource3: 5500, resource4: 5677, resource5: 1233,
      },
      {
        name: '9/3/20', resource1: 2500, resource2: 9999, resource3: 6000, resource4: 2343, resource5: 2342,
      },
      {
        name: '10/3/20', resource1: 2000, resource2: 8852, resource3: 3900, resource4: 2344, resource5: 0,
      },
      {
        name: '11/3/20', resource1: 3490, resource2: 7788, resource3: 5500, resource4: 2133, resource5: 0,
      },
      {
        name: '12/3/20', resource1: 1250, resource2: 6500, resource3: 3500, resource4: 1233, resource5: 0,
      },
      {
        name: '13/3/20', resource1: 3500, resource2: 8800, resource3: 4500, resource4: 3433, resource5: 0,
      },
      {
        name: '14/3/20', resource1: 3660, resource2: 9000, resource3: 2336, resource4: 4544, resource5: 0,
      },
    ];
  }

  static async getAccountCostShare() {
    return [
      {
        name: 'Enterprise Agreement',
        value: 6000.50,
      },
      {
        name: 'Production Agreement',
        value: 9000.50,
      },
      {
        name: 'Dev/Test Subscription',
        value: 3500.00,
      },
      {
        name: 'Pay As You Go Account',
        value: 2000.50,
      },
      {
        name: 'Office 365 Agreement',
        value: 1200.50,
      },
      {
        name: 'Developer Subscription',
        value: 5000.50,
      },
    ];
  }

  static async getResourceTypeShare() {
    return [
      {
        name: 'Linux Virtual Machine',
        value: 21564.50,
      },
      {
        name: 'Windows Virtual Machine',
        value: 54654.50,
      },
      {
        name: 'Function App',
        value: 5456.00,
      },
      {
        name: 'Azure SQL',
        value: 54541.50,
      },
      {
        name: 'App Service',
        value: 5458.50,
      },
      {
        name: 'Blob Storage',
        value: 2122.50,
      },
      {
        name: 'CosmosDB',
        value: 9887.50,
      },
      {
        name: 'PostgresDB',
        value: 6500.50,
      },
    ];
  }

  static async getFastestGrowingResources() {
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
        subscriptionName: 'Dev/Test Subscription',
        resourceType: 'Storage Account',
        resourceName: 'Save On Cloud Blob Storage',
        dateCreated: '10/04/2020',
        avgDailyCost: 19.90,
        avgMonthlyCost: 600,
      },
    ];
  }

  static async getFastestGrowingResourcesChart() {
    return [
      {
        name: '1/3/20', resource1: 0, resource2: 0, resource3: 0, resource4: 0,
      },
      {
        name: '2/3/20', resource1: 0, resource2: 0, resource3: 0, resource4: 0,
      },
      {
        name: '3/3/20', resource1: 0, resource2: 0, resource3: 0, resource4: 0,
      },
      {
        name: '4/3/20', resource1: 0, resource2: 0, resource3: 0, resource4: 0,
      },
      {
        name: '5/3/20', resource1: 0, resource2: 0, resource3: 0, resource4: 0,
      },
      {
        name: '6/3/20', resource1: 0, resource2: 3800, resource3: 0, resource4: 0,
      },
      {
        name: '7/3/20', resource1: 0, resource2: 4300, resource3: 0, resource4: 6788,
      },
      {
        name: '8/3/20', resource1: 0, resource2: 5455, resource3: 5500, resource4: 5677,
      },
      {
        name: '9/3/20', resource1: 2500, resource2: 9999, resource3: 6000, resource4: 2343,
      },
      {
        name: '10/3/20', resource1: 2000, resource2: 8852, resource3: 3900, resource4: 2344,
      },
      {
        name: '11/3/20', resource1: 3490, resource2: 7788, resource3: 5500, resource4: 2133,
      },
      {
        name: '12/3/20', resource1: 1250, resource2: 6500, resource3: 3500, resource4: 1233,
      },
      {
        name: '13/3/20', resource1: 3500, resource2: 8800, resource3: 4500, resource4: 3433,
      },
      {
        name: '14/3/20', resource1: 3660, resource2: 9000, resource3: 2336, resource4: 4544,
      },
    ];
  }

  static async getUselessResources() {
    return [
      {
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'Logic App',
        resourceName: 'Test Logic Twitter',
        dateCreated: '10/04/2020',
        avgDailyCost: 12.50,
        avgMonthlyCost: 400,
      },
      {
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'Blob Storage',
        resourceName: 'Temp Blob storage account',
        dateCreated: '10/04/2020',
        avgDailyCost: 9.90,
        avgMonthlyCost: 270,
      },
      {
        subscriptionName: 'Enterprise Agreement',
        resourceType: 'Function App',
        resourceName: 'Testing Function App',
        dateCreated: '10/04/2020',
        avgDailyCost: 5.90,
        avgMonthlyCost: 150,
      },
      {
        subscriptionName: 'Production Agreement',
        resourceType: 'Function App',
        resourceName: 'Test Function Serverless',
        dateCreated: '10/04/2020',
        avgDailyCost: 18.90,
        avgMonthlyCost: 30,
      },
    ];
  }
}
