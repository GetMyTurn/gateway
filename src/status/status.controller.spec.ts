import { StatusController } from './status.controller';
import { StatusService } from './status.service';

describe('Status controller', () => {
  let statusService: StatusService
  let statusController: StatusController

  beforeEach(()=> {
    statusService = new StatusService()
    statusController = new StatusController(statusService)
  })

  describe('getStatus', () => {
    it(`Should return a 'Ok' text`, async() => {
      const result = 'test'
      jest.spyOn(statusService, "getStatus").mockImplementation(() => result)

      expect(await statusController.status()).toBe(result)
    })
  })
})

