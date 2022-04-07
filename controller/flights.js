import { Flight } from "../models/flight.js";

function index(req, res) {
  Flight.find({}, function(err, flights){
    res.render("flights/index", {
      err: err,
      flights: flights,
      title: "All Flights"
    })
  })
};

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight",
  })
};

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  // req.body.nowShowing = !!req.body.nowShowing;
  // replace and split if it's not an empty string
  // if (req.body.route) {
  //   // remove whitespace next to commas
  //   req.body.route = req.body.route;
  // }
  // delete empty properties
  
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.render("flights/new");
    res.redirect("/flights"); // update this line
  });
};

export {
  index,
newFlight as new,
create
}
