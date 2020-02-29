import Model, { attr, belongsTo } from '@ember-data/model';

export default class RantModel extends Model {
  @attr('string') text;
  @belongsTo('author') author;
}
