import { useQuery } from 'react-query';
import { fetchData } from '.';

const buildParams = (params) => {
  console.log(params);
  const paramsArr = Object.keys(params).map(key => `${key}=${params[key]}`);
  const paramStr = paramsArr.join('&');
  console.log(paramStr);
  return paramStr;
};

const buildOptions = (data) => {
  const dataStr = buildParams(data);
  const params = { params: dataStr };
  const paramsJson = JSON.stringify(params);
  return {
    method: 'POST',
    body: paramsJson,
  };
};

const buildEndpoint = (url, queryParams) => {
  const queryParamsStr = buildParams(queryParams);
  return `${url}?${queryParamsStr}`;
};

const useFetch = ({
  url,
  queryParams,
  data,
  queryKey
}) => {
  console.log(data);
  const options = buildOptions(data);
  const endpoint = buildEndpoint(url, queryParams);
  console.log(endpoint);
  return useQuery(queryKey, () => fetchData(endpoint, options));
};

export default useFetch;
export {
  buildParams,
  buildOptions,
  buildEndpoint,
};
