import request from 'supertest'
import httpStatus from 'http-status'
import app from '../../index'

describe('## Audits APIs', () => {
  let storeID = 'e42r33'
  let storeAuditsResult = [
    {
      _id: '5a6efca33a437015e2bdb36b',
      storeId: 'e42r33',
      module: 'Furniture',
      question: 'carpet washed?',
      auditor: 'lekha',
      status: 'open',
      auditedDate: '2018-01-12T06:49:53.773Z',
      __v: 0,
      events: [
        {
          note: 'just some thing',
          status: 'open',
          _id: '5a6f1c6451a6471ae4c651a3',
          createdDate: '2018-01-29T13:06:44.722Z',
        },
      ],
      createdDate: '2018-01-29T10:51:15.342Z',
    },
    {
      _id: '5a6f02016c43ef166ae3f195',
      storeId: 'e42r33',
      module: 'Food',
      question: 'Fridge not serviced?',
      auditor: 'lekha',
      status: 'open',
      auditedDate: '2018-01-13T06:49:53.773Z',
      __v: 0,
      events: [],
      createdDate: '2018-01-29T11:14:09.943Z',
    },
    {
      _id: '5a6f02296c43ef166ae3f196',
      storeId: 'e42r33',
      module: 'Furniture',
      question: 'Table cleaned?',
      auditor: 'lekha',
      status: 'open',
      auditedDate: '2018-01-13T06:49:53.773Z',
      __v: 0,
      events: [],
      createdDate: '2018-01-29T11:14:49.578Z',
    },
  ]

  describe('# GET /health-check', () => {
    it('should return OK', done => {
      request(app)
        .get('/health-check')
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.text).toBe('OK')
          done()
        })
        .catch(done)
    })
  })

  describe('# GET /audits/findStoreAudits/:storeId', () => {
    it('Should get list of all audits of that store', done => {
      request(app)
        .get(`/audits/findStoreAudits/${storeID}`)
        .expect(httpStatus.OK)
        .then(res => {
          console.log(':P:P:P')
          console.log(res.body)
          expect(res.body).toBe(storeAuditsResult)
          done()
        })
        .catch(done)
    })
  })
})
