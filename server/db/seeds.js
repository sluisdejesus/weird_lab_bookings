use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "John",
    email_address: "john@gmail.com",
    checked_in_status: "Yes"
  },
  {
    name: "Zsolt",
    email_address: "zsolt@gmail.com",
    checked_in_status: "Yes"
  },
  {
    name: "Juan",
    email_address: "juan@gmail.com",
    checked_in_status: "No"
  }
]);