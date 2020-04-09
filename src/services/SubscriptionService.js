// import RestUtilities from './RestUtilities';

export default class SubscriptionService {
  static async getSubscriptions() {
    return [
      {
        subscriptionId: '12d49995-160d-4f6d-99e8-d71cd9a6d263',
        subscriptionName: 'Enterprise Agreement',
        latestBill: 16000,
        currentCycleSpending: 8000,
      },
      {
        subscriptionId: 'aff4ad01-a803-472e-9b5e-a7dc238cb512',
        subscriptionName: 'Spark Agreement',
        latestBill: 19000,
        currentCycleSpending: 3000,
      },
      {
        subscriptionId: '8df4808a-361b-45e0-8bd1-31804727476f',
        subscriptionName: 'Dev/Test Subscription',
        latestBill: 15000,
        currentCycleSpending: 3000,
      },
      {
        subscriptionId: 'b1fac5a7-1b95-472a-b20f-11739881a246',
        subscriptionName: 'Production Subscription',
        latestBill: 125000,
        currentCycleSpending: 2322,
      },
    ];
    // try {
    //   const response = await RestUtilities.get(
    //     'azure/cost',
    //   );
    //   return response.content;
    // } catch (err) {
    //   return false;
    // }
  }
}
