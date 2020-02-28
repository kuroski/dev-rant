import Model, { attr } from '@ember-data/model';

export default class RantModel extends Model {
  @attr('string') text;
  @attr('string') author;
}
