---
title: Accounts Management
tags:
  - REST API
  - Action
---

## Get user information

```shell
curl "https://app.sclab.io/api/1/user/get?_userId=jJpp2WfD7yp7y2cEk" \
  -H "Authorization: APITokenHere" \
  -H "Content-Type: application/json"

or
  
curl "https://app.sclab.io/api/1/user/get?email=test@sclab.io" \
  -H "Authorization: APITokenHere" \
  -H "Content-Type: application/json"
```

> The above command returns JSON structured like this:

```json
{
  "result": {
    "_userId": "jJpp2WfD7yp7y2cEk",
    "email": "test@sclab.io",
    "name": "tester",
    "phone": "01012341234",
    "address": "seoul"
  }
}
```

This endpoint get user information.

### HTTP Request

`GET https://app.sclab.io/api/1/user/get`

### JSON Parameters

Parameter | Required | Description
-- | -- | -- |
_userId | N | User id
email | N | Email

## Create new account

```shell
curl "https://app.sclab.io/api/1/user/create" \
  -X POST \
  -H "Authorization: APITokenHere" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"email@address.com\", \"password\": \"password string\", \"name\": \"user name\"}"
```

> The above command returns JSON structured like this:

```json
{
  "result": {
    "_userId": "aspfokgwegoepwk",
    "status": "user created"
  }
}
```

This endpoint creates new site user account.

### HTTP Request

`POST https://app.sclab.io/api/1/user/create`

### JSON Parameters

Parameter | Required | Description 
-- | -- | -- | 
email | Y | User email address
password | Y | User password
name | Y | User's name
phone | N | User phone number
address | N | User address

## Update account profile

```shell
curl "https://app.sclab.io/api/1/user/update" \
  -X POST \
  -H "Authorization: APITokenHere" \
  -H "Content-Type: application/json" \
  -d "{\"name\": \"user name\"}"
```

> The above command returns JSON structured like this:

```json
{
  "result": {
    "status": "user updated"
  }
}
```

This endpoint update site user account profile [name, phone, address].

### HTTP Request

`POST https://app.sclab.io/api/1/user/create`

### JSON Parameters

Parameter | Required | Description
-- | -- | -- |
_userId | Y | User id
name | N | User's name
phone | N | User phone number
address | N | User address
password | N | User's password


## Delete user from site

```shell
curl "https://app.sclab.io/api/1/user/delete" \
  -X DELETE \
  -H "Authorization: APITokenHere" \
  -H "Content-Type: application/json" \
  -d "{\"_userId\": \"user id\"}"
```

> The above command returns JSON structured like this:

```json
{
  "result": {
    "status": "user removed"
  }
}
```

This endpoint remove user from your site, but user account is not removed.

### HTTP Request

`DELETE https://app.sclab.io/api/1/user/delete`

### JSON Parameters

Parameter | Required | Description
-- | -- | -- |
_userId | Y | User id