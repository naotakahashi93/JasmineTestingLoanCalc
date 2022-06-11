
it('should calculate the monthly rate correctly', function () {
  // ...

  const values = {
    amount: 10000,
    years: 7,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('139.00');

});


it('should calculate the monthly rate correctly', function () {
  // ...

  const values = {
    amount: 500000,
    years: 30,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('2245.22');

});


it("should return a result with 2 decimal places", function() {
  // ..

  const values = {
    amount: 500000,
    years: 30,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('2245.22');
});

/// etc
