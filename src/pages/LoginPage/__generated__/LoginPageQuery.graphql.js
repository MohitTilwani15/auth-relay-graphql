/**
 * @flow
 * @relayHash f602736b21e1981542b6afe8c55f6e35
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Header$ref = any;
export type LoginPageQueryVariables = {||};
export type LoginPageQueryResponse = {|
  +$fragmentRefs: Header$ref
|};
*/


/*
query LoginPageQuery {
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
  "name": "LoginPageQuery",
  "id": null,
  "text": "query LoginPageQuery {\n  ...Header\n}\n\nfragment Header on RootQueryType {\n  user {\n    id\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LoginPageQuery",
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
    "name": "LoginPageQuery",
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
(node/*: any*/).hash = 'd98c98f24fd21661d84bbdfb03063ad1';
module.exports = node;
