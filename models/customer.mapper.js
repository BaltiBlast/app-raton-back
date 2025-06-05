const CoreMapper = require("./core.mapper");
const customerSchema = require("../schemas/customers.schema");

class CustomerMapper extends CoreMapper {
  customer = this.mongoose.model("Customer", customerSchema);

  async addCustomer(customerData) {
    const newCustomer = new this.customer(customerData);
    return await newCustomer.save();
  }

  async updateCustomer(customerId, updateCustomerData) {
    return await this.customer.findByIdAndUpdate(customerId, updateCustomerData, {
      new: true,
      runValidators: true,
    });
  }

  async deleteCustomerById(customerId) {
    return await this.customer.findByIdAndDelete(customerId);
  }
}

module.exports = CustomerMapper;
