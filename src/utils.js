/* eslint-disable no-alert */
/* globals fetch alert */

import { isEmpty } from "lodash";

export const serializeData = data => {
  // Serialize data to array and return JSON

  const serializedData = [];
  Object.keys(data).forEach(key => serializedData.push(data[key]));

  return JSON.stringify(serializedData);
};

/*
* This method simulates a request to server
* - payload - a data, which will be serialized and send to the server
* */
export const saveToServer = payload => {
  if (isEmpty(payload)) {
    alert("Payload must be not empty");
    return undefined;
  }

  return fetch("#", { method: "post", body: serializeData(payload) })
    .then(response => {
      if (response.ok) {
        setTimeout(() => {
          alert("Success! Your order has sent to server");
        }, 1500);
      } else {
        throw new Error("Fail! Please try one more time or wait");
      }
    })
    .catch(error =>
      setTimeout(() => {
        alert(error);
      }, 1500)
    );
};
