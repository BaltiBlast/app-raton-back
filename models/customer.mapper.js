const CoreMapper = require("./core.mapper");
const customerSchema = require("../schemas/customers.schema");

class CustomerMapper extends CoreMapper {
  customer = this.mongoose.model("Customer", customerSchema);
}

module.exports = CustomerMapper;
