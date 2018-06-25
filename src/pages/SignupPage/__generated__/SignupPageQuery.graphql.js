/**
 * @flow
 * @relayHash bb8fb187a5edb8f7ed2368632beb6c64
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Header$ref = any;
export type SignupPageQueryVariables = {||};
export type SignupPageQueryResponse = {|
  +$fragmentRefs: Header$ref
|};
*/


/*
query SignupPageQuery {
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
  "name": "SignupPageQuery",
  "id": null,
  "text": "query SignupPageQuery {\n  ...Header\n}\n\nfragment Header on RootQueryType {\n  user {\n    id\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SignupPageQuery",
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
    "name": "SignupPageQuery",
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
(node/*: any*/).hash = 'c44c94f5546b90c2c86675e35e44ad3d';
module.exports = node;
