/**
 * @flow
 * @relayHash 96a294e6186168e13b03facf5a40f6c2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Header$ref = any;
export type HomePageQueryVariables = {||};
export type HomePageQueryResponse = {|
  +$fragmentRefs: Header$ref
|};
*/


/*
query HomePageQuery {
  ...Header
}

fragment Header on RootQueryType {
  user {
    id
    email
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "HomePageQuery",
  "id": null,
  "text": "query HomePageQuery {\n  ...Header\n}\n\nfragment Header on RootQueryType {\n  user {\n    id\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HomePageQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Header",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomePageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "UserType",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '5cfe56afda44d8136066e31ea81d29bb';
module.exports = node;
