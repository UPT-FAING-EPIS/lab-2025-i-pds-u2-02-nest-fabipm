import { Validator } from './validator';
import { Customer } from './customer';

describe('Validator', () => {
  let validator: Validator;
  let customer: Customer;

  beforeEach(() => {
    validator = new Validator();
    customer = new Customer();
    customer.Name = 'John Doe';
    customer.Email = 'john.doe@example.com';
    customer.MobileNumber = '1234567890';
    customer.Address = '123 Main St';
    customer.Password = 'password123';
  });

  it('should return true for a valid customer', () => {
    expect(validator.ValidateCustomer(customer)).toBe(true);
  });

  it(`should throw an error if name is empty`, () => {
    customer.Name = ' ';
    expect(() => validator.ValidateCustomer(customer)).toThrow("Name can't be null or empty");
  });

  it(`should throw an error if email is empty`, () => {
    customer.Email = ' ';
    expect(() => validator.ValidateCustomer(customer)).toThrow("Email can't be null or empty");
  });

  it(`should throw an error if mobile number is empty`, () => {
    customer.MobileNumber = ' ';
    expect(() => validator.ValidateCustomer(customer)).toThrow("MobileNumber can't be null or empty");
  });

  it(`should throw an error if address is empty`, () => {
    customer.Address = ' ';
    expect(() => validator.ValidateCustomer(customer)).toThrow("Address can't be null or empty");
  });

  it('should throw an error if password is less than 8 characters', () => {
    customer.Password = '123';
    expect(() => validator.ValidateCustomer(customer)).toThrow('Password must be at least 8 characters long');
  });
});