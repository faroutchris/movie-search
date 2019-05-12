const checkServerResponse = res => {
  if (res.ok) {
    return res;
  } else {
    let error = new Error(`Request rejected with status ${res.status}`);
    error.code = res.status;
    throw error;
  }
};

const readResponse = res => {
  return res.json();
};

const handleNoContent = res => {
  if (res.status === 204) {
    throw new Error(`204 No content`);
  }

  if (res.status === 404) {
    throw new Error(`404 Not found`);
  }

  return res;
};

export const createURLWithParams = (baseUrl, params = {}) => {
  const paramKeys = Object.keys(params);
  const paramList = [];

  for (let i = 0; i < paramKeys.length; i++) {
    const key = paramKeys[i];
    let value = params[key];

    const isNotPrimitive = Array.isArray(value) || value === Object(value);
    const isDefined = value !== null || value !== undefined;

    if (isDefined) {
      if (isNotPrimitive) {
        value = JSON.stringify(value);
      }

      paramList.push(key + "=" + value);
    }
  }

  if (paramList.length > 0) {
    const paramString = "?" + paramList.join("&");
    return baseUrl + paramString;
  }

  return baseUrl;
};

export const apport = {
  get(url, params = null) {
    if (params) {
      url = createURLWithParams(url, params);
    }

    return fetch(url)
      .then(checkServerResponse)
      .then(handleNoContent)
      .then(readResponse);
  }
};
