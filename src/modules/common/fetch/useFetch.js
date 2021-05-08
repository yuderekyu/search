import { useQuery } from 'react-query';
import { fetchData } from 'modules/common/fetch';

const buildParams = (params) => {
  const paramsArr = Object.keys(params).map(key => `${key}=${params[key]}`);
  const paramStr = paramsArr.join('&');
  return paramStr;
};

const buildFetchOptions = (data, method) => {
  const dataStr = buildParams(data);
  const params = { params: dataStr };
  const paramsJson = JSON.stringify(params);
  return {
    method,
    body: paramsJson,
  };
};

const buildUrl = (endpoint, queryParams) => {
  const queryParamsStr = buildParams(queryParams);
  return `${endpoint}?${queryParamsStr}`;
};

const useFetch = ({
  endpoint,
  enabled,
  data,
  method,
  queryKey,
  queryParams,
}) => {
  const fetchOptions = buildFetchOptions(data, method);
  const url = buildUrl(endpoint, queryParams);
  return useQuery(queryKey, () => fetchData(url, fetchOptions), { enabled: Boolean(enabled) });
};

export default useFetch;
export {
  buildParams,
  buildFetchOptions,
  buildUrl,
};
