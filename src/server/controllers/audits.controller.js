import Audits from '../models/audits.model'

//create an Audit
function create(req, res, next) {
  var audit = new Audits(req.body)

  audit
    .save()
    .then(function() {
      return res.json(audit)
    })
    .catch(next)
}

// returns all Auddits
function allAudits(req, res, next) {
  Audits.find(function(err, result) {
    if (err) return handleError(err)
    return res.json(result)
  })
}

// returns all Audits with all events of an perticular store
function storeAuditsAllEvents(req, res, next) {
  console.log(req.params.storeId)

  Audits.find({ storeId: req.params.storeId }, function(err, result) {
    if (err) return handleError(err)
    return res.json(result)
  })
}

// returns all Audits with latest event of an perticular store
function storeAudits(req, res, next) {
  console.log(req.params.storeId)

  Audits.find({ storeId: req.params.storeId }, function(err, result) {
    if (err) return handleError(err)

    // console.log(result);

    var open = []
    var closed = []
    var missed = []

    for (var i = 0; i < result.length; i++) {
      result[i].events.splice(0, result[i].events.length - 1)

      if (result[i].status == 'open') {
        open.push(result[i])
      } else if (result[i].status == 'closed') {
        closed.push(result[i])
      } else if (result[i].status == 'Missed') {
        missed.push(result[i])
      }
    }

    var response = {
      open: open,
      closed: closed,
      missed: missed,
    }

    return res.json(response)
  })
}

// add events to an Audits
function addEvents(req, res, next) {
  // console.log(req.params.id);
  // console.log(req.body);
  var event = req.body

  Audits.findOneAndUpdate({ _id: req.params.id }, { $push: { events: event } }, { safe: true, upsert: true }, function(
    err,
    data,
  ) {
    console.log(err)
    if (!err) {
      console.log(data)
      return res.json(data)
    }
  })
}

export default { create, storeAuditsAllEvents, storeAudits, addEvents, allAudits }
