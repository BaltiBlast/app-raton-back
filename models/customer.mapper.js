const CoreMapper = require("./core.mapper");
const customerSchema = require("../schemas/customers.schema");

class CustomerMapper extends CoreMapper {
  customer = this.mongoose.model("Customer", customerSchema);

  async addCustomer(customerData) {
    const newCustomer = new this.customer(customerData);
    return await newCustomer.save();
  }
}

module.exports = CustomerMapper;
