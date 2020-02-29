import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  text: faker.lorem.sentences(2),
  user_id: faker.random.uuid(),
  user_username: faker.internet.userName(),
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  user_avatar: {
    i: faker.internet.avatar()
  }
});
