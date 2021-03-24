import nock from 'nock'
import mockData from 'components/MapDetail/mockData'
import { getSubjects } from './client'

const dbEndpoint = 'https://mapping-viz-functions-staging.azurewebsites.net/api'

describe('fetching subjects data', () => {
  const coordinates = {
    northEast: {
      lat: -51.4,
      lng: -59.5,
    },
    southWest: {
      lat: -52,
      lng: -60.7,
    },
    height: '100%',
    width: '100%',
  }

  const scope = nock(`${dbEndpoint}`).get(`/subjects`).reply(200, {
    data: mockData,
  })

  it('should return a subjects response', async () => {
    // const response = await getSubjects(coordinates)
    // expect(response.data[0]).toEqual(mockData[0])
  })
})
