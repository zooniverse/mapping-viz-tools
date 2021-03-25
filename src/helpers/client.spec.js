import nock from 'nock'
import mockData from 'components/MapDetail/mockData'
import { getSubjects } from './client'
import { config } from '../config'

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
  }

  const minLat = coordinates.southWest.lat
  const maxLat = coordinates.northEast.lat
  const minLon = coordinates.southWest.lng
  const maxLon = coordinates.northEast.lng

  beforeAll(() => {
    const scope = nock(config.dbEndpoint)
      .persist()
      .get(`/subjects`)
      .query({ minLat, minLon, maxLat, maxLon })
      .reply(200, mockData, { 'Access-Control-Allow-Origin': '*' })
  })

  afterAll(() => {
    nock.cleanAll()
  })

  it('should return a subjects response', async () => {
    const response = await getSubjects(coordinates)
    expect(response[0]).toEqual(mockData[0])
  })
})

// add tests for various error responses from mapping-viz-functions
