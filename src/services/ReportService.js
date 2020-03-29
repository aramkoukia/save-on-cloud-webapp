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
}
