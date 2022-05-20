import nock from 'nock'
import mockData from 'components/MapDetail/mockData'
import { getSubjects } from './client'
import { config } from '../config'

describe('successful response of subjects data', () => {
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

  beforeAll(() => {
    const scope = nock(config.dbEndpoint)
      .persist()
      .get(`/subjects`)
      .query({
        minLat: coordinates.southWest.lat,
        minLon: coordinates.southWest.lng,
        maxLat: coordinates.northEast.lat,
        maxLon: coordinates.northEast.lng,
      })
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

describe('missing coordinates when fetching subject data', () => {
  const coordinates = {
    northEast: {
      lat: -51.4,
      lng: -59.5,
    },
    southWest: {
      lat: -52,
      lng: '',
    },
  }

  let response
  let thrownError
  beforeAll(async () => {
    const scope = nock(config.dbEndpoint)
      .persist()
      .get(`/subjects`)
      .query({
        minLat: coordinates.southWest.lat,
        minLon: coordinates.southWest.lng,
        maxLat: coordinates.northEast.lat,
        maxLon: coordinates.northEast.lng,
      })
      .replyWithError(
        'Missing one of parameters: minLat, maxLat, minLon, maxLon'
      )
    try {
      response = await getSubjects(coordinates)
    } catch (error) {
      thrownError = error
    }
  })

  afterAll(() => {
    nock.cleanAll()
  })

  it('should return an error and no subjects', () => {
    expect(response.message).toEqual('subjects client error')
  })
})
