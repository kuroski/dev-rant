import Model, { attr, hasMany } from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr('string') username;
  @attr('string') avatar;
  @hasMany('rant') rants;
}
