import { Factory } from 'ember-cli-mirage';
import faker from "faker";

export default Factory.extend({
  username: faker.internet.email(),
  password: '123',
  key: faker.random.uuid()
});
