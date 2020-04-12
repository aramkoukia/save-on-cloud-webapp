// import RestUtilities from './RestUtilities';

export default class SubscriptionService {
  static async getBillingInformation() {
    return [
      {
        companyName: 'Random Org Services Inc',
        address: '1111 WEST HASTINGS ST STE 500',
        country: 'Canada',
        province: 'BC',
        city: 'Vancouver',
        postalCode: 'V48 0CD',
        email: 'it@ramdomorg.ca',
      },
    ];
  }

  static async getPaymentHistory() {
    return [
      {
        date: '01/01/2020',
        plan: 'Free',
        amount: '0',
      },
      {
        date: '01/02/2020',
        plan: 'Free',
        amount: '0',
      },
      {
        date: '01/03/2020',
        plan: 'Standard',
        amount: '100',
      },
      {
        date: '01/04/2020',
        plan: 'Standard',
        amount: '100',
      },
      {
        date: '01/05/2020',
        plan: 'Standard',
        amount: '100',
      },
    ];
  }
}
