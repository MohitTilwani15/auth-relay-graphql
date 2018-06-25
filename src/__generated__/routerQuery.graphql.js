/**
 * @flow
 * @relayHash 486053959e590aa65a3f99faff78880a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Header$ref = any;
export type routerQueryVariables = {||};
export type routerQueryResponse = {|
  +$fragmentRefs: Header$ref
|};
*/


/*
query routerQuery {
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
  "name": "routerQuery",
  "id": null,
  "text": "query routerQuery {\n  ...Header\n}\n\nfragment Header on RootQueryType {\n  user {\n    id\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "routerQuery",
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
    "name": "routerQuery",
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
(node/*: any*/).hash = '429e4d3d7cbc73a80e27393903e52a82';
module.exports = node;
