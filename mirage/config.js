import { Response } from 'ember-cli-mirage';

/* eslint-disable no-console */
export default function() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
  this.urlPrefix = "https://devrant.com/api";

  this.get("/devrant/rants", schema => {
    return schema.rants.all();
  });

  this.post("/users/auth-token", (schema, request) => {
    const { username, password } = JSON.parse(request.requestBody);

    const user = schema.findBy('user', { username, password });

    if (user) {
      return {
        "success": true,
        "auth_token": {
          "id": user.id,
          "key": user.key,
          "expire_time": 1585946791,
          "user_id": 30607
        }
      };
    } else {
      return new Response(400, {
        "errors": [
          {
            "status": 400,
            "detail": "Invalid login credentials entered. Please try again."
          }
        ]
      });
    }
  });
}
