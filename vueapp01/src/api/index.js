import axios from "axios";

const baseURL = "s4hc-srv-dest01/odata/v4/service/risk";

const instance = axios.create({
  baseURL,
});

export const getTableData = async (params = { $top: 20, $skip: 0 }) => {
  const { data } = await instance.get("/Risks", {
    params,
  });

  return data.d?.results || data.d || data.value;
};
