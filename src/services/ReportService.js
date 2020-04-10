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
    try {
      const response = await RestUtilities.get(
        'azure/cost/daily',
      );
      return response.content;
    } catch (err) {
      return false;
    }
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
